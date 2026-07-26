import jwt from "jsonwebtoken";
import Redis from "ioredis";
import {getUserById} from "./db.js"
import {
  generateAccessToken,
  generateRefreshToken,
  generateCsrfToken,
} from "./token.service.js";

const redisClient = new Redis("rediss://default:gQAAAAAAAncNAAIgcDJkMTAyODVkYzY4YzA0M2E3YjYyODFjMDA0NDI1Mjk2Nw@huge-mole-161549.upstash.io:6379");

const ACCESS_SECRET = process.env.ACCESS_TOKEN_SECRET;
const REFRESH_SECRET = process.env.REFRESH_TOKEN_SECRET;

const REFRESH_TOKEN_EXPIRATION = process.env.REFRESH_TOKEN_EXPIRATION || "30d";
const ACCESS_TOKEN_EXPIRATION = process.env.ACCESS_TOKEN_EXPIRATION || "15m";
const CSRF_TOKEN_EXPIRATION = process.env.CSRF_TOKEN_EXPIRATION || "1h";

export async function authenticate(req, res, next) {
  try {
    const accessToken = req.cookies.accessToken;
    const refreshToken = req.cookies.refreshToken;
    const csrfToken = req.headers["x-csrf-token"];
    console.log("Access Token:", accessToken, "Refresh Token:", refreshToken, "CSRF Token:", csrfToken);
    if (!csrfToken) {
      return res.status(403).json({
        error: "CSRF token missing",
      });
    }

    // =========================
    // Try Access Token
    // =========================

    if (accessToken) {
      try {
        const payload = jwt.verify(accessToken, ACCESS_SECRET);

        req.user = payload;
        return next();
      } catch (err) {
        if (err.name !== "JsonWebTokenError") {
          return res.status(401).json({
            error: "Invalid Wrong access token",
          });
        }
      }
    }

    // =========================
    // Refresh Flow
    // =========================

    if (!refreshToken) {
      return res.status(401).json({
        error: "Refresh token missing",
      });
    }

    let refreshPayload;

    try {
      refreshPayload = jwt.verify(
        refreshToken,
        process.env.REFRESH_TOKEN_SECRET,
      );
    } catch {
      return res.status(401).json({
        error: "Invalid refresh token",
      });
    }

    const session = await redisClient.get(`refresh:${refreshPayload.jti}`);

    if (!session) {
      return res.status(401).json({
        error: "Refresh session revoked",
      });
    }

    const sessionData = JSON.parse(session);

    if (sessionData.userId !== refreshPayload.userId) {
      return res.status(401).json({
        error: "Session mismatch",
      });
    }

    if (sessionData.csrfToken !== csrfToken) {
      return res.status(403).json({
        error: "Invalid CSRF token",
      });
    }

    // Fetch latest user data
    const user = await getUserById(refreshPayload.userId);

    if (!user) {
      return res.status(401).json({
        error: "User not found",
      });
    }

    // =========================
    // Rotate Tokens
    // =========================

    await redisClient.del(`refresh:${refreshPayload.jti}`);

    const newAccessToken = generateAccessToken(user);

    const { refreshToken: newRefreshToken, refreshTokenId } =
      generateRefreshToken(user);

    const newCsrfToken = generateCsrfToken();

    await redisClient.set(
      `refresh:${refreshTokenId}`,
      JSON.stringify({
        userId: user._id.toString(),
        csrfToken: newCsrfToken,
      }),
      "EX",
      REFRESH_TOKEN_EXPIRATION,
    );

    res.cookie("accessToken", newAccessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: ACCESS_TOKEN_EXPIRATION,
    });

    res.cookie("refreshToken", newRefreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: REFRESH_TOKEN_EXPIRATION,
    });

    res.cookie("csrfToken", newCsrfToken, {
      httpOnly: false,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: CSRF_TOKEN_EXPIRATION,
    });

    req.user = {
      userId: user._id,
      email: user.email,
      role: user.role,
    };

    return next();
  } catch (err) {
    console.error(err);

    return res.status(500).json({
      error: "Internal server error",
    });
  }
}

import User from "./User.js";
import { hashPassword } from "./utils/hash.js";
import Redis from "ioredis";
import {generateAccessToken, generateRefreshToken, generateCsrfToken} from "./token.service.js";

const redisClient = new Redis("rediss://default:gQAAAAAAAncNAAIgcDJkMTAyODVkYzY4YzA0M2E3YjYyODFjMDA0NDI1Mjk2Nw@huge-mole-161549.upstash.io:6379");
const REFRESH_TOKEN_EXPIRATION = process.env.REFRESH_TOKEN_EXPIRATION || "30d";
const ACCESS_TOKEN_EXPIRATION = process.env.ACCESS_TOKEN_EXPIRATION || "15m";
const CSRF_TOKEN_EXPIRATION = process.env.CSRF_TOKEN_EXPIRATION || "1h";

export async function register(req, res) {
  try {
    const { email, password, userName } = req.body;

    let user = await User.findOne({ email });

    if (!user) {
      user = await User.create({
        email,
        password: await hashPassword(password),
        userName,
      });
    }
    const accessToken = generateAccessToken(user);

    const { refreshToken, refreshTokenId } = generateRefreshToken(user);

    const csrfToken = generateCsrfToken();

    await redis.set(
      `refresh:${refreshTokenId}`,
      JSON.stringify({
        userId: user._id,
        csrfToken,
      }),
      "EX",
      REFRESH_TOKEN_EXPIRATION,
    );
    return res
      .cookie("accessToken", accessToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "none",
        maxAge: ACCESS_TOKEN_EXPIRATION,
      })
      .cookie("refreshToken", refreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "none",
        maxAge: REFRESH_TOKEN_EXPIRATION,
      })
      .cookie("csrfToken", csrfToken, {
        httpOnly: false, // CSRF token should be accessible by the client
        secure: process.env.NODE_ENV === "production",
        sameSite: "none",
        maxAge: CSRF_TOKEN_EXPIRATION, // 1 hour
      })
      .status(201)
      .json({
        message: "User created",
        userId: user._id,
      });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
}

export async function login(req, res) {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).select("+password");

    if (!user)
      return res.status(401).json({
        message: "Invalid credentials",
      });

    const valid = await comparePassword(password, user.password);

    if (!valid)
      return res.status(401).json({
        message: "Invalid credentials",
      });

    const accessToken = generateAccessToken(user);

    const { refreshToken, refreshTokenId } = generateRefreshToken(user);

    const csrfToken = generateCsrfToken();

    await redis.set(
      `refresh:${refreshTokenId}`,
      JSON.stringify({
        userId: user._id,
        csrfToken,
      }),
      "EX",
      REFRESH_TOKEN_EXPIRATION,
    );

    res
      .cookie("accessToken", accessToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "none",
        maxAge: ACCESS_TOKEN_EXPIRATION,
      })
      .cookie("refreshToken", refreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "none",
        maxAge: REFRESH_TOKEN_EXPIRATION,
      })
      .cookie("csrfToken", csrfToken, {
        httpOnly: false, // CSRF token should be accessible by the client
        secure: process.env.NODE_ENV === "production",
        sameSite: "none",
        maxAge: CSRF_TOKEN_EXPIRATION,
      })
      .status(200)
      .json({
        message: "Login successful",
        userId: user._id,
      });

    res.status(200).json({ user });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
}

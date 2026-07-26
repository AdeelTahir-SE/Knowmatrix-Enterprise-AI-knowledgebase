import User from "./User.js";
import { hashPassword,comparePassword } from "./utils/hash.js";
import Redis from "ioredis";
import {generateAccessToken, generateRefreshToken, generateCsrfToken} from "./token.service.js";
import redisClient from "./redis.js"

// Parse environment variables to Integers (Seconds)
const REFRESH_TOKEN_EXPIRATION = parseInt(process.env.REFRESH_TOKEN_EXPIRATION || "604800", 10);
const ACCESS_TOKEN_EXPIRATION = parseInt(process.env.ACCESS_TOKEN_EXPIRATION || "900", 10);
const CSRF_TOKEN_EXPIRATION = parseInt(process.env.CSRF_TOKEN_EXPIRATION || "3600", 10);
const isProd = process.env.NODE_ENV === "production";


export async function register(req, res) {
  console.log("tokens",REFRESH_TOKEN_EXPIRATION, ACCESS_TOKEN_EXPIRATION, CSRF_TOKEN_EXPIRATION)
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
    console.log("0")
    const accessToken = generateAccessToken(user);
    console.log("1")
    const { refreshToken, refreshTokenId } = generateRefreshToken(user);

    const csrfToken = generateCsrfToken();

    await redisClient.set(
      `refresh:${refreshTokenId}`,
      JSON.stringify({
        userId: user._id,
        csrfToken,
      }),
      "EX",
      REFRESH_TOKEN_EXPIRATION,
    );
        console.log("2")

    return res
      .cookie("accessToken", accessToken, {
        httpOnly: true,
        secure: isProd,
        sameSite: "lax",
        maxAge: ACCESS_TOKEN_EXPIRATION * 1000,
      })
      .cookie("refreshToken", refreshToken, {
        httpOnly: true,
        secure: isProd,
        sameSite: "lax",
        maxAge: REFRESH_TOKEN_EXPIRATION * 1000,
      })
      .cookie("csrfToken", csrfToken, {
        httpOnly: false, // CSRF token should be accessible by the client
        secure: isProd,
        sameSite: "lax",
        maxAge: CSRF_TOKEN_EXPIRATION * 1000, // 1 hour
      })
      .status(201)
      .json({
        message: "User created",
        userId: user._id,
      });
  } catch (err) {
    console.log(err.message)
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

    await redisClient.set(
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
        secure: isProd,
        sameSite: "lax",
        maxAge: ACCESS_TOKEN_EXPIRATION * 1000,
      })
      .cookie("refreshToken", refreshToken, {
        httpOnly: true,
        secure: isProd,
        sameSite: "lax",
        maxAge: REFRESH_TOKEN_EXPIRATION * 1000,
      })
      .cookie("csrfToken", csrfToken, {
        httpOnly: false, // CSRF token should be accessible by the client
        secure: isProd,
        sameSite: "lax",
        maxAge: CSRF_TOKEN_EXPIRATION * 1000,
      })
      .status(200);
      res.json({
        message: "Login successful",
        user: user,
      });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
}

import jwt from "jsonwebtoken";
import crypto from "crypto";

const ACCESS_SECRET = process.env.ACCESS_TOKEN_SECRET;
const REFRESH_SECRET = process.env.REFRESH_TOKEN_SECRET;

const ACCESS_EXPIRES = process.env.ACCESS_TOKEN_EXPIRATION||"15m";
const REFRESH_EXPIRES = process.env.REFRESH_TOKEN_EXPIRATION||"30d";

export function generateAccessToken(user) {
    return jwt.sign(
        {
            userId: user._id,
            email: user.email,
            role: user.role,
        },
        ACCESS_SECRET,
        {
            expiresIn: ACCESS_EXPIRES,
        }
    );
}

export function generateRefreshToken(user) {
    // Unique ID for this refresh session
    const refreshTokenId = crypto.randomUUID();

    const refreshToken = jwt.sign(
        {
            userId: user._id,
            jti: refreshTokenId,
        },
        REFRESH_SECRET,
        {
            expiresIn: REFRESH_EXPIRES,
        }
    );

    return {
        refreshToken,
        refreshTokenId,
    };
}

export function generateCsrfToken() {
    return crypto.randomBytes(32).toString("hex");
}

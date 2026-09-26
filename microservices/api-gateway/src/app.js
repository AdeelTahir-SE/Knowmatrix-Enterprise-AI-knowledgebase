import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { createProxyMiddleware } from "http-proxy-middleware";
import cookieParser from "cookie-parser";
import { authenticate } from "./middleware.js";

dotenv.config();

const app = express();
app.use(cookieParser());

// CORS configuration
const allowedOrigins = process.env.FRONTEND_URL
  ? process.env.FRONTEND_URL.split(",").map((url) => url.trim())
  : [];

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (e.g., server-to-server, health-check, curl)
      if (!origin) return callback(null, true);

      if (
        allowedOrigins.length === 0 ||
        allowedOrigins.includes(origin) ||
        allowedOrigins.includes("*")
      ) {
        return callback(null, true);
      }

      return callback(null, false);
    },
    credentials: true,
  })
);

// Health check endpoints for Vercel and monitoring
app.get("/", (req, res) => {
  res.json({
    status: "ok",
    service: "api-gateway",
    environment: process.env.NODE_ENV || "development",
    timestamp: new Date().toISOString(),
  });
});

app.get("/health", (req, res) => {
  res.json({ status: "healthy" });
});

const getServiceRoutes = () => ({
  auth: process.env.AUTH_SERVICE_URL,
  analytics: process.env.ANALYTICS_SERVICE_URL,
  notification: process.env.NOTIFICATION_SERVICE_URL,
});

// Auth Service logger
app.use("/auth", (req, res, next) => {
  next();
});

// Auth Service proxy
app.use("/auth", (req, res, next) => {
  const target = process.env.AUTH_SERVICE_URL;
  if (!target) {
    return res.status(503).json({
      error: "Auth service target URL not configured (AUTH_SERVICE_URL missing)",
    });
  }

  return createProxyMiddleware({
    target,
    changeOrigin: true,
    pathRewrite: {
      "^/auth": "",
    },
  })(req, res, next);
});

// Authenticated services
app.use("/knowmatrix/:service", authenticate);

// Generic proxy for other services
app.use("/knowmatrix/:service", (req, res, next) => {
  const { service } = req.params;
  const serviceRoutes = getServiceRoutes();
  const target = serviceRoutes[service];

  if (!target) {
    return res.status(404).json({
      error: `Unknown service or service URL not configured: ${service}`,
    });
  }

  return createProxyMiddleware({
    target,
    changeOrigin: true,
    pathRewrite: {
      [`^/knowmatrix/${service}`]: "",
    },
  })(req, res, next);
});

export default app;

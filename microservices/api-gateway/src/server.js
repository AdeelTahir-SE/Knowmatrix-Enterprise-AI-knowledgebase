import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { createProxyMiddleware } from "http-proxy-middleware";
import cookieParser from "cookie-parser";
import {authenticate} from "./middleware.js";
dotenv.config({ path: './.env' });
const app = express();
app.use(cookieParser());



app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true, // Allow cookies to be sent
  
}));
// Only keep this if the gateway itself needs to read request bodies.
// Otherwise, remove it to avoid consuming the request stream.
// app.use(express.json());

const serviceRoutes = {
  auth: process.env.AUTH_SERVICE_URL,
  analytics: process.env.ANALYTICS_SERVICE_URL,
  notification: process.env.NOTIFICATION_SERVICE_URL,
};

// Auth Service
app.use("/auth", (req,res,next) => {
  console.log(req.cookies);
  next();
});


app.use(
  "/auth",
  createProxyMiddleware({
    target: serviceRoutes.auth,
    changeOrigin: true,
    pathRewrite: {
      "^/auth": "",
    },
  })
);


app.use("/knowmatrix/:service", authenticate);

// Generic proxy for other services
app.use("/knowmatrix/:service", (req, res, next) => {
  const { service } = req.params;
  const target = serviceRoutes[service];
  if (!target) {
    return res.status(404).json({
      error: `Unknown service: ${service}`,
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

app.listen(process.env.PORT || 5001, () => {
  console.log(`API Gateway running on port ${process.env.PORT || 5001}`);
});
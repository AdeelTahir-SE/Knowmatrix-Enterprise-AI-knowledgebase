import Redis from "ioredis";
import dotenv from "dotenv";

dotenv.config();

const redisUrl = process.env.REDIS_URL || "redis://127.0.0.1:6379";

const redisClient = new Redis(redisUrl, {
  maxRetriesPerRequest: 3,
  enableReadyCheck: false,
  lazyConnect: false,
  retryStrategy(times) {
    if (times > 5) {
      console.warn("⚠️ Redis retry limit exceeded. Pausing retries.");
      return null;
    }
    return Math.min(times * 100, 2000);
  },
});

redisClient.on("connect", () => {
  console.log("🟢 Successfully connected to Redis!");
});

redisClient.on("error", (err) => {
  console.error("🔴 Redis connection error:", err.message);
});

redisClient.on("ready", () => {
  console.log("🟢 Redis is ready to receive commands.");
});

export default redisClient;
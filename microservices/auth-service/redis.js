import Redis from "ioredis";
import dotenv from "dotenv";

dotenv.config();


const redisClient = new Redis(process.env.REDIS_URL, {
    // Optional but recommended settings
    maxRetriesPerRequest: null,
    enableReadyCheck: true,
    retryStrategy(times) {
        const delay = Math.min(times * 50, 2000);
        return delay;
    }
});

redisClient.on("connect", () => {
    console.log("🟢 Successfully connected to Redis!");
});

redisClient.on("error", (err) => {
    console.error("🔴 Redis connection error:", err);
});

redisClient.on("ready", () => {
    console.log("🟢 Redis is ready to receive commands.");
});

export default redisClient;
import mongoose from "mongoose";

let cachedConnection = null;

export default async function connectDB() {
  if (cachedConnection && mongoose.connection.readyState >= 1) {
    return cachedConnection;
  }

  if (!process.env.MONGO_URI) {
    throw new Error("MONGO_URI environment variable is missing");
  }

  cachedConnection = await mongoose.connect(process.env.MONGO_URI, {
    bufferCommands: false,
  });

  console.log("MongoDB Connected");
  return cachedConnection;
}

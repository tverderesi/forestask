import mongoose from "mongoose";
import { logger } from "@/config/logger";
export async function connectDb() {
  const db = await mongoose.connect(process.env.MONGO_URI as string, {});
  logger.info("Connected to MongoDB.");
  db.connection.on("close", () => {
    logger.info("Gracefully shutting down MongoDB...");
  });
  return db;
}

import cors from "cors";
import { Application } from "express";
import { logger } from "./logger";
export const applyCors = (app: Application, env: "production" | "development" | "test" | undefined) => {
  try {
    if (!env) {
      throw new Error("Environment not set");
    }
    app.use(
      cors({
        allowedHeaders: "*",
        origin: "*",
      })
    );
    logger.info("CORS enabled successfully");
  } catch (error: unknown) {
    if (error instanceof Error) {
      logger.error(error.message);
    } else {
      logger.error("An unknown error occurred");
    }
  }
};

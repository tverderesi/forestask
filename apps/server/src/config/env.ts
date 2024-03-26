import { config } from "dotenv";
import path from "path";
import { logger } from "./logger";

export const envPath = path.resolve(__dirname, "../..", ".env." + process.env.NODE_ENV);

export const setEnv = () => {
  config({ path: envPath });
  logger.info(`Environment variables loaded from ${envPath}`);
};

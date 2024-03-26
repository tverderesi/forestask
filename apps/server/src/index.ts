import { setEnv } from "@/config/env";
import { applyCors } from "@/config/cors";
import { connectDb } from "@/db";
import { logger } from "@/config/logger";
import express from "express";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { bindGraphQLServer } from "./graphql";

(async function startServer() {
  const app = express();
  app.use(cookieParser());
  app.use(bodyParser.json());
  setEnv();
  applyCors(app, process.env.NODE_ENV as "production" | "development" | "test" | undefined);
  await connectDb();
  await bindGraphQLServer(app);
  app.listen(process.env.PORT, () => {
    logger.info(`Server started at http://localhost:${process.env.PORT}`);
  });
  app.get("/", (req, res) => {
    res.send("Server is running.");
  });
})();

process.on("SIGINT", () => {
  logger.info("Gracefully shutting down...");
  process.exit(0);
});

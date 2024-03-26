import winston from "winston";

export const logger = winston.createLogger({
  level: "info",
  format: winston.format.combine(
    winston.format.colorize(), // Add color to the console output
    winston.format.simple() // Use a simple log format
  ),

  transports: [
    new winston.transports.Console(), // Output logs to the console
  ],
});

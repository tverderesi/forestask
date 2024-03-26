declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: "development" | "production" | "test";
      EXPRESS_PORT: string;
      MONGO_URI: string;
      RESEED_DB: "true" | "false";
    }
  }
}

export {};

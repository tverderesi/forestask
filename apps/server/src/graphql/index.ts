import { Application } from "express";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { schema } from "@/graphql/schema/index";
import { logger } from "@/config/logger";
export async function bindGraphQLServer(app: Application) {
  logger.info("Binding GraphQL Server...");
  const apolloServer = new ApolloServer({
    schema,
    introspection: process.env.NODE_ENV !== "production",
  });
  await apolloServer.start();

  app.use("/graphql", expressMiddleware(apolloServer));
  logger.info("GraphQL Server is ready.");
}

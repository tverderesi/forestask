import { printSchema } from "graphql";
import { join, dirname } from "path";
import { schema } from "@/graphql/schema/index";
import { existsSync, mkdirSync, writeFileSync } from "fs";

export const updateSchema = (relativePath = "../client/src/graphql/schema.graphql") => {
  const schemaPath = join(process.cwd(), relativePath);
  const directoryPath = dirname(schemaPath);
  if (!existsSync(directoryPath)) {
    console.log("Directory", directoryPath, "does not exist. Creating...");
    mkdirSync(directoryPath, { recursive: true });
  }
  writeFileSync(schemaPath, printSchema(schema), "utf-8");
  console.log("Schema Generated and copied to client at", schemaPath);
};

if (require.main === module) {
  console.log("Updating schema...");
  updateSchema();
  console.log("Schema updated.");
  process.exit(0);
}

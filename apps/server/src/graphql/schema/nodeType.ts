import { UserModel } from "@/models/User";
import { fromGlobalId, nodeDefinitions } from "graphql-relay";
import { userType } from "./userType";

export const { nodeInterface, nodesField, nodeField } = nodeDefinitions(
  async (globalId) => {
    const { type, id } = fromGlobalId(globalId);
    if (type === "User") {
      return await UserModel.findById(id);
    }

    return null;
  },
  (obj) => {
    if (obj instanceof UserModel) {
      return userType.name;
    }
    return undefined;
  }
);

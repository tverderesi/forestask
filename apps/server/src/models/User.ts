/** @format */
import { Schema, model, Document, Types } from "mongoose";
import bcrypt from "bcrypt";

interface IUser {
  username: string;
  createdAt: string;
  role: "user" | "admin";
  email: string;
  firstName: string;
  lastName: string;
  birthday: string;
  profilePicture: string;
  tasks: string[];
  password: string;
  updatedAt: string;
}

export interface UserModel extends IUser, Document {}

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
      enum: ["user", "admin"],
      default: "user",
    },
    email: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    birthday: {
      type: String,
      required: true,
    },
    profilePicture: {
      type: String,
      required: true,
    },
    tasks: {
      type: [Types.ObjectId],
      ref: "Task",
    },

    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

UserSchema.pre<UserModel>("save", async function (next) {
  if (this.isModified("password") || this.isNew) {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(this.password, saltRounds);
    this.password = hashedPassword;
  }
  next();
});

export const UserModel = model("User", UserSchema);

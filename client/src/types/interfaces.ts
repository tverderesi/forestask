import { Maybe } from "./Types";
import { UseFormRegister, UseFormHandleSubmit } from "react-hook-form";
export interface BigButtonProps {
  children: React.ReactNode | React.ReactNode[];
  to: string;
}

export interface IRegisterForm {
  username: Maybe<string>;
  birthday: Maybe<Date>;
  roleKey: Maybe<string>;
  email: Maybe<string>;
  password: Maybe<string>;
  confirmPassword: Maybe<string>;
  firstName: Maybe<string>;
  lastName: Maybe<string>;
}

export interface IRegisterState {
  currentPage: number;
  role: Maybe<"STUDENT" | "TEACHER" | "ADMIN">;
  profilePicture: Maybe<string>;
  register: UseFormRegister<IRegisterForm>;
  handleSubmit: UseFormHandleSubmit<IRegisterForm>;
  dispatch: React.Dispatch<IRegisterAction>;
}

export interface IRegisterContext {
  state: IRegisterState;
  dispatch: React.Dispatch<any>;
}

export type IRegisterReducer = React.Reducer<IRegisterState, IRegisterAction>;

export interface IRegisterAction {
  type: string;
  payload?: any;
}

export type HeroProps = {
  heroTextArray: string[];
  moving?: boolean;
};

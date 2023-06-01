import { Maybe } from "./Types";
import { UseFormRegister, UseFormHandleSubmit } from "react-hook-form";
export interface BigButtonProps {
  children: React.ReactNode | React.ReactNode[];
  to: string;
}

export interface IRegisterFormState {
  username: Maybe<string>;
  birthday: Maybe<Date>;
  privilegeKey: Maybe<string>;
  email: Maybe<string>;
  password: Maybe<string>;
  confirmPassword: Maybe<string>;
  firstName: Maybe<string>;
  lastName: Maybe<string>;
  profilePicture: Maybe<string>;
}

export interface IRegisterState extends IRegisterFormState {
  currentPage: number;
  role: Maybe<"STUDENT" | "TEACHER" | "ADMIN">;
  register: UseFormRegister<IRegisterFormState>;
  handleSubmit: UseFormHandleSubmit<IRegisterFormState>;
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

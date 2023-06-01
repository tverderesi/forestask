import { createContext, useReducer } from "react";
import { useForm } from "react-hook-form";
import { IRegisterFormState, IRegisterState } from "../types/interfaces";
import { RegisterReducer } from "./RegisterReducer";

const RegisterContext = createContext({} as IRegisterState);

export const RegisterProvider = ({ children }) => {
  const { register, handleSubmit } = useForm({
    defaultValues: {} as IRegisterFormState,
  });
  const initialState: IRegisterState = {
    username: null,
    birthday: null,
    privilegeKey: null,
    email: null,
    password: null,
    confirmPassword: null,
    firstName: null,
    lastName: null,
    profilePicture: null,
    currentPage: 1,
    role: null,
    register: register,
    handleSubmit: handleSubmit,
    dispatch: () => {},
  };

  const [state, dispatch] = useReducer(RegisterReducer, initialState);

  return (
    <RegisterContext.Provider value={{ ...state, dispatch: dispatch }}>
      {children}
    </RegisterContext.Provider>
  );
};

export default RegisterContext;

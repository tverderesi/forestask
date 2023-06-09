import { createContext, useReducer } from "react";
import { useForm } from "react-hook-form";
import { IRegisterForm, IRegisterState } from "../types/interfaces";
import { RegisterReducer } from "./RegisterReducer";

const RegisterContext = createContext({} as IRegisterState);

export const RegisterProvider = ({ children }) => {
  const { register, handleSubmit } = useForm({
    defaultValues: {} as IRegisterForm,
  });
  
  const initialState: IRegisterState = {
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

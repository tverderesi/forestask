/** @format */

import { createContext, useReducer } from "react";

import { AppContextTypes, Props } from "../types/Types";

import { AppReducer } from "./AppReducer";
import FakeDataGenerator from "./FakeDataGenerator";

const AppContext = createContext({} as AppContextTypes);

export const AppProvider = ({ children }: Props) => {
  const initialState = {
    filters: {
      subjects: "",
      subjectsColor: "",
      activities: "",
      activitiesColor: "",
      deadline: "",
      checked: "",
    },
    showForest: false,
    direction: 1,
    dataTheme: "light",
  };

  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <AppContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;

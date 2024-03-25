import {
  IRegisterState,
  IRegisterReducer,
  IRegisterAction,
} from "../types/interfaces";

export const RegisterReducer: IRegisterReducer = (
  state: IRegisterState,
  action: IRegisterAction
) => {
  switch (action.type) {
    default:
      return state;
    case "CLICK_ROLE":
      return {
        ...state,
        currentPage: state.currentPage + 1,
        role: action.payload,
      };
    case "SET_AVATAR":
      return {
        ...state,
        profilePicture: action.payload,
      };
    case "NEXT_PAGE":
      return {
        ...state,
        currentPage: state.currentPage + 1,
      };
    case "PREV_PAGE":
      return {
        ...state,
        currentPage: state.currentPage - 1,
      };
    case "SET_PAGE":
      return {
        ...state,
        currentPage: action.payload,
      };
  }
};

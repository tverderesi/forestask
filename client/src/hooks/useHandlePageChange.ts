import { IRegisterAction } from "../types/interfaces";

type ThandlePageChange = (
  direction: "+" | "-",
  dispatch: React.Dispatch<IRegisterAction>
) => (e: React.MouseEvent) => void;

const useHandlePageChange: ThandlePageChange = (direction, dispatch) => {
  return (e) => {
    e.preventDefault();
    direction === "+"
      ? dispatch({ type: "NEXT_PAGE" })
      : dispatch({ type: "PREV_PAGE" });
  };
};

export default useHandlePageChange;

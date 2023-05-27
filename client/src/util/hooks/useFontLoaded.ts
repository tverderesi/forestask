import { Dispatch, useEffect } from "react";

export const useFontLoaded = (
  dispatch: Dispatch<{ type: string; payload?: any }>
) => {
  useEffect(() => {
    document.fonts.ready.then(() => {
      dispatch({ type: "FONT_LOADED" });
    });
  }, []);
};

import palleteCreator from "../components/style/PaletteCreator";
/** @AppReducer */
export const AppReducer = (state: any, action: any) => {
  const subjectDarkTextBaseColor = "hsl(276, 53%, 51%)";
  const subjectTextBaseColor = "hsl(276, 53%, 51%)";
  switch (action.type) {
    default:
      return state;

    case "LOAD_SUBJECTS":
      const subjectPalette = palleteCreator(
        action.payload,
        subjectTextBaseColor,
        subjectDarkTextBaseColor
      );
      return {
        ...state,
        subjects: action.payload,
        subjectPalette: subjectPalette,
        loading: true,
        loadingStatus: "LOAD_SUBJECTS",
      };

    case "CLEAR_CARDS":
      return { ...state, cards: [], loadingStatus: "CLEAR_CARDS" };

    case "CHANGE_PAGE":
      return {
        ...state,
        page: action.payload.newPage,
        cards: action.payload.currentCards,
      };
    case "FETCH_ACTIVITIES":
      return {
        ...state,
        activities: action.payload,
        loadingStatus: "FETCH_ACTIVITIES",
      };
    case "CREATE_PALETTES":
      return {
        ...state,
        subjectPalette: action.payload.subjectPalette,
        activityPalette: action.payload.activityPalette,
        loadingStatus: "CREATE_PALETTES",
      };
    case "ADD_TO_FILTER":
      return { ...state, filters: action.payload };

    case "SET_GAME_LEVELS":
      return {
        ...state,
        gameLevels: action.payload,
        loadingStatus: "SET_GAME_LEVELS",
      };
    case "SET_PAGE":
      return { ...state, page: action.payload };
    case "SET_USER_DATA":
      return {
        ...state,
        userData: action.payload,
        loadingStatus: "SET_USER_DATA",
      };
    case "UPDATE_PAGES_PARAMETERS":
      return {
        ...state,
        cardsPerPage: action.payload.cardsPerPage,
        maxPages: action.payload.maxPages,
      };

    case "TOGGLE_FOREST":
      return { ...state, showForest: action.payload };

    case "DIRECTION":
      return { ...state, direction: action.payload };
    case "FONT_LOADED":
      return { ...state, fontLoaded: true };

    case "SET_AVATAR":
      return { ...state, selectedAvatar: action.payload };
  }
};

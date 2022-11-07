import palleteCreator from '../components/style/PaletteCreator';
/** @AppReducer */
export const AppReducer = (state: any, action: any) => {
  const subjectTextBaseColor = 'hsl(276, 53%, 51%)';
  switch (action.type) {
    default:
      return state;
    case 'LOGIN_SUCCESS':
      return { ...state, loginSuccess: true };
    case 'LOAD_TOTAL_CARDS':
      return { ...state, totalCards: action.payload, loading: true };
    case 'RENDER_FIRST_CARD':
      return { ...state, cards: action.payload, loading: true };
    case 'LOAD_SUBJECTS':
      const subjectPallete = palleteCreator(
        action.payload,
        subjectTextBaseColor
      );
      return {
        ...state,
        subjects: action.payload,
        subjectPallete: subjectPallete,
        loading: true,
      };
    case 'SET_PAGES_PARAMETERS':
      return {
        ...state,
        cardsPerPage: action.payload.cardsPerPage,
        maxPages: action.payload.maxPages,
        loading: true,
      };
    case 'CLEAR_CARDS':
      return { ...state, cards: [], loading: true };
    case 'RENDER_CARDS':
      return { ...state, cards: action.payload, loading: true };
    case 'LOAD_SUCCESS':
      return { ...state, loadSuccess: true };
    case 'CHANGE_PAGE':
      return {
        ...state,
        page: action.payload.newPage,
        cards: action.payload.currentCards,
      };
    case 'FETCH_ACTIVITIES':
      return { ...state, activities: action.payload };
    case 'CREATE_PALETTES':
      return {
        ...state,
        subjectPalette: action.payload.subjectPalette,
        activityPalette: action.payload.activityPalette,
      };
    case 'ADD_TO_FILTER':
      return { ...state, filters: action.payload };

    case 'SET_GAME_LEVELS':
      return { ...state, gameLevels: action.payload, loading: true };
    case 'SET_PAGE':
      return { ...state, page: action.payload };
    case 'SET_USER_DATA':
      return { ...state, userData: action.payload, loading: true };
  }
};

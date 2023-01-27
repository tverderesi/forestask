import palleteCreator from '../components/style/PaletteCreator';
/** @AppReducer */
export const AppReducer = (state: any, action: any) => {
  const subjectDarkTextBaseColor = 'hsl(276, 53%, 51%)';
  const subjectTextBaseColor = 'hsl(276, 53%, 51%)';
  switch (action.type) {
    default:
      return state;
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    case 'LOGIN_SUCCESS':
      return { ...state, loginSuccess: 'LOGIN_SUCCESS' };
    case 'LOAD_TOTAL_CARDS':
      return {
        ...state,
        totalCards: action.payload,
        loadingStatus: 'LOGIN_SUCCESS',
      };
    case 'RENDER_FIRST_CARD':
      return {
        ...state,
        cards: action.payload,
        loadingStatus: 'RENDER_FIRST_CARD',
      };
    case 'LOAD_SUBJECTS':
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
        loadingStatus: 'LOAD_SUBJECTS',
      };
    case 'SET_PAGES_PARAMETERS':
      return {
        ...state,
        cardsPerPage: action.payload.cardsPerPage,
        maxPages: action.payload.maxPages,
        loadingStatus: 'SET_PAGES_PARAMETERS',
      };
    case 'CLEAR_CARDS':
      return { ...state, cards: [], loadingStatus: 'CLEAR_CARDS' };
    case 'RENDER_CARDS':
      return { ...state, cards: action.payload, loadingStatus: 'RENDER_CARDS' };
    case 'INIT_SUCCESS':
      return {
        ...state,
        initSuccess: true,
        loadingStatus: 'INIT_SUCCESS',
      };
    case 'CHANGE_PAGE':
      return {
        ...state,
        page: action.payload.newPage,
        cards: action.payload.currentCards,
      };
    case 'FETCH_ACTIVITIES':
      return {
        ...state,
        activities: action.payload,
        loadingStatus: 'FETCH_ACTIVITIES',
      };
    case 'CREATE_PALETTES':
      return {
        ...state,
        subjectPalette: action.payload.subjectPalette,
        activityPalette: action.payload.activityPalette,
        loadingStatus: 'CREATE_PALETTES',
      };
    case 'ADD_TO_FILTER':
      return { ...state, filters: action.payload };

    case 'SET_GAME_LEVELS':
      return {
        ...state,
        gameLevels: action.payload,
        loadingStatus: 'SET_GAME_LEVELS',
      };
    case 'SET_PAGE':
      return { ...state, page: action.payload };
    case 'SET_USER_DATA':
      return {
        ...state,
        userData: action.payload,
        loadingStatus: 'SET_USER_DATA',
      };
    case 'UPDATE_PAGES_PARAMETERS':
      return {
        ...state,
        cardsPerPage: action.payload.cardsPerPage,
        maxPages: action.payload.maxPages,
      };

    case 'UPDATE_PAGE':
      return {
        ...state,
        cards: action.payload,
      };
    case 'TOGGLE_FOREST':
      return { ...state, showForest: action.payload };

    case 'DIRECTION':
      return { ...state, direction: action.payload };

    case 'CHANGE_COLOR':
      return { ...state, dataTheme: action.payload };
    case 'ADD_CARD':
      return { ...state, addCard: action.payload };
    case 'SEND_CARD':
      return { ...state, addCard: false };
  }
};

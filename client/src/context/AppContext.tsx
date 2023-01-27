import { useEffect, createContext, useState, useReducer } from 'react';

import { AppContextTypes, Props } from '../types/Types';
import { fetchCards, setPagesParameters } from './AppFunctions';
import { AppReducer } from './AppReducer';
import FakeDataGenerator from './FakeDataGenerator';

const AppContext = createContext({} as AppContextTypes);

export const AppProvider = ({ children }: Props) => {
  const initialState = {
    initSuccess: false,
    loading: false,
    loginSuccess: false,
    totalCards: 0,
    cards: [],
    subjects: [],
    subjectPalette: {},
    activityPalette: {},
    cardsPerPage: 1,
    maxPages: 1,
    page: 0,
    userData: { xp: 0, level: 0, name: 'Thomas' },
    activities: [],
    filters: {
      subjects: '',
      subjectsColor: '',
      activities: '',
      activitiesColor: '',
      deadline: '',
      checked: '',
    },
    gameLevels: {},
    loadingStatus: '',
    showForest: false,
    direction: 1,
    dataTheme: 'light',
    addCard: true,
  };

  const [state, dispatch] = useReducer(AppReducer, initialState);
  const setInitialCardHeight = windowWidth => {
    if (windowWidth > 1290 || (windowWidth < 825 && windowWidth > 540)) {
      return 94;
    } else if (windowWidth > 825 && windowWidth < 1290) {
      return 114;
    } else if (windowWidth < 540) {
      return 130;
    }
  };
  const initialCardHeight = setInitialCardHeight(window.innerWidth);
  const [cardHeight, setCardHeight] = useState(initialCardHeight);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleWindowResize);
    setCardHeight(setInitialCardHeight(windowWidth));
    const payload = setPagesParameters(
      setInitialCardHeight(window.innerWidth),
      windowHeight,
      state.totalCards
    );

    console.log(payload);

    dispatch({ type: 'UPDATE_PAGES_PARAMETERS', payload: payload });
    updatePage();

    // Return a function from the effect that removes the event listener
    return () => window.removeEventListener('resize', handleWindowResize);
    //eslint-disable-next-line
  }, [windowWidth, windowHeight]);
  const updatePage = async () => {
    const params = {
      subject: state.filters.subjects,
      activity: state.filters.activities,
      deadline: state.filters.deadline,
      checked: state.filters.checked,
      _start: state.page,
      _limit: state.cardsPerPage,
    };

    const res = await fetchCards(params);
    dispatch({ type: 'UPDATE_PAGE', payload: res });
  };
  return (
    <AppContext.Provider
      value={{
        ...state,
        cardHeight,
        setCardHeight,
        dispatch,
        windowWidth,
        windowHeight,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;

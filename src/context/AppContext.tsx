import { useEffect, createContext, useState, useReducer } from 'react';

import { CardListContextTypes, Props } from '../types/ContextTypes';
import { AppReducer } from './AppReducer';

const AppContext = createContext({} as CardListContextTypes);

export const AppProvider = ({ children }: Props) => {
  const initialState = {
    loading: false,
    loginSuccess: false,
    totalCards: 0,
    cards: [],
    subjects: [],
    subjectPalette: {},
    activityPalette: {},
    cardsPerPage: 1,
    maxPages: 1,
    loadSuccess: false,
    page: 0,
    activities: [],
    filters: {
      subjects: '',
      subjectsColor: '',
      activities: '',
      activitiesColor: '',
    },
  };

  const [state, dispatch] = useReducer(AppReducer, initialState);

  const [cardHeight, setCardHeight] = useState(0);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => setWindowHeight(window.innerHeight);

    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, [windowHeight]);

  useEffect(() => {
    const handleWindowResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowResize);

    // Return a function from the effect that removes the event listener
    return () => window.removeEventListener('resize', handleWindowResize);
  }, [windowWidth]);

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

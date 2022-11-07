import { useEffect, createContext, useState, useReducer } from 'react';

import { AppContextTypes, Props } from '../types/Types';
import { AppReducer } from './AppReducer';
import FakeDataGenerator from './FakeDataGenerator';

const AppContext = createContext({} as AppContextTypes);

export const AppProvider = ({ children }: Props) => {
  const initialState = {
    loadSuccess: false,
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

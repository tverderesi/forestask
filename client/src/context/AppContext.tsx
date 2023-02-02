/** @format */

import { createContext, useReducer } from 'react';

import { AppContextTypes, Props } from '../types/Types';

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

    showForest: false,
    direction: 1,
    dataTheme: 'light',
    addCard: false,
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

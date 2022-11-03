import { ReactNode } from 'react';
export interface CardListContextTypes {
  activities: any[];
  activityPalette: any;
  cardHeight: number;
  cards: any[];
  cardsPerPage: number;
  loadSuccess: boolean;
  loading: boolean;
  loginSuccess: boolean;
  maxPages: number;
  page: number;
  setCardHeight: any;
  subjects: any[];
  subjectPalette: any;
  totalCards: number;
  windowHeight: number;
  windowWidth: number;
  filters: any;
  dispatch: (string) => { any };
}

export type Props = { children?: ReactNode };

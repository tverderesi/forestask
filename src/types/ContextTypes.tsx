import { ReactNode } from 'react';
export interface CardListContextTypes {
  cards: any;
  page: number;
  pageLimit: number;
  numCards: any;
  windowWidth: number;
  handleClick: any;
  subjects: any;
  subjectPallete: any;
  activities: any;
  setLoginSuccess: any;
  loginSuccess: boolean;
  loading: any;
}

export type Props = { children?: ReactNode };

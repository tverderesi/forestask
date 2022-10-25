import {ReactNode} from 'react'
export interface CardListContextTypes {
    cards: any;
    page: number;
    pageLimit: number;
    numCards: any;
    handleClick: any;
  }
  
export type Props = { children?: ReactNode };
  
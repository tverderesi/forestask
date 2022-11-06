import { ReactNode } from 'react';

//Semi-Primitive Types

export type type = 'Homework' | 'Test';
export type subject = 'Math' | 'Music' | 'Science' | 'Portuguese' | 'English';

//Component Types

export type Card = {
  id: number;
  content: string;
  type: type;
  subject: subject;
  xp: number;
  checked: boolean;
  title: string;
  deadline: string;
};

export type AccordionType = {
  name: 'Subjects' | 'Activities' | 'Deadline' | 'Completed';
  categories: subject[] | type[] | string;
  itemPalette: ItemPalette | string;
  icon: ReactNode;
};

//State Types

export type ItemPalette = {
  subjects: string;
  subjectsColor: string;
  activities: string;
  activitiesColor: string;
};

export type Filters = {
  activities: type;
  activitiesColor: any;
  checked: boolean;
  date: Date;
  subjects: subject;
  subjectsColor: any;
};

export interface State {
  activities: type[];
  activityPalette: any;
  filters: Filters;
  maxPages: number;
  page: number;
  cards: Card[];
  cardsPerPage: number;
  loadSuccess: boolean;
  loading: boolean;
  loginSuccess: boolean;
  subjects: subject[];
  subjectPalette: any;
  totalCards: number;
}

//Dispatch Action Type
export type Action = { type: string; payload: any };

export type Dispatch = { state: State; Action: Action };

//Context Types
export interface AppContextTypes extends State {
  windowWidth: number;
  windowHeight: number;
  cardHeight: number;
  setCardHeight: any;
  filters: any;
  dispatch: (action: Action) => { state: State };
}

export type Props = { children?: ReactNode };

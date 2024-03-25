/** @format */

import { ReactNode } from "react";
import { IconType } from "react-icons";

//Semi-Primitive Types
export type Maybe<T> = T | null;
export type type = string;
export type subject = string;

//Component Types

export type Card = {
  id: string;
  content: string;
  type: type;
  subject: subject;
  xp: number;
  checked: any;
  title: string;
  deadline: Date;
};

export type AccordionType = {
  name: "Subjects" | "Activities" | "Deadline" | "Completed";
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
  initSuccess: boolean;
  loading: boolean;
  loginSuccess: boolean;
  subjects: subject[];
  subjectPalette: any;
  totalCards: number;
  gameLevels: any;
  userData: { xp: number; name: string; level: number };
  loadingStatus: string;
  showForest: boolean;
  direction: -1 | 1;
  dataTheme: "dark" | "light";
  addCard: boolean;
  fontLoaded: boolean;
  selectedAvatar: string;
}

//Dispatch Action Type
export type Action = { type: string; payload?: any };

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

export type BackButtonProps = {
  href: string;
};

export type StepProps = {
  steps: string[];
  totalPages?: number;
};

export type StepsType = {
  steps: boolean | string[];
};

export interface ActivityCardProps {
  item: Card;
}

export interface CardContentProps {
  item: Card;
  open: boolean;
  handleCardClick: () => void;
}

export interface CardButtonProps {
  item: Card;
  completed: boolean;
  userData: any;
  setCompleted: React.Dispatch<React.SetStateAction<boolean>>;
  dispatch: any;
  gameLevels: any;
}

export type PlaceholderName = string;

export type SingleAvatarProps = {
  item: string;
};

export type DropdownProps = {
  children: ReactNode[];
  hover?: boolean;
  position?: "top" | "bottom" | "left" | "right";
  align?: "start" | "end";
  forceOpen?: boolean;
  arrow?: boolean;
  className?: string;
};

export type FeatureProps = {
  icon: string;
  description: ReactNode;
  accentColor: string;
};

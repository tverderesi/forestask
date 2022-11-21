//Semi Primitive Types

import { Card } from '../../types/Types';

export type type = string;

export type subject = string;

//Function Types

export type handleDone = (id: number) => void;

export type addDone = (id: number) => void;

export type handleCardClick = () => void;

//Object Types

export type ChildProps = {
  item: Card;
};

export type CardTags = {
  subject: subject;
  type: type;
  deadline: number;
  xp: number;
};

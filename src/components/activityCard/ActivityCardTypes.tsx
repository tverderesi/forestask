//Semi Primitive Types

export type type = string;

export type subject = string;

//Function Types

export type handleDone = (id: number) => void;

export type addDone = (id: number) => void;

export type handleCardClick = () => void;

//Object Types

export type item = {
  deadline: number;
  id: number;
  content: string;
  type: type;
  subject: subject;
  xp: number;
  checked: boolean;
  title: string;
};

export type ChildProps = {
  item: item;
};

export type CardTags = {
  subject: subject;
  type: type;
  deadline: number;
  xp: number;
};

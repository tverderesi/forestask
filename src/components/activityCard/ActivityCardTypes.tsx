//Semi Primitive Types

export type type = 'Homework' | 'Test';

export type subject = 'Math' | 'Music' | 'Science' | 'Portuguese' | 'English';

//Function Types

export type handleDone = (id: number) => void;

export type addDone = (id: number) => void;

export type handleCardClick = (content: string) => void;

//Object Types

export type item = {
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
  deadline?: string;
  xp?: number;
};

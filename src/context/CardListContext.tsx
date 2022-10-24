import React from 'react';
import {
  useEffect,
  createContext,
  useState,
  SetStateAction,
  ReactNode,
} from 'react';
import { PalleteCreatorFunction } from '../components/shared/PalleteCreator';

interface CardListContextTypes {
  cards: any;
  page: number;
  pageLimit: number;
  numCards: any;
  text: any;
  PalleteCreator: any;
  handleCardClick: any;
  handleClick: any;
}

interface Props {
  children?: ReactNode;
  // any props that come into the component
}

type windowHeight = number;

const CardListContext = createContext({} as CardListContextTypes);

export const CardListProvider = ({ children }: Props) => {
  const PalleteCreator = PalleteCreatorFunction;

  const [cards, setCards] = useState([]);

  //Discovering the number of cards per page for rendering
  const windowHeight = window.visualViewport?.height as windowHeight;
  const [numCards, setNumCards] = useState(
    Math.round((windowHeight * 0.8 - 73.6) / (88 + 15 + 8))
  ); //@todo

  //Setting pageLimit and the first page to be rendered.
  const [page, setPage] = useState(0);

  const fetchSize = async () => {
    const response = await fetch(
      'http://localhost:5000/cards/?_start=0&_end=0',
      {
        headers: { 'Content-Type': 'json' },
      }
    );
    const data = Number(response.headers.get('X-total-count'));
    setPageLimit(Math.floor(data / numCards));
  };

  const [pageLimit, setPageLimit] = useState(0);
  //Setting done state
  const fetchItems = async (offset: number, limit: number) => {
    const response = await fetch(
      `http://localhost:5000/cards?_start=${offset}&_limit=${limit}`,
      {
        headers: { 'Content-Type': 'text/html' },
      }
    );
    const data = await response.json();
    setCards(data);
  };

  useEffect(() => {
    fetchItems(numCards * page, numCards);
  }, [page, numCards]);

  useEffect(() => {
    fetchSize();
  });

  const handleClick = (idx: number) => {
    setPage(
      page + idx > pageLimit ? pageLimit : page + idx < 0 ? page : page + idx
    );
  };

  const [text, setText] = useState('');
  const handleCardClick = (item: { content: SetStateAction<string> }) => {
    return text ? setText('') : setText(item.content);
  };

  return (
    <CardListContext.Provider
      value={{
        cards,
        page,
        pageLimit,
        numCards,
        text,
        PalleteCreator,
        handleCardClick,
        handleClick,
      }}
    >
      {children}
    </CardListContext.Provider>
  );
};

export default CardListContext;

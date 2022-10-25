import React from 'react';
import { useEffect, createContext, useState } from 'react';

import { CardListContextTypes, Props } from '../types/ContextTypes';

const CardListContext = createContext({} as CardListContextTypes);

export const CardListProvider = ({ children }: Props) => {
  const [cards, setCards] = useState([]);

  //Discovering the number of cards per page for rendering
  const [windowHeight, setWindowHeight] = useState(0);

  const [numCards, setNumCards] = useState(
    Math.round((window.innerHeight * 0.8 - 73.6) / (88 + 15 + 8))
  );

  useEffect(() => {
    window.addEventListener('resize', e => {
      setWindowHeight(window.innerHeight);
    });
    setNumCards(
      Math.round(((window.innerHeight - 73.6) * 0.85) / (88 + 15 + 8)) - 1
    );
  }, [windowHeight]);

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
  }, []);

  const handleClick = (idx: number) => {
    setPage(
      page + idx > pageLimit ? pageLimit : page + idx < 0 ? page : page + idx
    );
  };

  return (
    <CardListContext.Provider
      value={{
        cards,
        page,
        pageLimit,
        numCards,
        handleClick,
      }}
    >
      {children}
    </CardListContext.Provider>
  );
};

export default CardListContext;

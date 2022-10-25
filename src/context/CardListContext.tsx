import React from 'react';
import { useEffect, createContext, useState } from 'react';

import { CardListContextTypes, Props } from '../types/ContextTypes';

const CardListContext = createContext({} as CardListContextTypes);

export const CardListProvider = ({ children }: Props) => {
  const [cards, setCards] = useState([]);
  const [page, setPage] = useState(0);
  const [pageLimit, setPageLimit] = useState(0);
  //Discovering the number of cards per page for rendering
  const [windowHeight, setWindowHeight] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

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

  useEffect(() => {
    const handleWindowResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowResize);

    // Return a function from the effect that removes the event listener
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  //Setting pageLimit and the first page to be rendered.

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
    fetchSize();
    // eslint-disable-next-line
  }, [page, numCards]);

  useEffect(() => {}, []);

  /**
   * Handles tasks' page navigation in the main view.
   * @param page - current page
   * @param idx - index, advances (+1) and retrocedes (-1) pages.
   * @param pageLimit - maximum number of pages allowed.
   */
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
        windowWidth,
        handleClick,
      }}
    >
      {children}
    </CardListContext.Provider>
  );
};

export default CardListContext;

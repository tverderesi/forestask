import { useEffect, createContext, useState } from 'react';
import { PalleteCreatorFunction } from '../components/shared/PalleteCreator';

const CardListContext = createContext();

export const CardListProvider = ({ children }) => {
  const PalleteCreator = PalleteCreatorFunction;

  const [cards, setCards] = useState([]);

  //Discovering the number of cards per page for rendering
  const [numCards, setNumCards] = useState(
    Math.round((window.visualViewport.height * 0.8 - 73.6) / (88 + 15 + 8))
  );

  //Setting pageLimite and the first page to be rendered.
  const [page, setPage] = useState(0);

  const fetchSize = async () => {
    const response = await fetch('http://localhost:5000/cards/?_start=0&_end=0', {
      headers: { 'Content-Type': 'json' },
    });
    const data = await response.headers.get('X-total-count');
    setPageLimit(Math.floor(data / numCards));
  };
  const [pageLimit, setPageLimit] = useState(0);
  //Setting done state
  const fetchItems = async (offset, limit) => {
    const response = await fetch(`http://localhost:5000/cards?_start=${offset}&_limit=${limit}`, {
      headers: { 'Content-Type': 'text/html' },
    });
    const data = await response.json();
    setCards(data);
  };

  useEffect(() => {
    fetchItems(numCards * page, numCards);
  }, [page, numCards]);

  useEffect(() => {
    fetchSize();
  });

  const handleClick = idx => {
    setPage(page + idx > pageLimit ? pageLimit : page + idx < 0 ? page : page + idx);
  };

  const [text, setText] = useState('');
  const handleCardClick = item => {
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

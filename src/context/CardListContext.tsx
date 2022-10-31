import { useEffect, createContext, useState } from 'react';
import palleteCreator from '../components/style/PalleteCreator';

import { CardListContextTypes, Props } from '../types/ContextTypes';

const CardListContext = createContext({} as CardListContextTypes);

export const CardListProvider = ({ children }: Props) => {
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [loading, setLoading] = useState({
    cards: true,
    pageLimit: true,
    subjects: true,
    activities: true,
  });
  const [cards, setCards] = useState([]);
  const [page, setPage] = useState(0);
  const [pageLimit, setPageLimit] = useState(0);
  //Discovering the number of cards per page for rendering
  const [windowHeight, setWindowHeight] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [subjects, setSubjects] = useState([]);
  const [activities, setActivities] = useState([]);

  const [numCards, setNumCards] = useState(
    Math.round((window.innerHeight * 0.8 - 73.6) / (88 + 15 + 8))
  );

  const subjectTextBaseColor = 'hsl(276, 53%, 51%)';
  const subjectPallete = palleteCreator(subjects, subjectTextBaseColor);
  useEffect(() => {
    const handleWindowResize = () => setWindowHeight(window.innerHeight);

    window.addEventListener('resize', handleWindowResize);

    setNumCards(
      Math.round(((window.innerHeight - 73.6) * 0.85) / (88 + 15 + 8)) - 1
    );
    return () => window.removeEventListener('resize', handleWindowResize);
  }, [windowHeight]);

  useEffect(() => {
    const handleWindowResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowResize);

    // Return a function from the effect that removes the event listener
    return () => window.removeEventListener('resize', handleWindowResize);
  }, [windowWidth]);

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
    setLoading(prevState => ({ ...prevState, pageLimit: false }));
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
    setLoading(prevState => ({ ...prevState, cards: false }));
  };

  useEffect(() => {
    fetchItems(numCards * page, numCards);
    fetchSize();

    fetchSubjects();
    fetchActivities();
  }, [page, numCards]);

  async function fetchSubjects() {
    const response = await fetch('http://localhost:5000/subjects', {
      headers: { 'Content-Type': 'json' },
    });
    const data = await response.json();
    setSubjects(data);
    setLoading(prevState => ({ ...prevState, subjects: false }));
  }
  async function fetchActivities() {
    const response = await fetch('http://localhost:5000/activities', {
      headers: { 'Content-Type': 'json' },
    });
    const data = await response.json();
    setActivities(data);
    setLoading(prevState => ({ ...prevState, activities: false }));
  }
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
        loginSuccess,
        pageLimit,
        numCards,
        windowWidth,
        subjects,
        subjectPallete,
        activities,
        loading,
        handleClick,
        setLoginSuccess,
      }}
    >
      {children}
    </CardListContext.Provider>
  );
};

export default CardListContext;

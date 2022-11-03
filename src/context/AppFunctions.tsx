import paletteCreator from '../components/style/PaletteCreator';
export async function changePage(currentPage, index, maxPages, cardsPerPage) {
  let newPage = currentPage + index;
  newPage = newPage >= maxPages ? maxPages : newPage < 0 ? 0 : newPage;
  const currentCards = await fetchItems(newPage * cardsPerPage, cardsPerPage);
  console.log(currentCards);
  return { newPage, currentCards };
}

export async function fetchActivities() {
  const response = await fetch('http://localhost:5000/activities', {
    headers: { 'Content-Type': 'json' },
  });
  return await response.json();
}

export const fetchItems = async (offset: number, limit: number) => {
  const response = await fetch(
    `http://localhost:5000/cards?_start=${offset}&_limit=${limit}`,
    {
      headers: { 'Content-Type': 'text/html' },
    }
  );
  const data = await response.json();
  return data;
};

export const fetchSize = async () => {
  const response = await fetch('http://localhost:5000/cards/?_start=0&_end=0', {
    headers: { 'Content-Type': 'json' },
  });
  const data = Number(response.headers.get('X-total-count'));
  return data;
};

export async function createSubjectPalette() {
  const subjects = await fetchSubjects();
  const subjectPalette = paletteCreator(subjects, '#c491ff');
  return subjectPalette;
}

export async function createActivityPalette() {
  const activities = await fetchActivities();
  const activityPalette = paletteCreator(activities, '#ff6f08');

  return activityPalette;
}

export async function fetchSubjects() {
  const response = await fetch('http://localhost:5000/subjects', {
    headers: { 'Content-Type': 'json' },
  });
  const data = await response.json();
  return data;
}

export function setPagesParameters(cardHeight, windowHeight, totalCards) {
  const cardsPerPage = Math.floor(windowHeight / (cardHeight + 16)) - 1;
  const maxPages = Math.ceil(totalCards / cardsPerPage);
  const PageParameters = { cardsPerPage: cardsPerPage, maxPages: maxPages };
  return PageParameters;
}

export const filterCards = async params => {
  const paramBuilder = queryParams => {
    const params = {};
    const keys = ['subject', 'type'];
    const values = Object.values(queryParams);

    values.map((value, index) => {
      return value ? (params[keys[index]] = value) : '';
    });

    return params;
  };

  const queryParams = new URLSearchParams(paramBuilder(params));

  const response = await fetch(`http://localhost:5000/cards?${queryParams}`, {
    headers: { 'Content-Type': 'json' },
  });

  const data = await response.json();
  console.log(data);

  return data;
};

export const init = async (cardHeight, dispatch, windowHeight) => {
  dispatch({ type: 'LOGIN_SUCCESS' });
  const totalCards = await fetchSize();
  dispatch({ type: 'LOAD_TOTAL_CARDS', payload: totalCards });

  const firstCard = await fetchItems(0, 1);
  const subjects = await fetchSubjects();
  const subjectPalette = await createSubjectPalette();
  const activities = await fetchActivities();
  const activityPalette = await createActivityPalette();

  dispatch({ type: 'LOAD_SUBJECTS', payload: subjects });
  dispatch({ type: 'FETCH_ACTIVITIES', payload: activities });
  dispatch({
    type: 'CREATE_PALETTES',
    payload: { subjectPalette, activityPalette },
  });

  dispatch({ type: 'RENDER_FIRST_CARD', payload: firstCard });
  const pageParameters = setPagesParameters(
    totalCards,
    windowHeight,
    totalCards
  );
  dispatch({ type: 'SET_PAGES_PARAMETERS', payload: pageParameters });

  const cards = await fetchItems(0, pageParameters.cardsPerPage);

  dispatch({ type: 'CLEAR_CARDS' });
  dispatch({ type: 'RENDER_CARDS', payload: cards });
  dispatch({ type: 'LOAD_SUCCESS' });
};

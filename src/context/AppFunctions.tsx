import paletteCreator from '../components/style/PaletteCreator';

export async function changePage(
  filters,
  currentPage,
  index,
  maxPages,
  cardsPerPage
) {
  let newPage = currentPage + index;
  newPage = newPage >= maxPages ? maxPages : newPage < 0 ? 0 : newPage;
  const params = {
    subject: filters.subjects,
    activity: filters.activities,
    deadline: filters.deadline,
    checked: filters.checked,
    _start: newPage * cardsPerPage,
    _limit: cardsPerPage,
  };

  const currentCards = await fetchCards(params);
  return { newPage, currentCards };
}

export async function fetchActivities() {
  const response = await fetch('http://localhost:5000/activities', {
    headers: { 'Content-Type': 'json' },
  });
  return await response.json();
}

export const fetchCards = async (params, getXTotalCount = false) => {
  const queryParams = paramBuilder(params);

  const response = await fetch(`http://localhost:5000/cards?${queryParams}`, {
    headers: { 'Content-Type': 'text/html' },
  });
  const data = await response.json();
  const xTotalCount = Number(response.headers.get('X-total-count'));
  return getXTotalCount ? [data, xTotalCount] : data;
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
  const cardsPerPage = Math.floor((windowHeight * 0.85) / (cardHeight + 16));
  const maxPages = Math.floor(totalCards / cardsPerPage);
  const PageParameters = { cardsPerPage: cardsPerPage, maxPages: maxPages };
  return PageParameters;
}

export const paramBuilder = queryParams => {
  const params = {};
  const keys = ['subject', 'type', 'deadline', 'checked', '_start', '_limit'];
  const values = Object.values(queryParams);

  values.map((value, index) => {
    return value || value === false ? (params[keys[index]] = value) : '';
  });

  return new URLSearchParams(params);
};
export const handlePageChange = async (
  index: number,
  filters,
  page,
  maxPages,
  cardsPerPage,
  dispatch
) => {
  const payload = await changePage(
    filters,
    page,
    index,
    maxPages,
    cardsPerPage
  );
  dispatch({ type: 'CHANGE_PAGE', payload: payload });
};

export async function filterCards(
  filters,
  windowHeight,
  dispatch,
  page,
  cardsPerPage
) {
  const { subjects, activities, deadline, checked } = filters;
  const params = {
    subjects: subjects,
    activites: activities,
    deadline: deadline,
    checked: checked,
    _start: page,
    _limit: cardsPerPage,
  };
  const payload = await fetchCards(params);

  //Workaround to get number of filtered cards
  const params2 = {
    subjects: subjects,
    activites: activities,
    deadline: deadline,
    checked: checked,
  };

  const payload2 = await fetchCards(params2);
  dispatch({
    type: 'LOAD_TOTAL_CARDS',
    payload: payload2.length,
  });
  const filteredPagesParameters = await setPagesParameters(
    100,
    windowHeight,
    payload2.length
  );
  dispatch({
    type: 'SET_PAGES_PARAMETERS',
    payload: filteredPagesParameters,
  });
  dispatch({ type: 'RENDER_CARDS', payload: payload });
}

export const init = async (cardHeight, dispatch, windowHeight) => {
  dispatch({ type: 'LOGIN_SUCCESS' });
  const firstCardParams = {
    subject: '',
    activity: '',
    deadline: '',
    checked: '',
    _start: 0,
    _limit: 1,
  };
  const [firstCard, xTotalCount] = await fetchCards(firstCardParams, true);
  dispatch({ type: 'LOAD_TOTAL_CARDS', payload: xTotalCount });
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
    xTotalCount,
    windowHeight,
    xTotalCount
  );
  dispatch({ type: 'SET_PAGES_PARAMETERS', payload: pageParameters });
  const { cardsPerPage } = pageParameters;
  const firstLoadParams = {
    subject: '',
    activity: '',
    deadline: '',
    checked: '',
    _start: 0,
    _limit: cardsPerPage,
  };

  const cards = await fetchCards(firstLoadParams);

  dispatch({ type: 'CLEAR_CARDS' });
  dispatch({ type: 'RENDER_CARDS', payload: cards });
  dispatch({ type: 'LOAD_SUCCESS' });
};

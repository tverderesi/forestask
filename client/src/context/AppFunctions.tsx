/** @format */

import paletteCreator from "../components/style/PaletteCreator";
import { Card } from "../types/Types";

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

export const getXP = async () => {
  let XP = 0;
  const res = await fetch(
    `${process.env.REACT_APP_FAKE_SERVER}/cards?checked=true`
  );
  const cards: Card[] = await res.json();
  cards.map((card) => (XP += Number(card.xp)));

  return XP;
};

export const fetchGameLevels = async (level = "") => {
  const params = level ? paramBuilder(level) : "";

  const res = await fetch(
    `${process.env.REACT_APP_FAKE_SERVER}/levels/${params}`
  );
  return await res.json();
};

export const updateGameLevels = (userData, gameLevels) => {};

export async function fetchActivities() {
  const response = await fetch(
    `${process.env.REACT_APP_FAKE_SERVER}/activities`,
    {
      headers: { "Content-Type": "json" },
    }
  );
  return await response.json();
}

export const fetchCards = async (params, getXTotalCount = false) => {
  const queryParams = paramBuilder(params);

  const response = await fetch(
    `${process.env.REACT_APP_FAKE_SERVER}/cards?${queryParams}`,
    {
      headers: { "Content-Type": "text/html" },
    }
  );
  const data = await response.json();
  const xTotalCount = Number(response.headers.get("X-total-count"));
  return getXTotalCount ? [data, xTotalCount] : data;
};

export async function createSubjectPalette() {
  const subjects = await fetchSubjects();
  const subjectPalette = paletteCreator(subjects, "#c491ff", "#b56576");
  return subjectPalette;
}

export async function createActivityPalette() {
  const activities = await fetchActivities();
  const activityPalette = paletteCreator(activities, "#ff6f08", "#ff6f08");

  return activityPalette;
}

export const fetchSubjects = async () => {
  const response = await fetch(
    `${process.env.REACT_APP_FAKE_SERVER}/subjects`,
    {
      headers: { "Content-Type": "json" },
    }
  );
  const data = await response.json();
  return data;
};

export function setPagesParameters(cardHeight, windowHeight, totalCards) {
  const cardsPerPage = Math.floor((windowHeight * 0.85) / (cardHeight + 16));
  const maxPages = Math.floor(totalCards / cardsPerPage);
  const PageParameters = { cardsPerPage: cardsPerPage, maxPages: maxPages };
  return PageParameters;
}

export const paramBuilder = (queryParams) => {
  const params = {};
  const keys = [
    "subject",
    "type",
    "deadline",
    "checked",
    "_start",
    "_limit",
    "level",
  ];
  const values = Object.values(queryParams);

  values.map((value, index) => {
    return value || value === false ? (params[keys[index]] = value) : "";
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
  dispatch({ type: "CHANGE_PAGE", payload: payload });
};

export const filterCards = async (
  filters,
  windowHeight,
  dispatch,
  page,
  cardsPerPage
) => {
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
    type: "LOAD_TOTAL_CARDS",
    payload: payload2.length,
  });

  const filteredPagesParameters = await setPagesParameters(
    100,
    windowHeight,
    payload2.length
  );
  dispatch({
    type: "SET_PAGES_PARAMETERS",
    payload: filteredPagesParameters,
  });
  dispatch({ type: "RENDER_CARDS", payload: payload });
};

export const setUserLevel = (userXP, gameLevels) => {
  let userLevel = "0";
  for (let level = 0; userXP > Number(gameLevels[level]); level++) {
    userLevel = level.toString();
  }
  return userLevel;
};

export const fetchUserData = async (id = "") => {
  const res = await fetch(`${process.env.REACT_APP_FAKE_SERVER}/user`);
  const userData = await res.json();

  const userXP = await getXP();
  const gameLevels = await fetchGameLevels();
  const userLevel = setUserLevel(userXP, gameLevels);

  return { ...userData, xp: userXP, level: userLevel };
};

export const init = async (cardHeight, dispatch, windowHeight) => {
  dispatch({ type: "LOGIN_SUCCESS" });
  const firstCardParams = {
    subject: "",
    activity: "",
    deadline: "",
    checked: "",
    _start: 0,
    _limit: 1,
  };
  dispatch({ type: "SET_LOADING", payload: true });
  const [firstCard, xTotalCount] = await fetchCards(firstCardParams, true);
  dispatch({ type: "LOAD_TOTAL_CARDS", payload: xTotalCount });
  const subjects = await fetchSubjects();
  const subjectPalette = await createSubjectPalette();
  const activities = await fetchActivities();
  const activityPalette = await createActivityPalette();
  const gameLevels = await fetchGameLevels();
  const userData = await fetchUserData();

  dispatch({ type: "LOAD_SUBJECTS", payload: subjects });
  dispatch({ type: "FETCH_ACTIVITIES", payload: activities });
  dispatch({
    type: "CREATE_PALETTES",
    payload: { subjectPalette, activityPalette },
  });
  dispatch({ type: "SET_GAME_LEVELS", payload: gameLevels });
  dispatch({ type: "SET_USER_DATA", payload: userData });

  const pageParameters = setPagesParameters(
    cardHeight,
    windowHeight,
    xTotalCount
  );
  dispatch({ type: "SET_PAGES_PARAMETERS", payload: pageParameters });
  const { cardsPerPage } = pageParameters;
  const firstLoadParams = {
    subject: "",
    activity: "",
    deadline: "",
    checked: "",
    _start: 0,
    _limit: cardsPerPage,
  };

  dispatch({ type: "CLEAR_CARDS" });

  const cards = await fetchCards(firstLoadParams);
  dispatch({ type: "RENDER_CARDS", payload: cards });
  dispatch({ type: "INIT_SUCCESS" });
  setTimeout(() => dispatch({ type: "SET_LOADING", payload: false }), 1000);
};

/** Puts the current state of the task in the database.
 *
 * @param id - Card id.
 * @eventProperty
 */
export const addDone: any = async (item, id) => {
  item.checked = !item.checked;

  await fetch(`${process.env.REACT_APP_FAKE_SERVER}/cards/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(item),
  });
};

/** handles what happens when the user clicks on the checkbox item, by calling the 'addDone'
 * function and flipping the 'completed' state.
 *
 * @params id - Card id
 * @params item - the card.
 * @params xp - current user XP.
 * @params completed, setCompleted - useState function to update the checkmark.
 * @params dispatch - dispatch function that comes from {@link AppReducer.}
 * @eventProperty
 */

export const setLastLevel = (gameLevels) => {
  const levelIndexes = Object.keys(gameLevels);
  const lastLevel = levelIndexes[levelIndexes.length - 1];
  return lastLevel;
};

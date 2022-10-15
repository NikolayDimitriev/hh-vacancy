export const loadVacanciesSuccess = (payload) => ({
  type: "LOAD_VACANCIES_SUCCESS",
  payload,
});

export const loadVacanciesFailed = () => ({
  type: "LOAD_VACANCIES_FAILED",
});

export const sortVacancies = (payload) => ({
  type: "SORT_VACANCIES",
  payload,
});

export const showMoreVacancies = () => ({
  type: "SHOW_MORE_VACANCIES",
});

export const isSorting = (payload) => ({
  type: "IS_SORTING_VACANCIES",
  payload
});

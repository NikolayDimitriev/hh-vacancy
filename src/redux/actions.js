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

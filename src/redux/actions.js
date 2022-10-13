export const loadVacanciesAction = () => ({ type: "LOAD_VACANCIES" });

export const loadVacanciesFailureAction = () => ({
  type: "LOAD_VACANCIES_FAILURE",
});

export const addVacancies = (payload) => ({
  type: "ADD_VACANCIES",
  payload,
});

export const loadVacanciesSuccess = (payload) => ({
  type: "LOAD_VACANCIES_SUCCESS",
  payload,
});

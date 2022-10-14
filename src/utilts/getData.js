import { loadVacanciesSuccess, loadVacanciesFailed } from "../redux/actions";

export const getData = () => {
  return async (dispatch) => {
    await fetch("https://api.hh.ru/vacancies/")
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          console.error("Error fetch");
          throw Error;
        }
      })
      .then((data) => dispatch(loadVacanciesSuccess(data)))
      .catch(() => dispatch(loadVacanciesFailed()));
  };
};

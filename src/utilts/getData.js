import axios from "axios";
import { loadVacanciesSuccess } from "../redux/actions";

export const getData = () => {
  return async (dispatch) => {
    const response = await axios.get("https://api.hh.ru/vacancies/");

    dispatch(loadVacanciesSuccess(response.data));
  };
};

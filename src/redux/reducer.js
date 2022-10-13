function reducer(vacancies = null, action) {
  switch (action.type) {
    case "LOAD_VACANCIES":
    case "LOAD_VACANCIES_FAILURE":
      return null;
    case "ADD_VACANCIES":
      return vacancies ? [...vacancies, ...action.payload] : action.payload;
    case "LOAD_VACANCIES_SUCCESS":
      return action.payload;
    default:
      return vacancies;
  }
}

export default reducer;

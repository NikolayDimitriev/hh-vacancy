const defaultState = {
  allVacancies: [],
  topFiveVacancies: [],
  vacancies: [],
};

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case "LOAD_VACANCIES_SUCCESS":
      return {
        ...state,
        allVacancies: action.payload.items,
        topFiveVacancies: action.payload.items.slice(0, 5),
        vacancies: action.payload.items.slice(0, 5),
      };
    case "LOAD_VACANCIES_FAILED":
      return { ...state, allVacancies: [] };
    case "SORT_VACANCIES":
      return {
        ...state,
        vacancies:
          action.payload === "all"
            ? state.topFiveVacancies
            : state.topFiveVacancies.filter(
                (item) => item.schedule.id === action.payload
              ),
      };
    default:
      return state;
  }
}

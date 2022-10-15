const defaultState = {
  allVacancies: [],
  vacanciesForSort: [],
  vacancies: [],
  isSorting: false,
};

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case "LOAD_VACANCIES_SUCCESS":
      return {
        ...state,
        allVacancies: action.payload.items,
        vacanciesForSort: action.payload.items.slice(0, 5),
        vacancies: action.payload.items.slice(0, 5),
      };
    case "LOAD_VACANCIES_FAILED":
      return { ...state, allVacancies: [] };
    case "SORT_VACANCIES":
      return {
        ...state,
        vacancies:
          action.payload === "all"
            ? state.vacanciesForSort
            : state.vacanciesForSort.filter(
                (item) => item.schedule.id === action.payload
              ),
      };
    case "SHOW_MORE_VACANCIES":
      return {
        ...state,
        vacancies: [
          ...state.vacancies,
          ...state.allVacancies.slice(
            state.vacancies.length,
            state.vacancies.length + 5
          ),
        ],
        vacanciesForSort: [
          ...state.vacanciesForSort,
          ...state.allVacancies.slice(
            state.vacancies.length,
            state.vacancies.length + 5
          ),
        ],
      };
    case "IS_SORTING_VACANCIES":
      return {
        ...state,
        isSorting: action.payload,
      };
    default:
      return state;
  }
}

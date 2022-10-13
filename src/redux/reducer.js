const defaultState = {
  vacancies: []
}

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case "LOAD_VACANCIES_SUCCESS":
      return {...state, vacancies: action.payload.items};
    default:
      return state;
  }
};

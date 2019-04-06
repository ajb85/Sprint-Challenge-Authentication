import { GETTING_JOKES, BAD_GET, GOT_JOKES } from "actions/";

const initialState = {
  fetching: false,
  jokes: [],
  fetchError: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GETTING_JOKES:
      return { ...state, fetching: true, fetchError: false };
    case GOT_JOKES:
      return {
        ...state,
        fetching: false,
        fetchError: false,
        jokes: action.payload
      };
    case BAD_GET:
      return { ...state, fetching: false, fetchError: true };
    default:
      return state;
  }
};

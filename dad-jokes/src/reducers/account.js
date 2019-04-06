import { LOGGING_IN, BAD_LOGIN, GOOD_LOGIN } from "actions/";

const initialState = {
  loggingIn: false,
  username: "",
  badLogin: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGGING_IN:
      return { ...state, loggingIn: true, badLogin: false };
    case BAD_LOGIN:
      return { ...state, loggingIn: false, badLogin: true };
    case GOOD_LOGIN:
      return {
        ...state,
        loggingIn: false,
        badLogin: false,
        username: action.payload
      };
    default:
      return state;
  }
};

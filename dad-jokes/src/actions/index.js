import axios from "axios";
import { push } from "connected-react-router";

export const LOGGING_IN = "LOGGING_IN";
export const BAD_LOGIN = "BAD_LOGIN";
export const GOOD_LOGIN = "GOOD_LOGIN";

export const logUserIn = ({ username, password }) => dispatch => {
  console.log("login");
  dispatch({ type: LOGGING_IN });
  axios
    .post("/login", { username, password })
    .then(res => {
      localStorage.setItem("token", res.data.token);
      dispatch({ type: GOOD_LOGIN, payload: res.data.username });
      dispatch(push("/jokes"));
    })
    .catch(err => {
      console.error(err);
      dispatch({ type: BAD_LOGIN });
    });
};

export const createAccount = accountInfo => dispatch => {
  dispatch({ type: LOGGING_IN });

  axios
    .post("/register", accountInfo)
    .then(res => {
      logUserIn(accountInfo)(dispatch);
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: BAD_LOGIN });
    });
};

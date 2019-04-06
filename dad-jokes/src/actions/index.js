import axios from "axios";
import { push } from "connected-react-router";

export const LOGGING_IN = "LOGGING_IN";
export const BAD_LOGIN = "BAD_LOGIN";
export const GOOD_LOGIN = "GOOD_LOGIN";

export const GETTING_JOKES = "GETTING_JOKES";
export const BAD_GET = "BAD_GET";
export const GOT_JOKES = "GOT_JOKES";

export const LOGOUT = "LOGOUT";

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
      if (res.data.length) {
        logUserIn(accountInfo)(dispatch);
      } else {
        dispatch({ type: BAD_LOGIN });
      }
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: BAD_LOGIN });
    });
};

export const fetchJokes = () => async dispatch => {
  dispatch({ type: GETTING_JOKES });
  try {
    const list = await axios.get("/jokes");
    dispatch({ type: GOT_JOKES, payload: list.data });
  } catch (err) {
    console.log(err);
    dispatch({ type: BAD_GET });
  }
};

export const logOut = () => dispatch => {
  localStorage.removeItem("token");
  dispatch({ type: LOGOUT });
  dispatch(push("/login"));
};

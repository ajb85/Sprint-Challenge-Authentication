import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import jokes from "./jokes.js";
import account from "./account.js";

export default history =>
  combineReducers({
    router: connectRouter(history),
    jokes,
    account
  });

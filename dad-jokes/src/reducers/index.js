import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import jokes from "./jokes.js";

export default history =>
  combineReducers({
    router: connectRouter(history),
    jokes
  });

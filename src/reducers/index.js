import { combineReducers } from "redux";
import redditReducer from "./redditReducer";
import todoReducers from "./todoReducer";

const rootReducer = combineReducers({
  todo: todoReducers,
  reddit: redditReducer,
});

export default rootReducer;

import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import redditReducer from "./redditReducer";
import todoReducers from "./todoReducer";

const rootReducer = combineReducers({
  todo: todoReducers,
  reddit: redditReducer,
  counter: counterReducer,
});

export default rootReducer;

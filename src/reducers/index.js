import { combineReducers } from "redux";
import todoReducers from './todoReducer';
import redditReducer from "./redditReducer";

const rootReducer = combineReducers({
  todo: todoReducers,
  reddit: redditReducer,
});

export default rootReducer;

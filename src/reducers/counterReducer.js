import { combineActions, handleActions } from "redux-actions";
import { decrement, increment } from "../actions/counterActions";

const counterReducer = handleActions({
  [combineActions(increment, decrement)](state, {payload: {amount}}) {
    return state + amount;
  },
}, 0);

export default counterReducer;

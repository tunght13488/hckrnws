import { combineActions, handleActions } from 'redux-actions';
import { decrement, increment } from "../actions/counterActions";

const defaultState = {counter: 0};

const reducer = handleActions({
  [combineActions(increment, decrement)](state, {payload: {amount}}) {
    return {...state, counter: state.counter + amount};
  }
}, defaultState);

export default reducer;

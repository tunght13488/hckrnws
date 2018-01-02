import { handleActions } from 'redux-actions';
import { addTodo, setVisibilityFilter, toggleTodo, VisibilityFilters } from "../actions/todoActions";
import { combineReducers } from "redux";

const todoReducer = handleActions({
  [addTodo](state, {payload: {text}}) {
    return [...state, {text: text, completed: false}];
  },
  [toggleTodo](state, {payload: {index}}) {
    return state.map((todo, i) => {
      if (i === index) {
        return Object.assign({}, todo, {
          completed: !todo.completed
        });
      }
      return todo;
    });
  },
}, []);

const visibilityFilterReducer = handleActions({
  [setVisibilityFilter](state, {payload: {filter}}) {
    return filter;
  },
}, VisibilityFilters.SHOW_ALL);

const reducer = combineReducers({
  list: todoReducer,
  visibilityFilter: visibilityFilterReducer,
});

export default reducer;

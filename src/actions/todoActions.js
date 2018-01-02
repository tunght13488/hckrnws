import { createActions } from 'redux-actions';

export const {addTodo, toggleTodo, setVisibilityFilter} = createActions({
  ADD_TODO: text => ({text}),
  TOGGLE_TODO: index => ({index}),
  SET_VISIBILITY_FILTER: filter => ({filter}),
});

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
};

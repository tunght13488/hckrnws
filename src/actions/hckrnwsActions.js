import { createActions } from 'redux-actions';
import { Categories, getItems } from '../network/api';

export const {requestItems, receiveItems} = createActions({
  REQUEST_ITEMS: () => {},
  RECEIVE_ITEMS: [
    (items) => ({items}),
    (items, meta) => meta,
  ],
});

function fetchItems() {
  return (dispatch) => {
    dispatch(requestItems());
    return getItems(Categories.FRONT_PAGE)
      .then(result => dispatch(receiveItems(result.hits, result)));
  };
}

function shouldFetchNewStories(state) {
  return !state.hckrnws.isLoading;
}

export function fetchStoriesIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchNewStories(getState())) {
      return dispatch(fetchItems());
    }
    return Promise.resolve();
  };
}

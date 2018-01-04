import { handleActions } from 'redux-actions';
import { receiveItems, requestItems } from '../actions/hckrnwsActions';

const hckrnwsReducer = handleActions({
  [requestItems](state) {
    return {...state, isLoading: true};
  },
  [receiveItems](state, {payload: {items}, meta}) {
    const newMeta = Object.assign({}, meta);
    delete newMeta.hits;
    return {...state, isLoading: false, items, meta: newMeta};
  },
}, {
  isLoading: false,
  items: [],
  meta: {},
  query: null,
  tags: [],
  tagsOperation: 1,
  numericFilters: {},
  page: 0
});

export default hckrnwsReducer;

import { combineReducers } from "redux";
import { combineActions, handleActions } from "redux-actions";
import { invalidateSubreddit, receivePosts, requestPosts, selectSubreddit } from "../actions/redditActions";

const selectedSubreddit = handleActions({
  [selectSubreddit](state, {payload: {subreddit}}) {
    return subreddit;
  },
}, "reactjs");

const posts = handleActions({
  [invalidateSubreddit](state) {
    return {...state, didInvalidate: true};
  },
  [requestPosts](state) {
    return {
      ...state,
      isFetching: true,
      didInvalidate: false,
    };
  },
  [receivePosts](state, {payload: {posts, receivedAt}}) {
    return {
      ...state,
      isFetching: false,
      didInvalidate: false,
      items: posts,
      lastUpdated: receivedAt,
    };
  },
}, {
  isFetching: false,
  didInvalidate: false,
  items: [],
});

const postsBySubreddit = handleActions({
  [combineActions(invalidateSubreddit, requestPosts, receivePosts)](state, action) {
    return Object.assign({}, state, {
      [action.payload.subreddit]: posts(state[action.payload.subreddit], action),
    });
  },
}, {});

const redditReducer = combineReducers({
  postsBySubreddit,
  selectedSubreddit,
});

export default redditReducer;

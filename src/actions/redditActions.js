import { createActions } from "redux-actions";

export const {selectSubreddit, invalidateSubreddit, requestPosts, receivePosts} = createActions({
  SELECT_SUBREDDIT: subreddit => ({subreddit}),
  INVALIDATE_SUBREDDIT: subreddit => ({subreddit}),
  REQUEST_POSTS: subreddit => ({subreddit}),
  RECEIVE_POSTS: (subreddit, json) => ({
    subreddit,
    posts: json.data.children.map(child => child.data),
    receivedAt: Date.now(),
  }),
});

function fetchPosts(subreddit) {
  return (dispatch) => {
    dispatch(requestPosts(subreddit));
    return fetch(`https://www.reddit.com/r/${subreddit}.json`)
      .then(response => response.json())
      .then(json => dispatch(receivePosts(subreddit, json)));
  };
}

function shouldFetchPosts(state, subreddit) {
  const posts = state.reddit.postsBySubreddit[subreddit];
  if (!posts) {
    return true;
  } else if (posts.isFetching) {
    return false;
  } else {
    return posts.didInvalidate;
  }
}

export function fetchPostsIfNeeded(subreddit) {
  return (dispatch, getState) => {
    if (shouldFetchPosts(getState(), subreddit)) {
      return dispatch(fetchPosts(subreddit));
    }
    return Promise.resolve();
  };
}

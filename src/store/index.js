import { applyMiddleware, compose, createStore } from "redux";
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers';

const loggerMiddleware = createLogger();

const middleware = [
  thunkMiddleware,
  loggerMiddleware
];

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-enable */

export default function configureStore() {
  const store = createStore(
    rootReducer,
    composeEnhancers(
      applyMiddleware(...middleware)
    )
  );
  store.subscribe(() => {
    console.log(store.getState());
  });
  return store;
};

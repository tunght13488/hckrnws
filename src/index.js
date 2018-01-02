import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { browserHistory, Route, Router } from "react-router";
import { routerReducer, syncHistoryWithStore } from "react-router-redux";
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import App from "./App";
import "./index.css";
import rootReducer from "./reducers";
import registerServiceWorker from "./registerServiceWorker";

const middleware = [
  thunkMiddleware,
  createLogger(),
];

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-enable */


const reducer = combineReducers({
  ...rootReducer,
  routing: routerReducer,
});

debugger;

const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(...middleware),
  ),
);

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route exact path="/" component={App}/>
    </Router>
  </Provider>,
  document.getElementById("root"),
);
registerServiceWorker();

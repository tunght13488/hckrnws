import counterReducer from './counterReducer';
import hckrnwsReducer from './hckrnwsReducer';
import redditReducer from './redditReducer';
import todoReducers from './todoReducer';

const rootReducer = {
  todo: todoReducers,
  reddit: redditReducer,
  counter: counterReducer,
  hckrnws: hckrnwsReducer,
};

export default rootReducer;

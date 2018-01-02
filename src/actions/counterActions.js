import { createActions } from 'redux-actions';

export const {increment, decrement} = createActions({
  INCREMENT: amount => ({amount}),
  DECREMENT: amount => ({amount: -amount})
});

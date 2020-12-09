import { combineReducers } from 'redux';
import product from './product';
import cart from './cart';
import error from './error';

// Combine redux reducers into single root reducer.
export default combineReducers({
  product,
  cart,
  error
});
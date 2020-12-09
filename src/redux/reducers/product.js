import { SUCCESS_FETCH_PROD } from '../actions/product'; // input action types.

// Product Reducer.
const product = (state = null, action) => {
  switch(action.type) {
    case SUCCESS_FETCH_PROD:
      return {
        ...state,
        ...action.product
      }
    default:
      return state;
  }
};

export default product;
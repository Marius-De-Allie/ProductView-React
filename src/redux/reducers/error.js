import { FAIL_FETCH_PROD } from '../actions/product';
// Error reducer.
const error = (state = null, action) => {
  switch(action.type) {
    case FAIL_FETCH_PROD:
      return 'Unable to fetch product please try again.'
    default:
      return state;
  }
};

export default error;
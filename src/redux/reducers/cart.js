import { ADD_TO_CART } from '../actions/cart';

//  cart reducer.
const cart = (state = [], action) => {
  switch(action.type) {
    case ADD_TO_CART:
      return [
        ...state,
        cart
      ];
    default:
      return state;
  }
};

export default cart;
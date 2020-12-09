import { ADD_TO_CART } from '../actions/cart';

//  cart reducer.
const cart = (state = [], action) => {
  switch(action.type) {
    case ADD_TO_CART:
      let newCart;
      // 1. If cart already contains items.
      if(state.length > 0) {
        // 2. look for matching item.
        // let itemFound = state.find(item => item.name === action.cart.name);
        // if mathicng item already in cart.
        // if(itemFound) {
        //   newCart = state.filter(item => item.name !== action.cart.name);
          

        // }
        newCart = state.map(item => {
          return {
            ...item,
            quantity: item.quantity + action.cart.quantity,
            total: item.total + action.cart.total
          }
        });
      } 
      else {
        newCart = [action.cart]
      }
      return newCart;
    default:
      return state;
  }
};

export default cart;
// Action types.
const ADD_TO_CART = 'ADD_TO_CART';

// add to cart action creator.
const addToCart = (cartObj) => ({
  type: ADD_TO_CART,
  cart: cartObj
});

export {
  addToCart as default,
  ADD_TO_CART
}
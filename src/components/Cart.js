import React from 'react';
import { useSelector } from 'react-redux';

// TODO: find a more suitable key for cart array elements.
// TODO: Get overall total from cart.

const Cart = () => {
  // retrieve cart piece of state  from redux store.
  const cart = useSelector(({ cart }) => cart);
  // convert cart from object to an array for rendering.
  let cartArr = Object.keys(cart);
  console.log(cart)
  // For every cart item id in the cartArr return the actual carT Item object.
  cartArr.forEach(itemId => {
    return cart[itemId];
  });

  // console.log(cartArr);

  return (
    <div className="cart">
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartArr.map((item, idx) => (
            <li key={idx}>
              <p>{item.name}</p>
              <p>{item.imageUrl}</p>
              <p>{item.size}</p>
              <p>{item.price}</p>
              <p>quantity: {item.quantity}</p>
              <p>Total:{item.total}</p>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default Cart;
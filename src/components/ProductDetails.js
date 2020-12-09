import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaCartPlus } from 'react-icons/fa';
import ProductImage from './ProductImage';
import handlefetchProduct from '../redux/actions/product';
import addToCart from '../redux/actions/cart';

// TODO review quantity input element validation.
// TODO add some validation for product size before adding to cart.
// TODO update error message.

const ProductDetails = (props) => {
  const dispatch = useDispatch();
  // retrieve product piece of state from redux store.
  const product = useSelector((state) => state.product);
  // Retrieve error piece of state from redux store.
  const error = useSelector((state) => state.error);
  // local state to manage product quantity selected by user.
  const [quantity, setQuantity] = useState(1);
  // local state to manage product size selected by user.
  const [prodSize, setprodSize] = useState(null);

  // Fetch product details when component is mounted.
  useEffect(() => {
    // dispatch handlefetchProduct thunk action.
    dispatch(handlefetchProduct());
  }, [dispatch]);

  
  // Handle quantity change.
  const onQuantityChange = (evt) => {
    const value = evt.target.value;
    // Set quantity peice of state to input element's current value.
    setQuantity(value);
    console.log(evt.target.value);
  };

  // Handle size change.
  const onSizeChange = (selectedSize) => {
    console.log(selectedSize);
    setprodSize(selectedSize);
  };

  // Handle addToCart btn click.
  const onCartClick = () => {
    // destructure required properties of product oject.
    const { name, imgUrl, size, price } = product;
    // Create cart obj.
    const cartObj = {
      name, 
      imgUrl, 
      size, 
      price,
      quantity,
      total: price * quantity,
    }
    // dispatch ADD_TO_CART action, passing in cart object..
    dispatch(addToCart(cartObj));
  };
 
  // destructure product object's properties.
  if(product !== null) {
    var { name, imgUrl, size, price, manufacturer } = product;
  };
  console.log(props)
  // If error peice of redux store state is not null render error message.
  if(error !== null) return <p>{error}</p>

  return (
    <React.Fragment>
      {product === null ? <p>loading...</p> :
          <div className="prod-details">
            <section classnalme="primary-details">
              <h2>{name}</h2>
              <ProductImage imgUrl={imgUrl} name={name} manufacturer={manufacturer} />
              
              <div className="quantity-container" style={{display: 'flex', flexDirection: 'column'}}>
                <div className="size-btns">
                  {size.map((size) => 
                    <button 
                      key={size}
                      onClick={() => onSizeChange(size)}
                      className={size === prodSize ? 'selected' : ''}
                    >
                      {size}
                    </button>)
                  }
                </div>
                <div>
                  <label htmlFor="quantity">
                    Quantity
                  </label>
                  <input 
                    id="quantity"
                    type="number"
                    min="1"
                    max="100"
                    value={quantity}
                    onChange={onQuantityChange}
                  />
                  {((quantity < 1) || (quantity > 100)) && <p style={{color: 'red'}}>Please enter a valid quantity between 1 and 100</p>}
                </div>
              </div>
              <div className="price-container" style={{display: 'flex', flexDirection: 'column'}}>
                <p>price per unit: ${price.toFixed(2)}</p>
                <p>Total price: ${(price * quantity).toFixed(2)}</p>
              </div>
              <button 
                className="cart-btn"
                disabled={quantity < 1 || quantity > 100}
                onClick={onCartClick}
              >
                {`Add to Cart `}
                <FaCartPlus />
              </button>
            </section>
            <section classnalme="sec-details">
              description
              reviews
            </section>
            Product Details Page
          </div>
      }
    </React.Fragment>
  )
};

export default ProductDetails;
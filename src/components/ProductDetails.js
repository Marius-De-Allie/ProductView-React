import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductImage from './ProductImage';
import handlefetchProduct from '../redux/actions/product';

// TODO review quantity input element validation.

const ProductDetails = (props) => {
  const dispatch = useDispatch();
  // retrieve product piece of state from redux store.
  const product = useSelector(({ product }) => product);
  // local state to manage product quantity selected by user.
  const [quantity, setQuantity] = useState(1);

  // Handle quantity change.
  const onQuantityChange = (evt) => {
    const value = evt.target.value;
    // Set quantity peice of state to input element's current value.
    setQuantity(value);
    console.log(evt.target.value);
  };

  // Fetch product details when component is mounted.
  useEffect(() => {
    // dispatch handlefetchProduct thunk action.
    dispatch(handlefetchProduct());
  }, [dispatch]);
 
  // destructure product object's properties.
  if(product !== null) {
    var { name, imgUrl, size, price, manufacturer } = product;
  };
  console.log(props)
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
                    <button key={size}>{size}</button>)
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
                <p>Total price: ${price.toFixed(2)}</p>
              </div>
              <p>Image list placeHolder</p>
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
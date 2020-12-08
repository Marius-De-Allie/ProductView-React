import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import handlefetchProduct from '../redux/actions/product';

const ProductDetails = () => {
  const dispatch = useDispatch();
  // Retrieve  product peice of redux store state.
  const product = useSelector((state) => state.product);

  // Fetch product details when component is mounted.
  useEffect(() => {
    // dispatch handlefetchProduct thunk action.
    dispatch(handlefetchProduct());
  }, [dispatch]);

  // destructure product object's properties.
  // const { name, imgUrl, size, price, manufacturer } = product;

  return (
    <React.Fragment>
      {!product ? <p>loading...</p> :
          <div className="prod-details">
            <section classnalme="primary-details">
              <div className="image">
                <img src="" alt="" />
              </div>
              <p>price per unit</p>
              <p>Total price</p>
              <p>size</p>
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
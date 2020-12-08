import React, { useEffect } from 'react';
import handleFetchProduct from '../redux/actions/product';

const ProductDetails = () => {

  // Fetch product details when component is mounted.
  useEffect(() => {
    console.log('fetch product!');
  }, []);
  
  return (
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
  );
};

export default ProductDetails;
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductImage from './ProductImage';
import handlefetchProduct from '../redux/actions/product';
import addToCart from '../redux/actions/cart';

// TODO review quantity input element validation.
// TODO add some validation for product size before adding to cart.
// TODO update error message.

const ProductDetails = () => {
  const dispatch = useDispatch();
  // retrieve product piece of state from redux store.
  const product = useSelector((state) => state.product);
  // Retrieve error piece of state from redux store.
  const error = useSelector((state) => state.error);

  // local state to manage product quantity selected by user.
  const [quantity, setQuantity] = useState(1);
  // local state to manage product size selected by user.
  const [prodSize, setprodSize] = useState(null);

  const [showDescription, setShowdescription] = useState(true);

  // Fetch product details when component is mounted.
  useEffect(() => {
    // dispatch handlefetchProduct thunk action.
    dispatch(handlefetchProduct());
  }, [dispatch]);

  
  // Handle quantity change.
  const onQuantityChange = (evt) => {
    const value = evt.target.value;
    // Set quantity piece of state to input element's current value (converted to an int).
    setQuantity(parseInt(value));
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
    const { name, imgUrl, price } = product;

    // Check whether product size has been selected before creating cart object.
    if(prodSize !== null) {
      // Create cart obj.
      const cartObj = {
        name, 
        imgUrl, 
        size: prodSize, 
        price,
        quantity,
        total: parseInt(price * quantity),
      }
      // dispatch ADD_TO_CART action, passing in cart object..
      dispatch(addToCart(cartObj));
    } 
  };
 
  // destructure product object's properties.
  if(product !== null) {
    var { name, imgUrl, size, price, manufacturer } = product;
  };
  // If error peice of redux store state is not null render error message.
  if(error !== null) return <p>{error}</p>

  const arrOfImgs = [];
  for(let i = 0; i <= 6; i++ ) {
    arrOfImgs.push(imgUrl);
  }

  return (
    <div className="ui segment" style={{maxWidth: '700px', margin: '0 auto', display: 'flex'}}>
      {product === null ? <p>loading...</p> :
          <div className="prod-details">
            <section className="upper-details">
              <h2>{`Product: ${name}`}</h2>
                {/*<img src={imgUrl} alt={`${name} by ${manufacturer}`}/>*/}
              <ProductImage imgUrl={imgUrl} name={name} manufacturer={manufacturer} />
              <div className="price-container" style={{display: 'flex', justifyContent: 'space-between'}}>
              
                <div >
                  {!prodSize && <p className="size-hint">select size before adding to cart</p>}
                  <span>Size: </span>
                  {size.map(size => 
                    <button 
                      key={size}
                      className={`small ui inverted orange button ${prodSize === size ? 'selected-size' : ''}`}
                      onClick={() => onSizeChange(size)}
                    >
                        {size}
                      </button>
                    )}
                  <div className="ui input" style={{display: 'block', textAlign: 'left', margin: '1rem 0', alignSelf: 'center', width: '100%'}}>
                    <label htmlFor="quantity" style={{paddingRight: '1rem'}}>
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
                  </div>
                
                </div>
                <div style={{border: "0px solid blue", textAlign: 'right'}}>
                  <p>Price: ${price.toFixed(2)}</p>
                </div>
              </div>
              <p className="total">Total price: ${!quantity ? '0': parseInt((price * quantity).toFixed(2))}</p>
              <button 
                className={`ui inverted orange icon button`}
                id="add-cart"
                disabled={quantity < 1 || quantity > 100 || prodSize === null || !quantity}
                onClick={onCartClick}
              >
                {` Add to Cart `}<i class="shopping cart icon"></i>
              </button>
              
            </section>
            <section className="lower-details">
              <hr></hr>
              <div className="lower-btn-container">
                <button 
                  className="lower-btns"
                  disabled={showDescription}
                  onClick={() => setShowdescription(true)}
                  style={{color: showDescription ? '#4169E1' : ''}}
                >
                  Product Description
                </button>
                <button 
                  className="lower-btns"
                  disabled={!showDescription}
                  onClick={() => setShowdescription(false)}
                  style={{color: !showDescription ? '#4169E1' : ''}}
                >
                  Product Reviews
                </button>
              </div>
              <div className="ui segment">
              <h3>{!showDescription ? 'Reviews' : 'Description'}</h3>
                {showDescription ? 
                  <p className="prod-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris feugiat nec nisl vel vehicula. Vestibulum pretium magna quam, vitae luctus quam laoreet non. In vestibulum ante mi, eu posuere nulla feugiat a. 
                    Cras mauris eros, condimentum a felis id, lobortis convallis nunc. 
                    Ut vitae enim id diam interdum fermentum id a nunc. Suspendisse malesuada, enim et eleifend pharetra, mauris justo porttitor odio, in dignissim risus odio ac velit. 
                    Integer mollis ornare quam, non pulvinar eros vulputate ac. Phasellus lacinia quam leo, ut commodo sapien euismod vitae. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
                    Aliquam consequat commodo lacus id facilisis. Curabitur erat ligula, maximus id viverra eget, venenatis non ligula. Duis condimentum et nisi dignissim congue. Maecenas consequat eleifend vestibulum. Cras non velit dui.
                  </p> 
                  :
                  (
                    <React.Fragment>
                        <h4 className="review-header">By John Doe:</h4>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dapibus consequat maximus. Sed facilisis viverra est in consectetur. Suspendisse varius vitae massa et sagittis. 
                          Quisque mollis, mi vel convallis varius, ipsum tellus rhoncus nunc, ut blandit metus tortor at ligula. Fusce vitae ante porttitor, vulputate nulla ut, elementum neque. Nullam rutrum mi vitae massa pharetra, 
                          nec dictum massa efficitur. Donec quis purus ut mi volutpat vulputate eget mollis massa. Nam quis erat ipsum. Quisque elit mi, consequat sed lobortis vitae, aliquam ac quam. Suspendisse aliquet magna in dui placerat, 
                          eu euismod lacus varius. Cras vel lorem accumsan magna facilisis mollis. Nunc in porttitor purus, eget ullamcorper erat. Suspendisse id auctor libero. Ut tempor felis ac ligula posuere pharetra. Suspendisse ac arcu tempus, 
                          ultrices massa tincidunt, vestibulum elit.
                          Curabitur euismod ligula ac ligula consequat vehicula. Ut lobortis orci vitae vehicula cursus. Suspendisse nec orci et sem viverra volutpat. Nulla lorem massa, 
                          convallis et porta sit amet, fringilla at est. Nulla tincidunt augue odio, eu mollis ex scelerisque quis. Quisque faucibus felis eu mauris dignissim commodo id quis sem. Curabitur volutpat tortor elit, 
                          ut feugiat mauris hendrerit eu. Duis venenatis, metus nec fringilla fringilla, enim erat scelerisque elit, id tincidunt nibh lacus eget quam. Morbi fringilla mi sed aliquet luctus. Suspendisse potenti. 
                          Sed scelerisque sem quis dolor porttitor, non placerat velit tempus. Duis euismod a urna sit amet vulputate. Aenean augue sem, porttitor a turpis nec, vehicula placerat lectus. Quisque at erat at felis molestie vehicula ut ut sem.
                        </p>
                        <hr></hr>
                        <h4 className="review-header">By Jane Doe:</h4>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dapibus consequat maximus. Sed facilisis viverra est in consectetur. Suspendisse varius vitae massa et sagittis. 
                          Quisque mollis, mi vel convallis varius, ipsum tellus rhoncus nunc, ut blandit metus tortor at ligula. Fusce vitae ante porttitor, vulputate nulla ut, elementum neque. Nullam rutrum mi vitae massa pharetra, 
                          nec dictum massa efficitur. Donec quis purus ut mi volutpat vulputate eget mollis massa. Nam quis erat ipsum. Quisque elit mi, consequat sed lobortis vitae, aliquam ac quam. Suspendisse aliquet magna in dui placerat, 
                          eu euismod lacus varius. Cras vel lorem accumsan magna facilisis mollis. Nunc in porttitor purus, eget ullamcorper erat. Suspendisse id auctor libero. Ut tempor felis ac ligula posuere pharetra. Suspendisse ac arcu tempus, 
                          ultrices massa tincidunt, vestibulum elit.
                          Curabitur euismod ligula ac ligula consequat vehicula. Ut lobortis orci vitae vehicula cursus. Suspendisse nec orci et sem viverra volutpat. Nulla lorem massa, 
                          convallis et porta sit amet, fringilla at est. Nulla tincidunt augue odio, eu mollis ex scelerisque quis. Quisque faucibus felis eu mauris dignissim commodo id quis sem. Curabitur volutpat tortor elit, 
                          ut feugiat mauris hendrerit eu. Duis venenatis, metus nec fringilla fringilla, enim erat scelerisque elit, id tincidunt nibh lacus eget quam. Morbi fringilla mi sed aliquet luctus. Suspendisse potenti. 
                          Sed scelerisque sem quis dolor porttitor, non placerat velit tempus. Duis euismod a urna sit amet vulputate. Aenean augue sem, porttitor a turpis nec, vehicula placerat lectus. Quisque at erat at felis molestie vehicula ut ut sem.
                        </p>
                      
                    </React.Fragment>
                  )
                
                }
              </div>
            </section>
          </div>
      }
    </div>
  )
};

export default ProductDetails;

// <section className="primary-details">
// <h2>{name}</h2>
// <ProductImage imgUrl={imgUrl} name={name} manufacturer={manufacturer} />
// <div className="price-quan-container">
//   <div className="quantity-container">
//     <div className="size-btns">
//       {size.map((size) => 
//         <button 
//           key={size}
//           onClick={() => onSizeChange(size)}
//           className={`ui inverted orange button ${size === prodSize ? 'selected' : ''}`}
          
//         >
//           {size}
//         </button>)
//       }
//     </div>
//     <div className="ui input">
//       <label htmlFor="quantity">
//         Quantity
//       </label>
//       <input 
//         id="quantity"
//         type="number"
//         min="1"
//         max="100"
//         value={quantity}
//         onChange={onQuantityChange}
//       />
//       </div>
//       {((quantity < 1) || (quantity > 100)) && <span style={{color: 'red'}}>Please enter a valid quantity between 1 and 100</span>}
//   </div>
//   <div className="price-container" style={{display: 'flex', flexDirection: 'column'}}>
//     <p>price per unit: ${price.toFixed(2)}</p>
//     <p>Total price: ${(price * quantity).toFixed(2)}</p>
//   </div>
// </div>
// <button 
//   className="cart-btn"
//   disabled={quantity < 1 || quantity > 100}
//   onClick={onCartClick}
// >
//   {`Add to Cart `}
//   <FaCartPlus />
// </button>
// </section>
// <section classnalme="sec-details">
// description
// reviews
// </section>
// Import async API function to fetch products.
import fetchProduct from '../../services/api';

// Declare action types.
const SUCCESS_FETCH_PROD = 'SUCCESS_FETCH_PROD';
const FAIL_FETCH_PROD = 'FAIL_FETCH_PROD';

// Successfully fetched product details action creator.
const successFetchProd = (productObj) => ({
  type: SUCCESS_FETCH_PRODS,
  product: productObj
});

// Failue on product details fetch action creator.
const failureFetchProd = (error) => ({
  type: FAIL_FETCH_PRODS,
  error
});

// Thunk action creator.
const handlefetchProd = () => {
  return (dispatch) => {
    // 1 .Make API call to fetch products details.
    fetchProduct()
    // If successful.
    .then((product) => {
      // 2. Dispatch successFetchProds action passing in the returned product.
      dispatch(successFetchProd(product));
    })
    // if unsuccessful.
    .catch(e => {
      // 2. Dispatch failureFetchProds action passing in the error message.
      dispatch(failureFetchProd(e.message));
    });
  }
};


export { 
  SUCCESS_FETCH_PROD,
  FAIL_FETCH_PROD,
  handlefetchProd as default
};
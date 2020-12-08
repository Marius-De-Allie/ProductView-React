// Declare action types.
const SUCCESS_FETCH_PRODS = 'SUCCESS_FETCH_PRODS';
const FAIL_FETCH_PRODS = 'FAIL_FETCH_PRODS';

// Successfully fetched product details action creator.
const successFetchProds = (productObj) => ({
  type: SUCCESS_FETCH_PRODS,
  product: productObj
});

// Failue on product details fetch action creator.
const failureFetchProds = (error) => ({
  type: FAIL_FETCH_PRODS,
  error
});

export { 
  SUCCESS_FETCH_PRODS 
};
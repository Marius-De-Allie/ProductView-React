import PROD_DATA from './_data';

// Simulate an Asynchronous call with a 2sec. delay usinmg setTimeOut.
const fetchProduct = () => {
  window.setTimeout(() => {
    console.log(PROD_DATA);
    return PROD_DATA;
  }, 2000);
};

export default fetchProduct;
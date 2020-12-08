import PROD_DATA from './_data';

// Simulate an Asynchronous call with a 2sec. delay usinmg setTimeOut.
const fetchProduct = () => {
  return new Promise((res, rej) => {
    window.setTimeout(() => res({...PROD_DATA}), 1000)
  })
};

export default fetchProduct;
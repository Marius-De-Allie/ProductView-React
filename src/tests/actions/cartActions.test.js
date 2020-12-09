import addToCart, { ADD_TO_CART  } from '../../redux/actions/cart';
import PROD_DATA from '../../services/_data';


describe('Cart actions', () => {

    it('addToCart action creator returns correct action object', () => {

         // Mock cart object .
         const cartObj = {
          name: 'TEST NAME' ,
          imgUrl: 'TESTURL',
          size: 'TESTSIZE',
          price: 5,
          quantity: 2,
          total: 10
        };

        // Expected return object from successFetchProd.
        const expectedActionObj = {
            type: ADD_TO_CART,
            cart: cartObj
        };
        
        // Call addToCart action creator passing in cart object as arg.
        const returnedActionObject = addToCart(cartObj);
    
     
        expect(returnedActionObject).toEqual(expectedActionObj);
    });

});   

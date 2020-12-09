import { ADD_TO_CART } from '../../redux/actions/cart';
import cart from '../../redux/reducers/cart';

describe('cart reducer', () => {
    // Test 1 - Reducer's initial execution.
    it('should initially return default cart piece of redux store state, when no matching action dispatched', () => {
    
        // Expected default cart state value: 
            const expectedState = []
        
    
        // Execute cart reducer with no action object passed in (Initial execution of reducer).
        const cartState = cart(undefined, {type: '@@INIT'});
    
        expect(cartState).toEqual(expectedState);
    });
    
    // Test 2 - cart reducer dispatched ADD_TO_CART action object.
    it('should return updated cart piece of redux state passed into addToCart action creator, when cart is empty', 
      () => {
    
        // Mock cart object data.
        const cartObj = {
          name: 'TEST NAME' ,
          imgUrl: 'TESTURL',
          size: 'TESTSIZE',
          price: 5,
          quantity: 2,
          total: 10
        };

        // expected cart state value.
        const expectedState = [cartObj];
        
        // Execute product reducer passing in successFetchProd's action object.
        const cartState = cart(undefined, {
          type: ADD_TO_CART,
          cart: cartObj
            
        })
        // Expected return value from reducer should be product property value of successFetchProd action object.
        expect(cartState).toEqual(expectedState);
    });
})    



import PROD_DATA from '../../services/_data';
import { SUCCESS_FETCH_PROD } from '../../redux/actions/product';
import product from '../../redux/reducers/product';

describe('product reducer', () => {
    // Test 1 - Reducer's initial execution.
    it('should initially return default product piece of redux store state(null), when no matching action dispatched', () => {
    
        /* Expected default product state value: 
            null
        */
    
        // Execute product reducer with no action object passed in (Initial execution of reducer).
        const productState = product(undefined, {type: '@@INIT'});
    
        expect(productState).toEqual(null);
    });
    
    // Test 2 - product reducer dispatched SUCCESS_FETCH_PROD action object.
    it('should return as product piece of redux state the product object returned by the successFetchProd action creator', 
      () => {
    
        // Mock product object data.
        const prodObj = {...PROD_DATA};
        
        // Execute product reducer passing in successFetchProd's action object.
        const productState = product(undefined, {
          type: SUCCESS_FETCH_PROD,
          product: prodObj
            
        })
        // Expected return value from reducer should be product property value of successFetchProd action object.
        expect(productState).toEqual(prodObj)
    });
})    



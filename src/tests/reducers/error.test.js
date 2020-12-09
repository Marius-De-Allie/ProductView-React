import { FAIL_FETCH_PROD } from '../../redux/actions/product';
import error from '../../redux/reducers/error';

describe('error reducer', () => {
    // Test 1 - Reducer's initial execution.
    it('should initially return default error piece of redux store state(null), when no matching action dispatched', () => {
    
        /* Expected default product state value: 
            null
        */
    
        // Execute error reducer with no action object passed in (Initial execution of reducer).
        const errorState = error(undefined, {type: '@@INIT'});
    
        expect(errorState).toEqual(null);
    });
    
    // Test 2 - product reducer dispatched SUCCESS_FETCH_PROD action object.
    it('should return as error piece of redux state the error returned by the failFetchProd action creator', 
      () => {
        // Mock error value.
        const errorMsg = 'Unable to fetch product please try again.';
        
        // Execute error reducer passing in failFetchProd's action object.
        const errorState = error(undefined, {
          type: FAIL_FETCH_PROD,
          error: errorMsg
            
        })
        // Expected return value from reducer should be error property value of failFetchProd action object.
        expect(errorState).toEqual(errorMsg);
    });
})    



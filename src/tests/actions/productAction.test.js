import handlefetchProd, { successFetchProd, failureFetchProd, SUCCESS_FETCH_PROD, FAIL_FETCH_PROD  } from '../../redux/actions/product';
import PROD_DATA from '../../services/_data';

// TODO: write test for handlefetchProd, thunk action creator.

describe('product actions', () => {

    it('successFetchProd action creator returns correct action object', () => {

        // Expected return object from successFetchProd.
        const expectedActionObj = {
            type: SUCCESS_FETCH_PROD,
            product: {...PROD_DATA}
        }
        
        // Call successFetchProd action creator passing in product object as arg.
        const returnedActionObject = successFetchProd({...PROD_DATA});
    
        // Action creator returned object should be of format {type: SUCCESS_FETCH_PROD, product: 
        // {name: 'White Brick', size: ['Modular', 'Queen', 'Max'],
        //   manufacturer: 'Meridian', etc ...}
        expect(returnedActionObject).toEqual(expectedActionObj);
    });

    it('failFetchProd action creator returns correct action object', () => {
        // Mock error message.
        const errorMsg = 'TEST ERROR MESSAGE';
        // Expected return object from successFetchProd.
        const expectedActionObj = {
            type: FAIL_FETCH_PROD,
            error: errorMsg
        }

        // Call failFetchProd action creator passing in error message as arg.
        const returnedActionObject = failureFetchProd(errorMsg);
        
        expect(returnedActionObject).toEqual(expectedActionObj);
    });
});   

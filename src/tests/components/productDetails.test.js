import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import ProductDetails from '../../components/ProductDetails';
import PROD_DATA from '../../services/_data';
import {addToCart, ADD_TO_CART} from '../../redux/actions/cart';


// Create redux mock store to test connected component.
const middlewares = [thunk]
const mockStore = configureStore(middlewares);

describe('ProductDetails connected component', () => {

  let store;
  beforeEach(() => {
    store = mockStore({
        product: {...PROD_DATA},
        cart: [],
        error: null
    });
    
    store.dispatch = jest.fn();

    
  });
  
  it('should render all given state from redux store properly', () => {
    
    // Render ProductDetails connected component.
    const component = render(
      <Provider store={store}>
        <ProductDetails />
      </Provider>
    );

        // expect(component.toJSON()).toMatchSnapshot();
    
        const prodDetailEl = component.container.querySelector('.prod-details');
        expect(prodDetailEl).toHaveTextContent(PROD_DATA.name);
        expect(prodDetailEl).toHaveTextContent(PROD_DATA.price);
    });

    it('should dispatch an action on add to cart button click', () => {

       // Render ProductDetails connected component.
    const component = render(
      <Provider store={store}>
        <ProductDetails />
      </Provider>
    );

      const addToCartBtn = component.container.querySelector('#add-cart');
      render.call(() => {
        addToCartBtn.props.onClick()
      })
        

      // expect(component.toJSON()).toMatchSnapshot();
  
      expect(store.dispatch).toHaveBeenCalledTimes(1);
  });
})
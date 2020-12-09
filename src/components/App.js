import React from 'react';
import { useSelector } from 'react-redux';
import ProductDetails from './ProductDetails';
import Cart from './Cart';
import Header from './Header';
import '../App.css';

// TODO - handle rotuing for cart, etc.

function App() {
  const cart = useSelector((state) => state.cart);
  return (
    <div className="App">
      <Header />
      <ProductDetails />
    </div>
  );
};

export default App;

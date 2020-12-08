import React, { useEffect } from 'react';
import ProductDetails from './ProductDetails';
import '../App.css';

function App() {
  // Fetch product details when App component is mounted.
  useEffect(() => {
    console.log('fetch product!');
  }, []);

  return (
    <div className="App">
      App
      <ProductDetails />
    </div>
  );
}

export default App;

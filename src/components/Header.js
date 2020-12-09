import React from'react';
import { useSelector } from 'react-redux';

 const Header = () => {
    // Retrieve cart piece of state from redux store.
  const cart = useSelector((state) => state.cart);
  let cartQuantity;

  if(cart.length > 0) {
    cartQuantity = cart[0].quantity;
  }

  console.log('CART QUAN', cart)

   return (
     <header style={{display: 'flex', justifyContent: "space-between", alignItems: 'center', maxWidth: '800px', margin: '0 auto', marginBottom: '2rem', color: 'royalblue', padding: '0 1rem'}}>
      <div>
        <h1 style={{margin: '0'}}>Masonary<i class="cubes icon"></i></h1>
        <h1 style={{margin: '0'}}>OrderDesk</h1>
      </div>
      <p>
        {`Cart `} 
        <i class="shopping cart icon"></i>
        <sub style={{fontSize: '10px'}}>{cartQuantity}</sub>
      </p>
     
    </header>
   );
 };

 export default Header;




// SideCart.js
import React from 'react';
import './SideCart.css';

const SideCart = ({ cartItems, removeFromCart, isVisible }) => {
  return (
    <div className={`side-cart ${isVisible ? 'visible' : ''}`}>
      
      {cartItems.length === 0 && <p>No items in cart</p>}
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            <img src={item.thumbnail} alt={item.title} />
            <span>{item.title}</span>
            <button onClick={() => removeFromCart(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideCart;

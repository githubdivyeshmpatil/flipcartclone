// CartNavbar.js
import React from "react";
import './CartNavbar.css'
import { FaShoppingCart } from "react-icons/fa";

const CartNavbar = ({ toggleCart }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light ">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      Navbar
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="#">
            Home
          </a>
        </li>
        <li className="nav-item">
        <form className="d-flex">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        
      </form>
        </li>
        <li className="nav-item">
        <button className="cart-button" onClick={toggleCart}>
                <FaShoppingCart />
                Cart
              </button>
        </li>
       
      
         
        
        
      </ul>
    </div>
  </div>
</nav>

  );
};

export default CartNavbar;

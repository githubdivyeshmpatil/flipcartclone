import React, { useState } from 'react';
import './Features_namvbar.css';
import { FaArrowLeft } from "react-icons/fa6";
import { Link, useNavigate } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";

function Features_namvbar({ toggleCart, cartCount }) {
  const navigate = useNavigate();
  const [showLoginForm, setShowLoginForm] = useState(false);

  const handleBack = () => {
    navigate(-1); // This will navigate to the previous page
  };

  const handleLoginClick = () => {
    setShowLoginForm(!showLoginForm);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-primary">
        <div className="container-fluid">
          <button className="navbar-branddd" onClick={handleBack}><FaArrowLeft /></button>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={handleLoginClick}>Login</a>
              </li>
            </ul>
            <button style={{background:'none', border:'none'}} id="cart-button position-relative" onClick={toggleCart}>
              <FaShoppingCart color="yellow" size={25} />
              {cartCount > 0 && (
                <span className="badge badge-danger position-absolute">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>

      {showLoginForm && (
        <div className="login-popup">
          <div className="login-popup-content">
            <span className="close" onClick={handleLoginClick}>&times;</span>
            <form>
              <label htmlFor="username">Username:</label>
              <input type="text" id="username" name="username" />
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" name="password" />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Features_namvbar;

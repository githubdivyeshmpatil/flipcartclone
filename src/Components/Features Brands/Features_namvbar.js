import React, { useState } from 'react'
import './Features_namvbar.css'
import { CiSearch } from "react-icons/ci";

function Features_namvbar() {
    const [showLogin, setShowLogin] = useState(false);

  const toggleLoginPopup = () => {
    setShowLogin(!showLogin);
  };
  return (
    <>
     <div className="Appp">
      <nav className="navbar">
       
        <div className="search-bar">
          <input type="text" placeholder="Search for products, brands and more"    />
          
        </div>
        <div className="nav-links">
          <button onClick={toggleLoginPopup}>Login</button>
          <div className="user-photo">
            <img src="data:image/jpeg;base64,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" alt="User" />
          </div>
        </div>
      </nav>

      {showLogin && (
        <div className="login-popup">
          <div className="login-content">
            <span className="close" onClick={toggleLoginPopup}>&times;</span>
            <h2>Login Form</h2>
            <form>
              <label htmlFor="username">Username:</label>
              <input type="text" id="username" name="username" required />
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" name="password" required />
              <button type="submit">Login</button>
            </form>
          </div>
        </div>
      )}
    </div>
 
    </>
  )
}

export default Features_namvbar
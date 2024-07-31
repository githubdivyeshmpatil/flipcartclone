import React from "react";
import './CartNavbar.css';
import { FaArrowLeft } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const CartNavbar = ({ toggleCart, cartCount }) => {
  return (
    // <nav className="navbar navbar-expand-lg navbar-light bg-primary ">
    //   <div className="container-fluid">
    //     <Link className="lefttt" to="/Laptop-page">
    //     <button id="back-arrow"><FaArrowLeft id="left-arrow"/>
    //     </button>
    //     </Link>
    //     <button className="cart-button position-relative" onClick={toggleCart}>
    //       <FaShoppingCart color="black" size={25} />
    //       {cartCount > 0 && (
    //         <span className="badge badge-danger position-absolute" style={{ top: '-10px', right: '-10px' }}>
    //           {cartCount}
    //         </span>
    //       )}
    //     </button>
    //     <button
    //       className="navbar-toggler"
    //       type="button"
    //       data-bs-toggle="collapse"
    //       data-bs-target="#navbarSupportedContent"
    //       aria-controls="navbarSupportedContent"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <span className="navbar-toggler-icon" />
    //     </button>
    //     <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    //         <li className="nav-item">
    //           <form className="d-flex">
    //             <input
    //               className="form-control me-2"
    //               type="search"
    //               placeholder="Search"
    //               aria-label="Search"
    //             />
    //           </form>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
    <nav className="navbar">
  <div className="navbar-content">
    <div className="navbar-left">
      <button className="navbar-icon">←</button>
    </div>
    <div className="navbar-center">
      <input type="text" className="navbar-search" placeholder="Search..." />
    </div>
    <div className="navbar-right">
      <button className="navbar-cart" onClick={toggleCart}>🛒
      {cartCount > 0 && (
         <span className="badge badge-danger position-absolute" style={{ top: '-10px', right: '-10px' }}>
             {cartCount}
           </span>
           )}
           </button>
      <button className="navbar-login">Login</button>
    </div>
  </div>
</nav>
  );
};

export default CartNavbar;

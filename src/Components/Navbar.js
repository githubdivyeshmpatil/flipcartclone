import React, { useEffect } from 'react';


import './Navbar.css'
import { FcBiohazard } from "react-icons/fc";
import { FcBusinessman } from "react-icons/fc";
import { BsBoxSeamFill } from "react-icons/bs";
import { IoIosGift } from "react-icons/io";
import { GiSelfLove } from "react-icons/gi";
import { TbGiftCard } from "react-icons/tb";
import { FaCartArrowDown } from "react-icons/fa";
import { Link } from 'react-router-dom';




function Navbar() {
  
  return (
    <>
    <nav className="navbar navbar-dark  fixed-top">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
     <img src='https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg' alt=''></img>
    </a>
   
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="offcanvas"
      data-bs-target="#offcanvasDarkNavbar"
      aria-controls="offcanvasDarkNavbar"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div
      className="offcanvas offcanvas-start text-bg-dark"
      tabIndex={-1}
      id="offcanvasDarkNavbar"
      aria-labelledby="offcanvasDarkNavbarLabel"
    >
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
          Flip<span id='kart'>kart</span>
        </h5>
        <button
          type="button"
          className="btn-close btn-close-white"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        />
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li className="nav-item"data-aos="fade-right">
            <Link className="nav-link active" to="/" aria-current="page" href="#">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="about-us" href="#">
              About
            </Link>
          </li>
          <li className=" dropdown">
            <a
              className="nav-linkk dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
             Login
            </a>
          
            <ul style={{marginTop:'15px'}} className="dropdown-menu ">
              <li>
                <a className="dropdown-item" href="#">
                  New coustomer
                </a>
                <hr></hr>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                <FcBusinessman id='my'/> My Profile

                
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                <FcBiohazard id='my'/>  Flipkart Plus Zone
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                <BsBoxSeamFill id='myy'/>  Orders
               
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
               <GiSelfLove id='myy'/>  Wishlist
                
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                <IoIosGift id='myy'/>  Rewards
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                <TbGiftCard id='myy'/>  Gift Card
  
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                <FaCartArrowDown id='myy'/>   Cart

  
                </a>
              </li>
            </ul>
          </li>
        </ul>
        <form className="d-flex mt-3" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-success" type="submit">
            Search
          </button>
        </form>
      </div>
    </div>
  </div>
</nav>

    </>
  )
}

export default Navbar
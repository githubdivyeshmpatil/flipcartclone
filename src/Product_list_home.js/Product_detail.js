import React from "react";
import { useLocation } from "react-router-dom";
import "./Product_detail.css";
import { CiCircleQuestion } from "react-icons/ci";
import { FaTag } from "react-icons/fa6";
import Navbar from "../Components/Navbar";
import Product_list_home from "./Product_list_home";




function Product_detail() {
  const location = useLocation();
  const { product } = location.state;

  return (
    <>
     <Navbar backgroundColor="#abdbe3" logo="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg" />
      <div className="container" id="product-detail-container">
        <div className="item">
          <div className="item-2">

          <img src={product.thumbnail} alt=""></img>
          </div>
          <br></br>
          <div className="button-container">
            <button className="btn add-to-cart">Add to Cart</button>
            <button className="btn buy-now">Buy Now</button>
          </div>
        </div>
        <div className="item">
          <div className="laptop">{product.title}</div>
       
            <div className="roww">
            
            <span id="mn">19,606 Rating & 12,438 reviews</span>
            <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png" alt=""></img>

          
            </div>
          
          <div id="boldd">&#8377;{product.price}<span id="gre">
                  <del> &#8377;1099</del>
                 </span><span id="grn">15% off</span><CiCircleQuestion id="ques"/>
                 </div>
                 <div className="new">
                  <h1 id="Available">Available offers</h1>
                 </div>
                 <div className="tagg">
                  <span className="tag"><FaTag  color="green"/><span id="black"> Bank Offer</span>10% off up to ₹1,000 on Axis Bank Credit Card and Credit EMI Txns, on  ₹9,999 and above<span id="bluee">T&C</span></span><br></br>
                  <span className="tag"><FaTag  color="green"/><span id="black"> Bank Offer</span>5% Cashback on Flipkart Axis Bank Card<span id="bluee">T&C</span>  </span><br></br>
                  <span className="tag"><FaTag  color="green"/> Special Offer on Boat charger on Purchase of This product<span id="bluee">T&C</span> </span><br></br>
                  <span className="tag"><FaTag color="green"/> <span id="black">Partner Offer</span>Sign-up for Flipkart Pay Later & get free Times Prime Benefits worth ₹20,000*<span id="bluee">Know More</span> </span>
                
                 </div>
                 <div className="super">
                  <img src="https://i.ytimg.com/vi/wX9lEPW40j4/maxresdefault.jpg" alt=""></img>
                 </div>
                 
          
        </div>
      </div>
      {/* similar product daitels---------------------------- */}
      <Product_list_home/>
    </>
  );
}

export default Product_detail;

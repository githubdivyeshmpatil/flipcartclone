import React from "react";
import { useLocation } from "react-router-dom";
import "./Product_detail.css";

function Product_detail() {
  const location = useLocation();
  const { product } = location.state;

  return (
    <>
      <div class="container">
        <div class="item">
          <div className="item-2">

          <img src={product.thumbnail} alt=""></img>
          </div>
          <br></br>
          <div class="button-container">
            <button class="btn add-to-cart">Add to Cart</button>
            <button class="btn buy-now">Buy Now</button>
          </div>
        </div>
        <div class="item">
          <div>{product.title}</div>
          <div>{product.price}</div>
        </div>
      </div>
    </>
  );
}

export default Product_detail;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Laptop_page.css';
import { FaStar } from "react-icons/fa";
import Features_namvbar from './Features_namvbar';
import Laptop_pagenew_data from './Laptop_page_data';
import Footer_description from './Footer_page/Footer_description';
import Footer from './Footer_page/Footer';

function Laptop_page() {
  const [laptopItem, setLaptopItem] = useState(Laptop_pagenew_data);
  const navigate = useNavigate();

  const GoToProduct = (laptopItem) => {
    navigate("/Laptop_Details_page", { state: { laptopItem } });
  };

  return (
    <>
      <Features_namvbar />
      <div className="laptop_cart">
        {laptopItem.map((item) => (
          <div className="laptop-new" key={item.id} onClick={() => GoToProduct(item)}>
            <div className="laptop-image">
              <img src={item.thumbnail} alt={item.title} />
            </div>
            <div className="laptop-details">
              <p className="laptop-title">{item.title}</p>
              <p className="laptop-prie">
                <span id='laptop-e'>4.2 <FaStar id='fa' /></span>
                <span id="greyc">421 Rating</span>
                <span><img src="./img/assure.png" alt=""></img></span>
              </p>
              <p className="laptop-price">
                &#8377;{item.price}
                <span id="greyc"><del> &#8377;1099</del></span>
                <span id="green">65% off</span>
              </p>
            </div>
          </div>
        ))}
      </div>
      <Footer_description />
      <Footer />
    </>
  );
}

export default Laptop_page;

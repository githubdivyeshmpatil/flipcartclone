import React, { useState } from 'react'
import Navbar from '../Navbar';
import './Laptop_page.css'
import Features_namvbar from './Features_namvbar';
import Laptop_pagenew_data from './Laptop_page_data';
import { Container } from 'react-bootstrap';
import { FaStar } from "react-icons/fa";


function Laptop_page() {
  const [laptopItem, setlaptopItem] = useState(Laptop_pagenew_data);

   
  return (
    <>
     <Features_namvbar/>
    
     <div className="laptop_cart">
          {laptopItem.map((laptopItem) => (
            <div className="laptop-new">
              <div className="laptop-image">
                <div id="thumbnail-hidden">
                  <img src={laptopItem.thumbnail} alt={laptopItem.title} />
                </div>
               
              </div>
              <div className="laptop-details">
                <p className="laptop-title">{laptopItem.title}</p>
                
                <p className="laptop-prie"><span id='laptop-e'>4.2 <FaStar id='fa'/></span> <span id="greyc">
                  421 Rating
                 </span><span ><img src="./img/assure.png" alt=""></img></span></p>
                <p className="laptop-price">&#8377;{laptopItem.price}<span id="greyc">
                  <del> &#8377;1099</del>
                 </span><span id="green">65% off</span></p>
              </div>
            </div>
          ))}
        </div>
        
    
    </>
  )
}

export default Laptop_page;
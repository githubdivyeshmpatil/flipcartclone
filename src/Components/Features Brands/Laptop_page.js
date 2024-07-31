import React, { useState } from 'react'
import Navbar from '../Navbar';
import './Laptop_page.css'
import Features_namvbar from './Features_namvbar';
import Laptop_pagenew_data from './Laptop_page_data';
import { Container } from 'react-bootstrap';
import { FaStar } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import Footer_description from './Footer_page/Footer_description';
import Footer from './Footer_page/Footer';



function Laptop_page() {
  const [laptopItem, setlaptopItem] = useState(Laptop_pagenew_data);


  const navigate = useNavigate();

    const GoToProduct = (laptopItem) =>{
      navigate("/Laptop_Details_page" , {state : {laptopItem}})
    }

   
  return (
    <>
     <Features_namvbar/>
    
     <div className="laptop_cart">
          {laptopItem.map((laptopItem ) => (
            <div className="laptop-new"  key={laptopItem . id}  onClick={()=> GoToProduct(laptopItem)}>
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
        <Footer_description/>
        <Footer/>
        
    
    </>
  )
}

export default Laptop_page;
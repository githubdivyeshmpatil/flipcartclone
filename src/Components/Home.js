import React from 'react'
import './Home.css'
import Navbar from './Navbar'
import { Container } from 'react-bootstrap'
import Home_page_slider from './Home_page_slider';
import Product_list_home from '../Product_list_home.js/Product_list_home';



const logos = [
    'logo1.png',
    'logo2.png',
    'logo3.png',
    'logo4.png',
    'logo5.png',
    'logo6.png',
    'logo7.png',
    'logo8.png',
    'logo9.png',
  ];
function Home() {
  return (
    <>
    <Navbar/>
    <Container fluid id='home-page-logo'>
        <div className="logo-container">
          {logos.map((logo, index) => (
            <img
              key={index}
              src={`${process.env.PUBLIC_URL}/${logo}`}
              alt={`Logo ${index + 1}`}
              className="logo"
            />
          ))}
        </div>
      </Container>
      <Home_page_slider/>
      <Product_list_home/>
      
     
    </>
  )
}

export default Home
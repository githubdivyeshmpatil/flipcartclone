import React, { useEffect } from 'react'
import './Home.css'
import Navbar from './Navbar'
import { Container } from 'react-bootstrap'
import Home_page_slider from './Home_page_slider';
import Product_list_home from '../Product_list_home.js/Product_list_home';
import Features from './Features Brands/Features';
import leg from './assets/leg.jpg'
import vidiosrc from './assets/vidio.mp4'
import Footer_description from './Features Brands/Footer_page/Footer_description';
import Footer from './Features Brands/Footer_page/Footer';




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
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    <Navbar  backgroundColor="white" logo="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg"/>
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
      <Features/>
      <div className='bgp'>
      <div className="container" id='puma'>
      <div className="columnnn">
        
        <video autoPlay muted controls>
          <source src={vidiosrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="columnnn">
        <img src={leg} alt="Image" />
       
      </div>
    </div>
    </div>
    <Footer_description/>
    <Footer/>

   
      
     
    </>
  )
}

export default Home
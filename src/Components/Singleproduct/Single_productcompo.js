import React from 'react'
import './Single_productcompo.css'
import discriptionimage from '../Home_category/watch-img/discription image.png'
import { Container } from 'react-bootstrap'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import Realated_product from './Realated_product';
import { FaShoppingCart } from "react-icons/fa";






function Single_productcompo() {
  return (
    <Container>
    <div className='single-product-main-content'>
  <div className='layout'>
    <div className='single-product-page'>
      <div className='left'> 
        <img src={discriptionimage} alt='Product Image' />
      </div>
      <div className='right'>
        <span className='name'>watch</span>
        <span className='price'>48995</span>
        <span className='desc'>description</span>
        <div className='cart-buttons'>
          <div className='quantity-buttons'>
            <span>-</span>
            <span>5</span>
            <span>+</span>
          </div>
          <button className='add-to'><FaShoppingCart id='face'size={25} color='white'/>
          ADD TO CART</button>
        </div>
        <span className='divider'/>
        <div className='info-item'>
          <span className='text-bold'>
            Category:
          <span>headfones</span>

          </span><br></br>
          <span className='text-bold'>
            Share:

          <span className='social-icons'>
          <FaFacebook id='face'/>
          <FaInstagram id='face' color='red' size={25}/>
          <FaTwitter id='face' color='blue' size={25}/>
          <FaPinterest  id='face'color='red' size={25}/>



          </span>

          </span>
        </div>
      </div>
    </div>
    <Realated_product/>
  </div>
</div>
</Container>
  )
}

export default Single_productcompo
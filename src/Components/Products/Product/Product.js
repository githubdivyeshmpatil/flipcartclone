import React from 'react'
import './Product.css'
import image1 from './img/earbirdsnew.png'
import { Container } from 'react-bootstrap'

function Product() {
  return (
    <Container id='product-flex'>
    <div className='product-cart'>Product
    <div className='thumbnail'>
     <img src={image1} alt=''></img>
    </div>
    <div className='prod-details'>
      <span className='name'> name</span>
      <span className='price'>&#8377;499</span>
    </div>
    </div>
    </Container>
  )
}

export default Product
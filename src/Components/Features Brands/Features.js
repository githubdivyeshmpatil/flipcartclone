import React from 'react'
import './Features.css'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Features() {
  return (
    <>
     
    <Container fluid id='color-cont'>
    <h1 id="elecronics">featured Brands</h1>
       <div className="product-slider" >
       <Link className='ff' to="Laptop-page">
        <div className="product-card">
          <img src='https://rukminim2.flixcart.com/fk-p-flap/450/280/image/a0c2270840afce68.jpeg?q=20' alt=''></img>
        </div>
        </Link>
        <Link className='ff' to="noice-page">
        <div className="product-card">
          <img src='https://rukminim2.flixcart.com/fk-p-flap/450/280/image/0998bf64c7431be1.jpeg?q=20' alt=''></img>
        </div>
        </Link>
        <div className="product-card">
          <img src='https://rukminim2.flixcart.com/fk-p-flap/450/280/image/59e7a5a085eec792.jpeg?q=20' alt=''></img>
        </div>
        <div className="product-card">
          <img src='https://rukminim2.flixcart.com/fk-p-flap/450/280/image/e217caf579ff539e.jpeg?q=20' alt=''></img>
        </div>
        <div className="product-card">
          <img src='https://rukminim2.flixcart.com/fk-p-flap/450/280/image/841343fdd0c3bdb6.jpeg?q=20'alt=''></img>
        </div>
        <div className="product-card">
          <img src='https://rukminim2.flixcart.com/fk-p-flap/450/280/image/07a6ad4d89d81969.jpeg?q=20' alt=''></img>
        </div>
        <div className="product-card">
          <img src='https://rukminim2.flixcart.com/fk-p-flap/450/280/image/a758df02992b3450.jpeg?q=20' alt=''></img>
        </div>
        <div className="product-card">
        <img src='https://rukminim2.flixcart.com/fk-p-flap/450/280/image/1b29840b00e8e16a.jpeg?q=20' alt=''></img>

        </div>
    </div>
    </Container>

    </>
  )
}

export default Features
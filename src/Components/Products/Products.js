import React from 'react'
import './Products.css'
import Product from './Product/Product'
import { Container } from 'react-bootstrap'


function Products({innerPage,headingText}) {
  return (
    
    <Container>
    <div className='products-container'>
       {! innerPage && <div className='sec-heading'>{headingText}</div>}
        <div className='products'>
         <Product/>
         <Product/>
         <Product/>
         <Product/>
         <Product/>
         <Product/>
         <Product/>
         <Product/>
        </div>

    </div>
    </Container>
  )
}

export default Products
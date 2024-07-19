import React from 'react'
import { useLocation } from 'react-router-dom'

function Product_detail() {

    const location = useLocation();
    const {product} = location.state;

  return (
    <>
    <img src={product.thumbnail} alt=''></img>
    <div>{product.title}</div>
    <div>{product.price}</div>
    
    </>
  )
}

export default Product_detail
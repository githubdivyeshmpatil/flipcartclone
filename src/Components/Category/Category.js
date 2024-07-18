import React from 'react'
import './Category.css'
import Products from '../Products/Products'

function Category() {
  return (
    <div className='category-main-content'>
      <div className='layout'>
        <div className='category-title'>
          category title
        </div>
         <Products innerPage={true}/>
      </div>
    </div>
  )
}

export default Category
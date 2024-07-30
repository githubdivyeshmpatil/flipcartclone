import './Wild_Stone.css';
import React, { useEffect, useState } from 'react';
import boysdata from './Wild_data_jason';
import CartNavbar from './CartNavbar';
import Footer_description from './Footer_page/Footer_description';
import Footer from './Footer_page/Footer';

function Wild_Stone() {
  const [selectedColors, setSelectedColors] = useState(
    boysdata.reduce((acc, producti) => {
      acc[producti.id] = 'black'; // default color, ensure 'black' exists in product.colors
      return acc;
    }, {})
  );

  const handleColorChange = (productiId, color) => {
    setSelectedColors(prevState => ({
      ...prevState,
      [productiId]: color
    }));
  };
//scrool on top ke liye------//
useEffect(() => {
  window.scrollTo(0, 0);
}, []);

  return (
    <>
    <CartNavbar/>
      <div className="producti-gallery">
        {boysdata.map(producti => (
          <div key={producti.id} className="producti">
            <img
              src={producti.colors[selectedColors[producti.id]]}
              alt=""
            />
            <div className="color-options">
              {Object.keys(producti.colors).map(color => (
                <img
                  key={color}
                  src={producti.colors[color]}
                  alt={color}
                  onClick={() => handleColorChange(producti.id, color)}
                  className={selectedColors[producti.id] === color ? 'selected' : ''}  
                />   
              ))}
            </div>
            <p className='product-title-name'>{producti.name}</p>
            <p className='product-title-name_solid'>{producti.title}</p>
            <div className='boys-price'>
            &#8377;{producti.price}&nbsp;&nbsp; <span id='delete'><del>&#8377;999</del></span>&nbsp;&nbsp;&nbsp;<span id='off'>{producti.discount}</span>
            </div>
            <p className='free'>Free Delevery</p>
           <div className='sizes'>SIZE:<span id='allsize'>  S , M , L , XL , XXL</span></div>

          </div>
        ))}
      </div>
     <Footer_description/>
     <Footer/>
    </>
  );
}

export default Wild_Stone;

import React, { useEffect, useState } from 'react';
import './Noice_watch.css';
import CartNavbar from './CartNavbar';
import noice_pagejson_data from './Noise_Data';
import { useNavigate } from 'react-router-dom';


function Noice_watch() {
    const [isBrandOpen, setIsBrandOpen] = useState(true);
    const [isDialShapeOpen, setIsDialShapeOpen] = useState(true);
    const [isSizeOpen, setIsSizeOpen] = useState(true);
    const [isDiscountOpen, setIsDiscountOpen] = useState(true);

    //watch jasonn data----//
    const [noiseItem, setnoiseItem] = useState(noice_pagejson_data);


    
    const toggleBrandDropdown = () => {
        setIsBrandOpen(!isBrandOpen);
    };

    const toggleDialShapeDropdown = () => {
        setIsDialShapeOpen(!isDialShapeOpen);
    };

    const toggleSizeDropdown = () => {
        setIsSizeOpen(!isSizeOpen);
    };
    const toggleDiscountDropdown = () => {
        setIsDiscountOpen(!isDiscountOpen);
    };


    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    
      const navigate = useNavigate();

      const GoToProduct = (noiseItem) =>{
        navigate("/Noise_Deatail_page" , {state : {noiseItem}})
      }


    return (
        <>
            <CartNavbar/>
            <div className="container-fluid" id='noice-Container'>
                <aside className="sidebarrr">
                    {/* Sidebar content */}
                    <p id='noice_heading'>Filters</p>
                    

                    {/* SIZE dropdown menu */}
                    <div className="dropdown">
                        <div className="dropdown-toggle dropdown-title" onClick={toggleBrandDropdown}>
                            BRAND NAME
                        </div>
                        {isBrandOpen && (
                            <div className="dropdown-content">
                                <label>
                                    <input type="checkbox" name="size" value="Small" className='box-z' /> Noise
                                </label>
                                <label>
                                    <input type="checkbox" name="size" value="Medium" /> boAt
                                </label>
                                <label>
                                    <input type="checkbox" name="size" value="Large" /> PTron
                                </label>
                                <label>
                                    <input type="checkbox" name="size" value="Extra Large" /> TAXTURE
                                </label>
                                <label>
                                    <input type="checkbox" name="size" value="Extra Large" /> snowbudy
                                </label>
                                <label>
                                    <input type="checkbox" name="size" value="Extra Large" /> NoiseFit
                                </label>
                                
                            </div>
                        )}
                    </div>
                    {/* DIAL SHAPE dropdown menu */}
                    <div className="dropdown">
                        <div className="dropdown-toggle dropdown-title" onClick={toggleDialShapeDropdown}>
                            DIAL SHAPE
                        </div>
                        {isDialShapeOpen && (
                            <div className="dropdown-content">
                                <label>
                                    <input type="checkbox" name="shape" value="Contemporary" />Round
                                </label>
                                <label>
                                    <input type="checkbox" name="shape" value="Curved" /> Square
                                </label>
                                <label>
                                    <input type="checkbox" name="shape" value="Oval" /> Rectangle
                                </label>
                                <label>
                                    <input type="checkbox" name="shape" value="Rectangle" /> Oval
                                </label>
                                <label>
                                    <input type="checkbox" name="shape" value="Round" /> Curved
                                </label>
                                <label>
                                    <input type="checkbox" name="shape" value="Square" /> Contemporary
                                </label>
                            </div>
                        )}
                    </div>

                    {/* SIZE dropdown menu */}
                    <div className="dropdown">
                        <div className="dropdown-toggle dropdown-title" onClick={toggleSizeDropdown}>
                            Display SIZE
                        </div>
                        {isSizeOpen && (
                            <div className="dropdown-content">
                                <label>
                                    <input type="checkbox" name="size" value="Small" className='box-z' />30.49 mm 
                                </label>
                                <label>
                                    <input type="checkbox" name="size" value="Medium" /> 30.59 mm 
                                </label>
                                <label>
                                    <input type="checkbox" name="size" value="Large" /> 32.49 mm 
                                </label>
                                <label>
                                    <input type="checkbox" name="size" value="Extra Large" /> 37.11 mm
                                </label>
                                <label>
                                    <input type="checkbox" name="size" value="Extra Large" /> Above 45
                                </label>
                                <label>
                                    <input type="checkbox" name="size" value="Extra Large" /> Bleow 30
                                </label>
                            </div>
                        )}
                    </div>
                     {/* SIZE dropdown menu */}
                     <div className="dropdown">
                        <div className="dropdown-toggle dropdown-title" onClick={toggleDiscountDropdown}>
                            DISCOUNT
                        </div>
                        {isDiscountOpen && (
                            <div className="dropdown-content">
                                <label>
                                    <input type="checkbox" name="size" value="Small" className='box-z' /> 50%
                                </label>
                                <label>
                                    <input type="checkbox" name="size" value="Medium" /> 40%
                                </label>
                                <label>
                                    <input type="checkbox" name="size" value="Large" /> 20%
                                </label>
                                <label>
                                    <input type="checkbox" name="size" value="Extra Large" /> 10%
                                </label>
                            </div>
                        )}
                    </div>
                </aside>
                <div className="main-content">
                    {/* Main content */}
                    <div className="noise_cart">
          {noiseItem.map((noiseItem ) => (
            <div className="noise-new"  key={noiseItem . id}  onClick={()=> GoToProduct(noiseItem)} >
              <div className="noise-image">
                <div id="thumbnail-hidden">
                  <img src={noiseItem.thumbnail} alt={noiseItem.title} />
                </div>
               
              </div>
              <div className="noise-details">
                <p className="noise-title">{noiseItem.title}</p>
                
                <p className="noise-prie"><span id='noise-e'>4.2 </span> <span id="greyc">
                  421 Rating
                 </span><span ></span></p>
                <p className="noise-price">&#8377;{noiseItem.price}<span id="greyc">
                  <del> &#8377;1099</del>
                 </span>&nbsp;<span id="green">65% off</span></p>
              </div>
            </div>
          ))}
        </div>
                </div>
            </div>
           
        </>
    );
}

export default Noice_watch;

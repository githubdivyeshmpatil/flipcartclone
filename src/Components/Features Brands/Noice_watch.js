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

    const [noiseItem, setNoiseItem] = useState(noice_pagejson_data);
    const [filteredNoiseItem, setFilteredNoiseItem] = useState(noice_pagejson_data);

    const [brandFilters, setBrandFilters] = useState([]);
    const [shapeFilters, setShapeFilters] = useState([]);
    const [discountFilters, setDiscountFilters] = useState([]);

    const toggleBrandDropdown = () => setIsBrandOpen(!isBrandOpen);
    const toggleDialShapeDropdown = () => setIsDialShapeOpen(!isDialShapeOpen);
    const toggleSizeDropdown = () => setIsSizeOpen(!isSizeOpen);
    const toggleDiscountDropdown = () => setIsDiscountOpen(!isDiscountOpen);

    const handleFilterChange = (filterType, value) => {
        const updateFilters = (filters) => {
            return filters.includes(value)
                ? filters.filter((item) => item !== value)
                : [...filters, value];
        };

        switch (filterType) {
            case 'brand':
                setBrandFilters(updateFilters(brandFilters));
                break;
            case 'shape':
                setShapeFilters(updateFilters(shapeFilters));
                break;
            case 'discount':
                setDiscountFilters(updateFilters(discountFilters));
                break;
            default:
                break;
        }
    };

    useEffect(() => {
        const applyFilters = () => {
            let filtered = noiseItem;

            if (brandFilters.length > 0) {
                filtered = filtered.filter((item) => brandFilters.includes(item.brand));
            }

            if (shapeFilters.length > 0) {
                filtered = filtered.filter((item) => shapeFilters.includes(item.shape));
            }

            if (discountFilters.length > 0) {
                filtered = filtered.filter((item) => discountFilters.includes(item.discount));
            }

            setFilteredNoiseItem(filtered);
        };

        applyFilters();
    }, [brandFilters, shapeFilters, discountFilters, noiseItem]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const navigate = useNavigate();

    const GoToProduct = (noiseItem) => {
        navigate("/Noise_Deatail_page", { state: { noiseItem } });
    };

    return (
        <>
            <CartNavbar />
            <div className="container-fluid" id='noice-Container'>
            
                <aside className="sidebarrr">
                    <p id='noice_heading'>Filters</p>

                    {/* BRAND dropdown menu */}
                    <div className="dropdown">
                        <div className="dropdown-toggle dropdown-title" onClick={toggleBrandDropdown}>
                            BRAND NAME
                        </div>
                        {isBrandOpen && (
                            <div className="dropdown-content">
                                {['Noise', 'boAt', 'PTron', 'TAXTURE', 'snowbudy', 'NoiseFit'].map((brand) => (
                                    <label key={brand}>
                                        <input
                                            type="checkbox"
                                            name="brand"
                                            value={brand}
                                            onChange={() => handleFilterChange('brand', brand)}
                                        />
                                        {brand}
                                    </label>
                                ))}
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
                                {['Round', 'Square', 'Rectangle', 'Oval', 'Curved', 'Contemporary'].map((shape) => (
                                    <label key={shape}>
                                        <input
                                            type="checkbox"
                                            name="shape"
                                            value={shape}
                                            onChange={() => handleFilterChange('shape', shape)}
                                        />
                                        {shape}
                                    </label>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* DISCOUNT dropdown menu */}
                    <div className="dropdown">
                        <div className="dropdown-toggle dropdown-title" onClick={toggleDiscountDropdown}>
                            DISCOUNT
                        </div>
                        {isDiscountOpen && (
                            <div className="dropdown-content">
                                {['50%', '40%', '20%', '10%'].map((discount) => (
                                    <label key={discount}>
                                        <input
                                            type="checkbox"
                                            name="discount"
                                            value={discount}
                                            onChange={() => handleFilterChange('discount', discount)}
                                        />
                                        {discount}
                                    </label>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Other dropdown menus can be added similarly */}
                </aside>
                <div className="main-content">
                    <h1 id='smart-watch'>Smart Watches</h1>
                    <div className="noise_cart">
                        {filteredNoiseItem.map((noiseItem) => (
                            <div className="noise-new" key={noiseItem.id} onClick={() => GoToProduct(noiseItem)}>
                                <div className="noise-image">
                                    <div id="thumbnail-hidden">
                                        <img src={noiseItem.thumbnail} alt={noiseItem.title} />
                                    </div>
                                </div>
                                <div className="noise-details">
                                    <p className="noise-title">{noiseItem.title}</p>
                                    <p className="noise-prie">
                                        <span id='noise-e'>4.2 </span>
                                        <span id="greyc">421 Rating</span>
                                    </p>
                                    <p className="noise-price">
                                        &#8377;{noiseItem.price}
                                        <span id="greyc">
                                            <del>&#8377;1099</del>
                                        </span>
                                        &nbsp;<span id="green">65% off</span>
                                    </p>
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

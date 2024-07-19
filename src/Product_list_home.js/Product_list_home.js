import React, { useState } from "react";
import Product_home_data from "./Product_list_data_json";
import { Container } from "react-bootstrap";
import "./Product_list_home.css";
import { useNavigate } from "react-router-dom";

function Product_list_home() {
  const [ctItem, setctItem] = useState(Product_home_data);
   /* filter------use-----code------------------------------------------------*/
  const [selectedFilter, setSelectedFilter] = useState('All');

  const filters = ['All', 'Electronics', 'Clothing', 'Accessories']; // Example filters
 
  const handleFilterChange = (event) => {
    const filter = event.target.value;
    setSelectedFilter(filter);
    filterProducts(filter);
  };

  const filterProducts = (filter) => {
    if (filter === 'All') {
      setctItem(Product_home_data);
    } else {
      const filteredItems = Product_home_data.filter((item) =>
        item.category === filter // Assuming each product has a 'category' attribute
      );
      console.log('filteredItems', filteredItems)
      setctItem(filteredItems);
    }
  };

    const navigate = useNavigate();

    const GoToProduct = (product) =>{
      navigate("/Product_detail" , {state : {product}})
    }

  
  return (
    <>
      <Container fluid style={{ backgroundColor: "#F6F5F0" }}>
        <div className="filter-home">
        <select onChange={handleFilterChange} value={selectedFilter}>
            {filters.map((filter, index) => (
              <option key={index} value={filter}>
                {filter}
              </option>
            ))}
          </select>
        </div>
        <h1 id="elecronics">Best of Electronics</h1>
        <div className="Product_cart">
          {ctItem.map((ct) => (
            <div className="product" key={ct.id} onClick={()=> GoToProduct(ct)}>
              <div className="product-image">
                <div id="thumbnail-hidden">
                  <img src={ct.thumbnail} alt={ct.title} />
                </div>
               
              </div>
              <div className="product-details">
                <p className="product-title">{ct.title}</p>
                <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png" alt=""></img>

                <p className="product-price">&#8377;{ct.price}<span id="greyc">
                  <del> &#8377;1099</del>
                 </span><span id="green">65% off</span></p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
}

export default Product_list_home;

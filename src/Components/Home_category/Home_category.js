import React from "react";
import "./Home.category.css";
import watch from "./watch-img/watch1.jpg";
import { Container } from "react-bootstrap";
function Home_category() {
  return (
    <Container>
    <div className="shop-by-category">
      <div className="categories">
        <div className="category">
          <img src={watch} alt=""></img>
        </div>
        <div className="category">
          <img src={watch} alt=""></img>
        </div>
        <div className="category">
          <img src={watch} alt=""></img>
        </div>
        <div className="category">
          <img src={watch} alt=""></img>
        </div>
      </div>
    </div>
    </Container>
  );
}

export default Home_category;

import React from 'react'

import slide1 from './assets/slide1.png'
import slide2 from './assets/slide2.png'
import slide3 from './assets/slide3.png'
import slide4 from './assets/slide4.png'
import slide5 from './assets/slide5.png'
import slide6 from './assets/slide6.png'

function Home_page_slider() {
  return (
    <>
     <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
      <div className="carousel-indicators">
        <button style={{display:'none'}}
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to={0}
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        />
        <button style={{display:'none'}}
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to={1}
          aria-label="Slide 2"
        />
        <button style={{display:'none'}}
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to={2}
          aria-label="Slide 3"
        />
         <button style={{display:'none'}}
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to={3}
          aria-label="Slide 4"
        />
         <button style={{display:'none'}}
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to={4}
          aria-label="Slide 5"
        />
         <button style={{display:'none'}}
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to={5}
          aria-label="Slide 6"
        />
     
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={slide1} className="d-block w-100" alt="Slide 1" />
        </div>
        <div className="carousel-item">
          <img src={slide2} className="d-block w-100" alt="Slide 2" />
        </div>
        <div className="carousel-item">
          <img src={slide3} className="d-block w-100" alt="Slide 3" />
        </div>
        <div className="carousel-item">
          <img src={slide4} className="d-block w-100" alt="Slide 4" />
        </div>
        <div className="carousel-item">
          <img src={slide5} className="d-block w-100" alt="Slide 5" />
        </div>
        <div className="carousel-item">
          <img src={slide6} className="d-block w-100" alt="Slide 6" />
        </div>
      </div>
      
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>

    </>
  )
}

export default Home_page_slider
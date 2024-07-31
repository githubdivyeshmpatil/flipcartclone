import React, { useState } from 'react'
import './Features_namvbar.css'
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from 'react-router-dom';




function Features_namvbar() {
  
  
   
    
  return (
    <>
  
  <nav class="navbar navbar-expand-lg navbar-light bg-primary">
  <div class="container-fluid">
    <Link className="navbar-branddd" to="/" href="#"><FaArrowLeft /></Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <a class="nav-link" href="#">Login</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

 
    </>
  )
}

export default Features_namvbar
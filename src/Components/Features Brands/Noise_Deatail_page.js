import React from 'react'
import { useLocation } from 'react-router-dom';

function Noise_Deatail_page() {
    const location = useLocation();
  const { noiseItem } = location.state || {};
  return (
    <>
    
    </>
  )
}

export default Noise_Deatail_page
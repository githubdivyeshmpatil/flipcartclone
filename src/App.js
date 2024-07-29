import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';

import Product_detail from './Product_list_home.js/Product_detail';
import About from './Components/About';
import Laptop_page from './Components/Features Brands/Laptop_page';
import Noice_watch from './Components/Features Brands/Noice_watch';
import Laptop_Details_page from './Components/Features Brands/Laptop_Details_page';
import Noise_Deatail_page from './Components/Features Brands/Noise_Deatail_page';


function App() {
  return (
    <>
    
    <BrowserRouter>
    <Routes>

    <Route exact path='/' element={<Home/>}/>
      <Route path='/about-us' element={<About/>}/>
      <Route path='/Product_detail' element={<Product_detail/>}/>
      <Route path='/Laptop-page' element={<Laptop_page/>}/>
      <Route path='/noice-page' element={<Noice_watch/>}/>
      <Route path='/Laptop_Details_page' element={<Laptop_Details_page/>}/>
      <Route path='/Noise_Deatail_page' element={<Noise_Deatail_page/>}/>




     

      
    
      
    </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;

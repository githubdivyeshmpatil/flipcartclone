import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';

import Product_detail from './Product_list_home.js/Product_detail';
import About from './Components/About';


function App() {
  return (
    <>
    
    <BrowserRouter>
    <Routes>

    <Route exact path='/' element={<Home/>}/>
      <Route path='/about-us' element={<About/>}/>
      <Route path='/Product_detail' element={<Product_detail/>}/>
     

      
    
      
    </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;

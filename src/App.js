import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Category from './Components/Category/Category';
import Single_productcompo from './Components/Singleproduct/Single_productcompo';

function App() {
  return (
    <>
    
    <BrowserRouter>
    <Routes>

    <Route exact path='/' element={<Home/>}/>
      <Route path='/about-us' element={<About/>}/>
      <Route path='/category/:id' element={<Category/>}/>
      <Route path='/product/:id' element={<Single_productcompo/>}/>

      
    
      
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

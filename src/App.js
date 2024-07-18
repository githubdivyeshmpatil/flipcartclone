import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';


function App() {
  return (
    <>
    
    <BrowserRouter>
    <Routes>

    <Route exact path='/' element={<Home/>}/>
      <Route path='/about-us' element={<About/>}/>
      

      
    
      
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

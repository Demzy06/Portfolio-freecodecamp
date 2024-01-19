import './App.css'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import About from './Pages/About';
import Hero from './Pages/Hero';
import Navbar  from './layouts/Navbar';
import Footer from './Pages/Footer';
function App() {
  

  return (
    <div className='main_container'>

      <BrowserRouter>
    <Navbar/>
    <About/>
    <Hero/>
    <Footer/>
      </BrowserRouter>
   
    </div>
  )
}

export default App

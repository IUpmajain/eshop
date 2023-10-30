import React from 'react'
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import Cart from './Pages/Cart';
import Home from './Pages/Home';
import Jwellerys from './Pages/Jwellerys';
import Electronic from './Pages/Electronic';
import Women from './Pages/Women';
import Men from './Pages/Men';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


const App = () => {

  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/jwellery' element={<Jwellerys/>}/>
      <Route path='/electronic' element={<Electronic/>}/>
      <Route path='/women' element={<Women/>}/>
        <Route path='/men' element={<Men/>}/>
  </Routes>
      <Footer />
      <ToastContainer/>
    </Router>
  )
}

export default App;

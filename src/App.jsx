import React from 'react';
import Navbar from './Components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import SignUp from './Pages/SignUp';
import Login from './Pages/Login';
import Footer from './Components/Footer';
import Cart from './Components/Cart';
import Checkout from './Components/Checkout';
import AccountProfile from './Pages/AccountProfile';
import AboutUs from './Pages/AboutUs';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signUp' element={<SignUp/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/checkout' element ={<Checkout/>}/>
        <Route path='/accountProfile' element={<AccountProfile/>}/>
        <Route path='/aboutUs' element={<AboutUs/>}/>
        
        

      </Routes>
      <Footer/>
    </div>
  )
}

export default App

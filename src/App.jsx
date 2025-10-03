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
import Contact from './Pages/Contact';
import ProductDetail from './Components/ProductDetail';
import PageError from './Pages/PageError';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Whishlist from './Pages/Whishlist';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";



const App = () => {
  return (
    <>
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
        <Route path='/contact' element ={<Contact/>}/>
        <Route path='/productDetail/:id' element ={<ProductDetail/>}/>
        <Route path='/pageError' element ={<PageError/>}/>
        <Route path='/whishlist' element ={<Whishlist/>}/>
      </Routes>
      <Footer/>
    </div>
    <ToastContainer position='top-right' autoClose={2000}/>
    </>
  )
}

export default App

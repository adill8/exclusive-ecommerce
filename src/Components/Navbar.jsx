import React, { useState } from 'react';
import { BsCart2 } from 'react-icons/bs';
import { FiSearch, FiHeart, FiShoppingCart, FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full border-b border-gray-200 overflow-x-hidden">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-2 py-4 md:flex-nowrap flex-wrap">
        {/* Logo */}
        <div className="text-2xl font-bold text-black">Exclusive</div>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center space-x-6 text-black text-lg font-medium">
          <li className='px-1'><Link to="/">Home</Link></li>
          <li className='px-1'><Link to="/ourProducts">Contact</Link></li>
          <li className='px-1'><Link to="/aboutUs">About</Link></li>
          <li className='px-1'><Link to="/signUp">SignUp</Link></li>
        </ul>

        {/* Search & Icons */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Search Bar */}
          <div className="flex items-center bg-gray-100 p-2 rounded-lg w-[220px]">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="bg-gray-100 outline-none text-sm w-full"
            />
            <FiSearch className="text-2xl text-gray-600" />
          </div>

          {/* Icons */}
          <FiHeart className="text-2xl text-black" />
          <Link to='/cart'>
          <BsCart2 className="text-2xl text-black" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-black"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-3 text-black font-medium">
          <Link to="/" className="block">Home</Link>
          <Link to="/ourProducts" className="block">Contact</Link>
          <Link to="/aboutUs" className="block">About</Link>
          <Link to="/contect" className="block">SignUp</Link>

          <div className="flex space-x-4 pt-2 text-xl">
            <FiHeart />
            <FiShoppingCart />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

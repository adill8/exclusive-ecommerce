import React from 'react';
import { FaApple } from 'react-icons/fa';
import { HiOutlineArrowNarrowRight, HiOutlineChevronRight } from 'react-icons/hi';

const BannerWithSidebar = () => {
  return (
    <div className="flex flex-col md:flex-row mx-4 md:mx-7 px-4 gap-4">
      {/* Sidebar */}
      <div className="hidden md:flex w-[350px] h-full items-center justify-center">
        <ul className="space-y-5 text-md w-full text-gray-700 font-medium my-6">
          <li className="flex justify-between items-center">
            <span>Woman’s Fashion</span>
            <HiOutlineChevronRight className="text-lg" />
          </li>
          <li className="flex justify-between items-center">
            <span>Men’s Fashion</span>
            <HiOutlineChevronRight className="text-lg" />
          </li>
          <li>Electronics</li>
          <li>Home & Lifestyle</li>
          <li>Medicine</li>
          <li>Sports & Outdoor</li>
          <li>Baby’s & Toys</li>
          <li>Groceries & Pets</li>
          <li>Health & Beauty</li>
        </ul>
      </div>

      {/* Divider*/}
      <div className="hidden md:block w-[1px] bg-gray-300"></div>

      {/* Banner*/}
      <div className="flex flex-col sm:flex-row w-full bg-black text-white items-center justify-around p-4 rounded-lg my-6">
        {/* Text Section */}
        <div className="space-y-2 text-center sm:text-left max-w-md">
          <div className="flex justify-center sm:justify-start items-center space-x-2">
            <FaApple className="text-4xl md:text-5xl" />
            <span className="text-lg mt-2">iPhone 14 Series</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold leading-snug">
            Up to 10% <br className="hidden sm:block" /> off Voucher
          </h2>
          <button className="flex items-center justify-center sm:justify-start space-x-1 hover:text-red-500 text-md">
            <span className="border-b border-white">Shop Now</span>
            <HiOutlineArrowNarrowRight className="text-2xl font-bold" />
          </button>
        </div>

        {/* Image */}
        <img
  src="/images/iphone.jpg"
  alt="iPhone"
  className="w-44 sm:w-60 md:w-[220px] max-w-full h-auto object-contain mt-4 sm:mt-0"
/>


      </div>
    </div>
  );
};

export default BannerWithSidebar;

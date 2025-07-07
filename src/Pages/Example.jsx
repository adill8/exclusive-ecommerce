import React from "react";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { FaApple, FaChevronRight } from "react-icons/fa6";
import { HiOutlineArrowRight } from "react-icons/hi2";

const Example = () => {
  return (
    <section className="bg-white py-4">
        <div className="border border-gray-200"></div>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6">
        {/* Sidebar Categories */}
        <div className="w-full md:w-[340px] border-r border-gray-200 px-6 py-8">
          <ul className="space-y-4 text-md font-medium text-gray-700">
            <li className="flex justify-between items-center cursor-pointer hover:text-black">
              Woman's Fashion <span><FaChevronRight/> </span>
            </li>
            <li className="flex justify-between items-center cursor-pointer hover:text-black">
              Men's Fashion 
               <FaChevronRight/>  
            </li>
            <li className="hover:text-black cursor-pointer">Electronics</li>
            <li className="hover:text-black cursor-pointer">Home & Lifestyle</li>
            <li className="hover:text-black cursor-pointer">Medicine</li>
            <li className="hover:text-black cursor-pointer">Sports & Outdoor</li>
            <li className="hover:text-black cursor-pointer">Baby's & Toys</li>
            <li className="hover:text-black cursor-pointer">Groceries & Pets</li>
            <li className="hover:text-black cursor-pointer">Health & Beauty</li>
          </ul>
        </div>

        {/* Banner Section */}
        <div className="w-full md:flex-1 px-6 py-8">
  <div className="relative w-full h-64 md:h-90 bg-black rounded overflow-hidden flex flex-col md:flex-row items-center justify-center md:justify-between p-6 text-white">
    
    {/* TEXT SECTION */}
    <div className="space-y-2 text-center md:text-left my-4 md:my-10 max-w-md px-6">
      <div className="flex justify-center md:justify-start items-center space-x-4">
        <FaApple className="text-3xl md:text-5xl" />
        <span className="text-lg mt-2">iPhone 14 Series</span>
      </div>

      <h2 className="text-3xl md:text-5xl font-bold leading-snug">
        Up to 10% <br className="hidden sm:block" /> off Voucher
      </h2>

      <button className="flex items-center justify-center md:justify-start space-x-1 hover:text-red-500 text-md mx-auto md:mx-0">
        <span className="border-b border-white">Shop Now</span>
        <HiOutlineArrowRight className="text-2xl font-bold" />
      </button>
    </div>

    {/* IMAGE SECTION */}
    <img
      src="/images/iphone.jpg"
      alt="iPhone 14"
      className="hidden md:block w-1/2 object-cover"
    />

    {/* DOTS */}
    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
      <span className="h-2 w-2 bg-gray-500 rounded-full"></span>
      <span className="h-2 w-2 bg-red-500 rounded-full"></span>
      <span className="h-2 w-2 bg-gray-500 rounded-full"></span>
      <span className="h-2 w-2 bg-gray-500 rounded-full"></span>
    </div>
  </div>
</div>

      </div>
    </section>
  );
};

export default Example;

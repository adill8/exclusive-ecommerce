import React from "react";
import { FaApple } from "react-icons/fa";
import {
  HiOutlineArrowNarrowRight,
  HiOutlineChevronRight,
} from "react-icons/hi";

const Example = () => {
  return (
    <div className="max-w-7xl w-full mx-auto px-4 md:px-6 lg:px-8 mb-8">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Sidebar */}
        <div className="hidden md:flex flex-col min-w-[300px] max-w-[350px] mt-8">
          <ul className="space-y-5 text-md w-full text-gray-700 font-medium">
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

        {/* Divider */}
        <div className="hidden md:block w-[1px] bg-gray-300"></div>

        {/* Banner */}
        <div className="flex flex-col lg:flex-row items-center justify-evenly bg-black mt-8 text-white rounded p-6 w-full gap-6">
          {/* Text */}
          <div className="text-center lg:text-left space-y-3 max-w-xl">
            <div className="flex items-center gap-2">
              <img
                src="/images/apple-icon.png"
                alt="Apple Icon"
                className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
              />
              <span className="text-lg sm:text-xl font-medium">
                iPhone 14 Series
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Up to 10% <br className="hidden sm:block" /> off Voucher
            </h2>
            <button className="flex items-center justify-center lg:justify-start gap-1 hover:text-red-500 text-md">
              <span className="border-b border-white">Shop Now</span>
              <HiOutlineArrowNarrowRight className="text-2xl font-bold" />
            </button>
          </div>

          {/* Image */}
          <img
            src="/images/iphone.jpg"
            alt="iPhone"
            className="w-60 sm:w-72 md:w-80 lg:w-[380px] xl:w-[440px] 2xl:w-[500px] h-auto object-contain mt-4 lg:mt-0"
          />
        </div>
      </div>
    </div>
  );
};

export default Example;
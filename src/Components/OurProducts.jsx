import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { Button } from '@headlessui/react';
import { PiEyeLight, PiHeartLight, PiStarFill } from 'react-icons/pi';
import { ourProducts } from '../Data/OurProductsData';

const OurProducts = () => {
   const [updateProducts, setUpdateProducts] = useState(()=>{
   return JSON.parse(localStorage.getItem("ourProducts")) || ourProducts
  });

  useEffect(()=>{
    if(!localStorage.getItem("ourProducts")){
      localStorage.setItem("ourProducts",JSON.stringify(ourProducts));
    }
  },[]);
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">

       <p className="text-red-500 font-semibold flex items-center my-4">
        <span className="w-3 h-6 bg-red-500 mr-2 rounded-sm"></span> Our Products
      </p>
      {/* Title */}
      <h2 className="text-3xl font-bold pb-8">
        Explore Our Products</h2>

      {/* Product */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 cursor-pointer">
        {updateProducts.map((product) => (
          <div
            key={product.id}
            className="relative group overflow-hidden min-h-[350px] w-full"
          >
            {/* Discount Badge */}
            <span className="absolute top-2 left-2 bg-red-500 text-white text-sm px-2 py-1 rounded z-10">
              -{product.discount}%
            </span>

            {/* Icons */}
            <div className="absolute top-2 right-2 flex flex-col gap-2 z-20">
              <PiHeartLight className="bg-white text-black p-2 rounded-full shadow text-4xl" />
              <PiEyeLight className="bg-white text-black p-2 rounded-full shadow text-4xl" />
            </div>


            {/* Image Section */}
            <div className="bg-gray-100 p-4 h-60 flex items-center justify-center rounded">
              <img
                src={product.image}
                alt={product.title}
                className="max-h-full object-contain"
              />
            </div>

            {/* Text Section */}
            <div className="bg-white py-4 ">
              <h3 className="text-md font-semibold mb-2">{product.title}</h3>
              <div className="mb-2 flex items-center text-shadow-amber-800">
                <span className="text-red-600 font-bold pr-2">${product.price}</span>

              {/* Ratings */}
              
                <PiStarFill className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-gray-300" />
                <span className="text-gray-600 ml-2 text-xs">
                  ({product.reviews})
                </span>
              
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="flex justify-center">
        <Button className="bg-red-600 text-white text-lg font-bold py-5 px-12 my-10 rounded shadow-lg hover:bg-red-700 transition cursor-pointer">
          View All Products
        </Button>
      </div>

      {/* Line */}
      <hr className="border-t border-gray-300 my-4" />

    </div>
  );
};

export default OurProducts;

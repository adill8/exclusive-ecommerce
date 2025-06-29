import React, { useEffect, useState } from "react";
import { products } from "../Data/ProductsData";
import { FaStar } from "react-icons/fa";
import { PiEyeLight, PiHeartLight, PiStarFill } from "react-icons/pi";
import { Link } from "react-router-dom";

const TopProducts = () => {
  const [flashSale] = useState(()=>{
    const stored = localStorage.getItem("flashSaleProducts");

    if(stored){
      return JSON.parse(stored);
    }
    return products;
  })

  useEffect(()=>{
   const existing = localStorage.getItem("flashSaleProducts");

    if (!existing || JSON.parse(existing).length === 0) {
      localStorage.setItem("flashSaleProducts", JSON.stringify(products));
      
    }
  },[])
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <p className="text-red-500 font-semibold flex items-center mb-2">
        <span className="w-3 h-6 bg-red-500 mr-2 rounded-sm"></span> Today's
      </p>
      {/* Title */}
      <h2 className="text-3xl font-bold my-6">Flash Sales</h2>

      {/* Product */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 cursor-pointer">
        {flashSale.map((product) => (
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

            {/* Image */}
            <div className="bg-gray-100 p-4 h-60 flex items-center justify-center rounded">
              <Link to={`/productDetail/${product.id}`}>
                <img
                  src={product.image}
                  alt={product.title}
                  className="max-h-full object-contain"
                />
              </Link>
            </div>

            {/* Text */}
            <div className="bg-white py-4">
              <h3 className="text-md font-semibold mb-2">{product.title}</h3>
              <div className="mb-2">
                <span className="text-red-600 font-bold">${product.price}</span>
                <span className="text-gray-400 line-through ml-2">
                  ${product.oldPrice}
                </span>
              </div>

              {/* Ratings */}
              <div className="flex items-center text-sm">
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
        <button className="bg-red-600 text-white text-lg font-bold py-5 px-12 my-10 rounded shadow-lg hover:bg-red-700 transition cursor-pointer">
          View All Products
        </button>
      </div>

      {/* Line */}
      <hr className="border-t border-gray-300 my-4" />
    </div>
  );
};

export default TopProducts;

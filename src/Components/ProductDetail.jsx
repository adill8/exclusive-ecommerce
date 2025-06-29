import React, { useEffect, useState } from "react";
import { FaRotate, FaTruckFast } from "react-icons/fa6";
import { Link, useParams } from "react-router-dom";
import { detailProduct } from "../Data/DetailProduct";
import { BsHeart } from "react-icons/bs";
import { products } from "../Data/ProductsData";
import { FaStar } from "react-icons/fa";
import { PiEyeLight, PiHeartLight, PiStarFill } from "react-icons/pi";

const ProductDetail = () => {
  const { id } = useParams();
  const [allProducts] = useState(()=>{
    const stored = localStorage.getItem('detailAllProducts');

    if (stored) {
      return JSON.parse(stored);
    }
    return detailProduct;
  });

  useEffect(()=>{
    const existing = localStorage.getItem('detailAllProducts');

    if (!existing || JSON.parse(existing).length === 0) {
      localStorage.setItem("detailAllProducts", JSON.stringify(detailProduct));
    }
  },[]);
  const detail = allProducts.find((p) => {
    return p.id === parseInt(id);
  });

  if (!detail) {
    return <p>Product not found</p>;
  }
  return (
    <>
      <section className="text-gray-600 body-font overflow-hidden bg-white min-h-screen flex items-center">
        <div className="container px-6 md:px-12 py-16 mx-auto">
          <div className="flex flex-col lg:flex-row items-stretch gap-14 bg-white rounded-xl p-8">
            {/* Product Image */}
            <div className="w-full lg:w-[45%] flex justify-center bg-gray-100 rounded-lg p-4">
              <img
                alt="gamepad"
                src={detail.image}
                className="object-contain h-full max-h-[500px]"
              />
            </div>

            {/* Product Info */}
            <div className="w-full lg:w-[55%] flex flex-col justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                  {detail.title}
                </h1>

                {/* Rating and Stock */}
                <div className="flex items-center mb-6">
                  <div className="flex text-yellow-400 text-sm">
                    {Array(4)
                      .fill()
                      .map((_, i) => (
                        <svg
                          key={i}
                          fill="currentColor"
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1 3-6z" />
                        </svg>
                      ))}
                    <svg
                      fill="none"
                      stroke="currentColor"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1 3-6z" />
                    </svg>
                  </div>
                  <p className="text-sm text-gray-600 ml-3">(150 Reviews)</p>
                  <p className="ml-auto text-sm text-green-600 font-medium">
                    In Stock
                  </p>
                </div>

                {/* Price */}
                <p className="text-2xl text-gray-800 font-semibold mb-6">
                  ${detail.price}
                </p>

                {/* Description */}
                <p className="text-sm text-gray-600 mb-6 leading-relaxed border-b border-gray-400 pb-4">
                  {detail.description}
                </p>

                {/* Colours */}
                <div className="flex items-center mb-4">
                  <span className="mr-2">Colours:</span>
                  <div className="flex space-x-2">
                    <span className="w-5 h-5 rounded-full border border-gray-400"></span>
                    <span className="w-5 h-5 rounded-full bg-red-600 border border-gray-400"></span>
                  </div>
                </div>

                {/* Sizes */}
                <div className="flex items-center mb-6">
                  <span className="mr-2 text-black">Size:</span>
                  <div className="flex gap-2">
                    {["XS", "S", "M", "L", "XL"].map((size) => (
                      <button
                        key={size}
                        className="border border-gray-300 px-3 py-1 text-sm rounded hover:bg-gray-100"
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quantity and Buttons */}
                <div className="flex items-center mb-6 gap-4">
                  <div className="flex items-center border border-gray-300 rounded">
                    <button className="px-3 py-1">-</button>
                    <span className="px-4">2</span>
                    <button className="px-3 py-1 bg-red-600 text-white">
                      +
                    </button>
                  </div>
                  <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded">
                    Buy Now
                  </button>
                  <button className="p-2 border rounded hover:bg-gray-100">
                    <BsHeart className="text-xl" />
                  </button>
                </div>
              </div>

              {/* Delivery Info */}
              <div className="space-y-4 text-sm border rounded">
                <div className="flex items-start gap-4 p-2">
                  <FaTruckFast className="text-4xl " />
                  <div>
                    <p className="font-medium">Free Delivery</p>
                    <p className="border-b text-xs">
                      Enter your postal code for Delivery Availability
                    </p>
                  </div>
                </div>

                {/* Divider Line */}
                <div className="border-t w-full"></div>

                <div className="flex items-start gap-4 p-2">
                  <FaRotate className="text-3xl" />
                  <div>
                    <p className="font-medium">Return Delivery</p>
                    <p className="text-xs">
                      Free 30 Days Delivery Returns. Details
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <div className="max-w-7xl mx-auto px-4 py-10">
        <p className="text-red-500 font-semibold flex items-center mb-2">
          <span className="w-3 h-6 bg-red-500 mr-2 rounded-sm"></span> Related Item
        </p>
        {/* Title */}
        <h2 className="text-3xl font-bold my-6">Flash Sales</h2>

        {/* Product */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 cursor-pointer">
          {products.map((product) => (
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
                  <span className="text-red-600 font-bold">
                    ${product.price}
                  </span>
                  <span className="text-gray-400 line-through ml-2">
                    ${product.oldPrice}
                  </span>
                </div>

                {/* Ratings */}
                <div className="flex items-center text-sm mb-4">
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
      </div>
    </>
  );
};

export default ProductDetail;

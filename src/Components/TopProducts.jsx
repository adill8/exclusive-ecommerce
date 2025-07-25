import React, { useEffect, useRef, useState } from "react";
import { products } from "../Data/ProductsData";
import { FaStar } from "react-icons/fa";
import { PiEyeLight, PiHeartLight, PiStarFill } from "react-icons/pi";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi2";

const TopProducts = () => {
  const sliderRef = useRef(null);

  const [flashSale] = useState(() => {
    const stored = localStorage.getItem("flashSaleProducts");
    return stored ? JSON.parse(stored) : products;
  });

  useEffect(() => {
    const existing = localStorage.getItem("flashSaleProducts");
    if (!existing || JSON.parse(existing).length === 0) {
      localStorage.setItem("flashSaleProducts", JSON.stringify(products));
    }
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 my-4">
      {/* Tag */}
      <p className="text-red-500 font-semibold flex items-center pt-8 pb-4">
        <span className="w-3 h-6 bg-red-500 mr-2 rounded-sm"></span> Today's
      </p>

      {/* Title + Timer + Arrows */}
      <div className="flex items-center justify-between flex-wrap gap-10 mb-8">
        <div className="flex items-center flex-wrap gap-10 space-x-20">
          {/* Title */}
          <h2 className="text-2xl sm:text-3xl font-bold">Flash Sales</h2>

          {/* Timer */}
          <div className="flex gap-4 sm:gap-6 items-center mb-4">
            {["Days", "Hours", "Minutes", "Seconds"].map((label, i) => (
              <div key={label} className="text-center">
                <div className="text-sm text-black">{label}</div>
                <div className="text-3xl sm:text-4xl font-bold text-black">
                  0{i + 3}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex gap-6">
          {/* Left Arrow */}
          <button
            onClick={() => sliderRef.current?.slickPrev()}
            className="w-10 h-10 bg-gray-100 hover:bg-gray-300 cursor-pointer rounded-full flex items-center justify-center transition"
          >
            <HiOutlineArrowLeft className="text-xl" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => sliderRef.current?.slickNext()}
            className="w-10 h-10 bg-gray-100 cursor-pointer hover:bg-gray-300 rounded-full flex items-center justify-center transition"
          >
            <HiOutlineArrowRight className="text-xl" />
          </button>
        </div>
      </div>

      {/* Product Slider */}
      <div className="overflow-hidden -mr-4">
        <Slider ref={sliderRef} {...settings} className="pr-4">
          {flashSale.map((product) => (
            <div
              key={product.id}
              className="relative group overflow-hidden min-h-[350px] w-full px-1"
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
              <div className="bg-gray-100 p-4 mb-4 h-60 sm:h-72 md:h-80 flex flex-col items-center justify-center rounded relative">
                <Link to={`/productDetail/${product.id}`}>
                  <img
                    src={product.image}
                    className="max-h-full object-contain"
                  />
                </Link>

                {/* Hover Button */}
                <button className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-black text-white w-full py-2 rounded-b-lg opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
                  Add to Cart
                </button>
              </div>

              {/* Text */}
              <div className="bg-white py-5 px-3">
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
        </Slider>
      </div>

      {/* View All Button */}
      <div className="flex justify-center">
        <button className="bg-red-600 text-white text-lg font-bold py-4 px-10 mt-10 rounded shadow hover:bg-red-700 transition">
          View All Products
        </button>
      </div>

      {/* Divider */}
      <hr className="border-t border-gray-300 my-6" />
    </div>
  );
};

export default TopProducts;

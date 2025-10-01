import React, { useEffect, useRef, useState } from "react";
import { FaStar } from "react-icons/fa";
import { PiEyeLight, PiHeartLight, PiStarFill } from "react-icons/pi";
import { ourProducts } from "../Data/OurProductsData";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi2";
import Slider from "react-slick";
import axios from "axios";

const OurProducts = () => {
  const sliderRef = useRef(null);
  const [ourProducts, setOurProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/ourProducts")
    .then((res) => setOurProducts(res.data))
    .catch((err) => console.error("Error fetching products:" , err))
  },[]);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    rows: 2,
    slidesPerRow: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesPerRow: 1,
          rows: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesPerRow: 1,
          rows: 2,
        },
      },

      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesPerRow: 1,
          rows: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <p className="text-red-500 font-semibold flex items-center px-2 my-4">
        <span className="w-3 h-6 bg-red-500 mr-2 rounded-sm"></span> Our
        Products
      </p>

      {/* Header: Title + Timer + Arrows */}
      <div className="flex items-center justify-between px-2 flex-wrap gap-4 mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold">Flash Sales</h2>

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

      {/* Product */}

      <div className="slider-container">
        <Slider ref={sliderRef} {...settings}>
          {ourProducts.map((product) => (
            <div
              key={product.id}
              className="relative group overflow-hidden min-h-[350px] w-full px-2"
            >
              {/* Tag */}
              {product.tag && (
                <span className="absolute top-2 left-4 bg-green-400 text-white text-sm px-2 py-1 rounded z-10">
                  {product.tag}
                </span>
              )}

              {/* Icons */}
              <div className="absolute top-2 right-4 flex flex-col gap-2 z-20">
                <PiHeartLight className="bg-white text-black p-2 rounded-full shadow text-4xl" />
                <PiEyeLight className="bg-white text-black p-2 rounded-full shadow text-4xl" />
              </div>

              {/* Product Image */}
              <div className="bg-gray-100 p-4 mb-4 h-64 flex items-center justify-center rounded relative group">
                <Link
                  to={`/productDetail/${product.id}`}
                  className="w-full h-full flex items-center justify-center"
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="max-h-full max-w-full object-contain"
                  />
                </Link>

                {/* Hover Button */}
                <button className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-black text-white w-full py-2 rounded-b-lg opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
                  Add to Cart
                </button>
              </div>

              {/* Product Info */}
              <div className="bg-white py-4">
                <h3 className="text-md font-semibold mb-2">{product.title}</h3>
                <div className="mb-2 flex items-center">
                  <span className="text-red-600 font-bold pr-2">
                    ${product.price}
                  </span>
                  <PiStarFill className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-gray-300" />
                  <span className="text-gray-600 ml-2 text-xs">
                    ({product.reviews})
                  </span>
                </div>
                {/* Color Circles */}
                {product.colors?.length > 0 && (
                  <div className="flex gap-2 mt-2 ml-1">
                    <span className="w-4 h-4 rounded-full bg-black flex items-center justify-center">
                      <span className="w-3 h-3 rounded-full bg-white flex items-center justify-center">
                        <span
                          className="w-2.5 h-2.5 rounded-full"
                          style={{ backgroundColor: product.colors[0] }}
                        ></span>
                      </span>
                    </span>
                    <span
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: "#db4444" }}
                    ></span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Button */}
      <div className="flex justify-center">
        <button className="bg-[#db4444] text-white text-lg font-bold py-6 px-16 my-10 rounded shadow-lg hover:bg-red-700 transition cursor-pointer">
          View All Products
        </button>
      </div>

      {/* Line */}
      <hr className="border-t border-gray-300 my-4" />
    </div>
  );
};

export default OurProducts;

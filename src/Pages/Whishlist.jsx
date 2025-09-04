import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { FiDelete } from "react-icons/fi";
import { PiEyeLight, PiHeartLight, PiStarFill, PiTrash } from "react-icons/pi";
import { Link } from "react-router-dom";

const wishlistData = [
  {
    id: 6,
    title: "Gucci duffle bag",
    price: 960,
    oldPrice: 1160,
    discount: 35,
    image: "/images/Hand Bag.png",
    description:
      "Premium Gucci duffle bag with spacious interior and luxury design. Ideal for travel, gym, or stylish daily use.",
  },
  {
    id: 7,
    title: "RGB liqued CPU cooler",
    price: 1960,
    image: "/images/Speaker.png",
    description:
      "Efficient liquid CPU cooler with RGB lighting. Maintains optimal temperatures for high-performance systems with quiet fan operation.",
  },
  {
    id: 14,
    title: "GP11 Shooter USB GamePad",
    price: 660,
    image: "/images/Game Pad.png",
    description:
      "USB gamepad with vibration feedback and precision buttons. Ideal for shooter games, it provides ultimate control and smooth gameplay.",
  },
  {
    id: 16,
    title: "Qulited Stain Jacket",
    price: 660,
    image: "/images/Jacket.png",
    description:
      "Stylish quilted jacket with stain-resistant fabric. Comfortable, lightweight, and warm—perfect for winter outings and everyday urban wear.",
  },
];

const wishlistProductsData = [
  {
    id: 13,
    title: "ASUS FHD Gaming Leptop",
    price: 960,
    oldPrice: 1160,
    discount: 35,
    image: "/images/Leptop.png",
    rating: 4.8,
    reviews: 325,
    description:
      "Powerful gaming laptop with FHD display and fast processor. Offers seamless performance, vibrant graphics, and extended battery life.",
  },
  {
    id: 3,
    title: "IPS LCD Gaming Monitor",
    price: 1160,
    description:
      "Full HD IPS display with ultra-slim design. Offers smooth refresh rate, vibrant visuals, and minimal eye strain support.",
    image: "/images/LCD.png",
    rating: 4.8,
    reviews: 99,
  },
  {
    id: 1,
    title: "HAVIT HV-G92 Gamepad",
    price: 560,
    tag: "New",
    description:
      "High quality PS5 controller skin with air-channel adhesive for smooth installation and mess-free removal. Durable and pressure-sensitive grip.",
    image: "/images/Gaming Mouse.png",
    rating: 4.5,
    reviews: 88,
  },
  {
    id: 2,
    title: "AK-900 Wired Keyboard",
    price: 200,
    description:
      "Ergonomic wired keyboard with smooth key response and LED backlight. Built for long typing sessions and gaming efficiency.",
    image: "/images/Keyboard.png",
    rating: 4.7,
    reviews: 75,
  },
];

const Whishlist = () => {
  return (
    <>
      {/* Whishlist Products */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Title */}
        <div className="flex justify-between items-center pr-1 my-8">
          <h1 className="text-xl py-6">Wishlist (4)</h1>
          <button className="px-6 py-4 font-semibold border rounded hover:bg-red-700">
            Move All To Bag
          </button>
        </div>

        {/* Product */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 cursor-pointer">
          {wishlistData.map((product) => (
            <div
              key={product.id}
              className="relative group overflow-hidden min-h-[350px] w-full"
            >
              {/* Discount Badge */}
              {product.discount && (
                <span
                  className="absolute 
            top-2 left-2 bg-red-500 text-white text-sm px-2 py-1 rounded z-10"
                >
                  -{product.discount}%
                </span>
              )}

              {/* Icons */}
              <div className="absolute top-2 right-2 gap-2 z-20">
                <PiTrash className="bg-white text-black p-2 rounded-full shadow text-4xl" />
              </div>

              {/* Image */}
              <div className="bg-gray-100 p-4 h-80 flex items-center justify-center rounded relative">
                <Link to={`/productDetail/${product.id}`}>
                  <img
                    src={product.image}
                    alt={product.title}
                    className="max-h-full object-contain"
                  />
                </Link>

          
                <button className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-black text-white w-full py-2 rounded-b-lg hover:bg-gray-900 transition duration-300 ease-in-out cursor-pointer">
                  Add to Cart
                </button>
              </div>

              {/* Text */}
              <div className="bg-white py-4">
                <h3 className="text-md font-semibold mb-2">{product.title}</h3>
                <div className="mb-2">
                  <span className="text-red-400 font-bold">
                    ${product.price}
                  </span>
                  {product.oldPrice && (
                    <span className="text-gray-400 line-through ml-2">
                      ${product.oldPrice}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recomended Products */}
      <div className="max-w-7xl mx-auto px-4 py-8 my-8">
        <div className="flex justify-between items-center pr-1 py-8">
          {/* Title */}
          <p className=" font-semibold flex items-center">
            <span className="w-3 h-6 bg-red-500 mr-2 rounded-sm"></span> Just
            For You
          </p>
          <button className="px-10 py-3 font-semibold border rounded hover:bg-red-700">
            See All
          </button>
        </div>

        {/* Product */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 cursor-pointer">
          {wishlistProductsData.map((product) => (
            <div
              key={product.id}
              className="relative group overflow-hidden min-h-[350px] w-full"
            >
              {/* Discount Badge */}
              {product.discount && (
                <span
                  className="absolute 
            top-2 left-2 bg-red-500 text-white text-sm px-2 py-1 rounded z-10"
                >
                  -{product.discount}%
                </span>
              )}
              {/* Tag */}
              {product.tag && (
                <span className="absolute top-2 left-4 bg-green-400 text-white text-sm px-2 py-1 rounded z-10">
                  {product.tag}
                </span>
              )}

              {/* Icons */}
              <div className="absolute top-2 right-2 gap-2 z-20">
                <PiTrash className="bg-white text-black p-2 rounded-full shadow text-4xl" />
              </div>

              {/* Image */}
              <div className="bg-gray-100 p-7 h-80 flex items-center justify-center rounded relative">
                <Link to={`/productDetail/${product.id}`}>
                  <img
                    src={product.image}
                    alt={product.title}
                    className="max-h-full object-contain"
                  />
                </Link>

                
                <button className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-black text-white w-full py-2 rounded-b-lg hover:bg-gray-900 transition duration-300 ease-in-out cursor-pointer">
                  Add to Cart
                </button>
              </div>

              {/* Text */}
              <div className="bg-white py-4">
                <h3 className="text-md font-semibold mb-2">{product.title}</h3>

                <div className="mb-2 flex items-center">
                  <span className="text-red-400 font-bold pr-2">
                    ${product.price}
                  </span>
                  {product.oldPrice && (
                    <span className="text-gray-400 line-through ml-2">
                      ${product.oldPrice}
                    </span>
                  )}
                </div>

                {/* Rating & Review */}
                <div className="flex items-center">
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

export default Whishlist;

import React from "react";
import {
  HiOutlineArrowNarrowRight,
  HiOutlineChevronRight,
} from "react-icons/hi";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Example = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    cssEase: "ease-in-out",
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  const slides = [
    {
      title: "iPhone 14 Series",
      image: "/images/iphone.jpg",
    },
    {
      title: "iPhone 13 Series",
      image: "/images/iphone.jpg",
    },
    {
      title: "iPhone 12 Series",
      image: "/images/iphone.jpg",
    },
  ];

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

        {/* Slider Section */}
        <div className="w-full bg-black rounded p-6 mt-8 overflow-hidden">
          <Slider {...settings}>
            {slides.map((item, i) => (
              <div
                key={i}
                className="flex flex-col lg:flex-row items-center justify-between text-white gap-6"
              >
                {/* Text */}
                <div className="text-center lg:text-left space-y-4 max-w-xs p-8">
                  <div className="flex items-center gap-2 justify-center lg:justify-start">
                    <img
                      src="/images/apple-icon.png"
                      alt="Apple Icon"
                      className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                    />
                    <span className="text-lg sm:text-xl font-medium">
                      {item.title}
                    </span>
                  </div>

                  <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                    Up to 10% <br className="hidden sm:block" /> off Voucher
                  </h2>

                  <button className="group flex items-center gap-2 text-md text-white focus:outline-none justify-center lg:justify-start">
                    <span className="border-b border-white group-hover:text-red-500">
                      Shop Now
                    </span>
                    <HiOutlineArrowNarrowRight className="text-2xl group-hover:text-red-500" />
                  </button>
                </div>

                {/* Image */}
                  <img
                    src={item.image}
                    alt="iPhone"
                    className="w-60 sm:w-72 md:w-80 lg:w-[380px] xl:w-[440px] 2xl:w-[500px] h-auto object-contain max-h-[320px]"
                  />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Example;


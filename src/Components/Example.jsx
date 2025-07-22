import React from "react";
import {
  HiOutlineArrowNarrowRight,
  HiOutlineChevronRight,
} from "react-icons/hi";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BannerWithSidebar = () => {
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
        <div className="hidden md:flex flex-col w-[200px] lg:w-[300px] xl:w-[350px] mt-8">
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

        {/* Slider */}
<div className="w-full bg-black rounded p-4 sm:p-6 md:p-8 mt-8 overflow-hidden">
  <Slider {...settings}>
    {slides.map((item, i) => (
      <div key={i} className="text-white">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Text Area */}
          <div className="text-center md:text-left space-y-3 max-w-xl p-2 md:p-4">
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <img
                src="/images/apple-icon.png"
                alt="Apple Icon"
                className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
              />
              <span className="text-lg sm:text-xl font-medium">
                {item.title}
              </span>
            </div>

            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold leading-tight">
              <span className="block mb-2">Up to 10%</span>
              <span className="block">off Voucher</span>
            </h2>

            <button className="group flex items-center gap-2 text-sm sm:text-base text-white focus:outline-none justify-center md:justify-start">
              <span className="border-b border-white group-hover:text-red-500">
                Shop Now
              </span>
              <HiOutlineArrowNarrowRight className="text-xl group-hover:text-red-500" />
            </button>
          </div>

          {/* Image */}
          <div className="p-2">
            <img
              src={item.image}
              alt="Slide"
              className="w-[220px] sm:w-[300px] md:w-[340px] lg:w-[400px] h-auto object-contain"
            />
          </div>
        </div>
      </div>
    ))}
  </Slider>
</div>

      </div>
    </div>
  );
};

export default BannerWithSidebar;

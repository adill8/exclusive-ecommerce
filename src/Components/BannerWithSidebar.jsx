import React from "react";
import {
  HiOutlineArrowNarrowRight,
  HiOutlineChevronRight,
} from "react-icons/hi";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../sliderDots.css";
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
        <div className="hidden md:flex flex-col w-[250px] lg:w-[360px] xl:w-[430px] mt-8">
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
        <div className="w-full bg-black p-6 sm:p-8 md:p-10 mt-8 overflow-hidden">
          <Slider {...settings}>
            {slides.map((item, i) => (
              <div key={i} className="text-white gap-4">
                <div className="flex flex-col lg:flex-row justify-between">
                  {/* Text */}
                  <div className="text-center lg:text-left space-y-4 my-4 p-4 max-w-xl">
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

                    <h2 className="text-2xl md:text-5xl font-bold py-4">
                      <span className="block mb-2">Up to 10%</span>
                      <span className="block">off Voucher</span>
                    </h2>

                    <button className="group flex items-center gap-2 text-md text-white focus:outline-none justify-center lg:justify-start">
                      <span className="border-b border-white group-hover:text-red-500">
                        Shop Now
                      </span>
                      <HiOutlineArrowNarrowRight className="text-2xl group-hover:text-red-500" />
                    </button>
                  </div>

                  {/* Image */}
                  <div className="mt-4 lg:mt-0">
                    <img
                      src={item.image}
                      className="w-[280px] sm:w-[340px] md:w-[360px] lg:w-[350px] xl:w-[430px] 2xl:w-[500px] h-auto object-contain"
                      alt="Slide"
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

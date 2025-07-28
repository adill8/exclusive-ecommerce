import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const Banner = () => {
  return (
    <div className="bg-[#0D0D0D] text-white m-14 px-4 py-6 md:py-8 overflow-hidden">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Text Section */}
        <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
          <p className="text-green-500 font-medium text-sm tracking-wide">Categories</p>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-snug">
            Enhance Your <br className="hidden sm:block" /> Music Experience
          </h1>

          {/* Countdown */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            {[
              { label: "Hours", value: "23" },
              { label: "Days", value: "05" },
              { label: "Minutes", value: "59" },
              { label: "Seconds", value: "35" },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-white text-black w-16 h-16 flex flex-col items-center justify-center rounded-full shadow-md"
              >
                <span className="text-lg font-bold">{item.value}</span>
                <span className="text-[11px]">{item.label}</span>
              </div>
            ))}
          </div>

          {/* Button */}
          <button className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-2.5 px-6 text-sm rounded-md transition mx-auto md:mx-0">
            Buy Now!
            <HiOutlineArrowNarrowRight className="text-lg font-bold" />
          </button>
        </div>

        {/* Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/images/LoudSpeaker.png"
            alt="Speaker"
            className="object-cover w-full -scale-x-100"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;

import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const Banner = () => {
  return (
    <div className="text-white py-10 px-4 overflow-hidden">
      <div className="max-w-4xl mx-auto h-auto md:h-[370px] flex flex-col md:flex-row items-center justify-evenly bg-black rounded py-4 px-16">

        {/*  Text Section */}
        <div className="w-full md:w-1/2 space-y-4 text-center md:text-left">
          <p className="text-green-500 font-semibold text-sm">Categories</p>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-snug">
            Enhance Your <br className="hidden sm:block" /> Music Experience
          </h1>

          {/* Countdown */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 py-3">
            {[
              { label: "Hours", value: "23" },
              { label: "Days", value: "05" },
              { label: "Minutes", value: "59" },
              { label: "Seconds", value: "35" },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-white text-black w-14 h-14 flex flex-col items-center justify-center rounded-full shadow-md"
              >
                <span className="text-base font-bold">{item.value}</span>
                <span className="text-[10px]">{item.label}</span>
              </div>
            ))}
          </div>

          {/* Button */}
          <button className="flex items-center gap-2 mx-auto md:mx-0 bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-6 text-sm rounded-md transition">
            Buy Now!
            <HiOutlineArrowNarrowRight className="text-lg" />
          </button>
        </div>

        {/* img*/}
        <div className="hidden md:flex w-full md:w-1/2 justify-center">
          <img
            src="/images/LoudSpeaker.png"
            alt="Speaker"
            className="object-contain w-full max-w-sm -scale-x-100"
          />
        </div>

      </div>
    </div>
  );
};

export default Banner;

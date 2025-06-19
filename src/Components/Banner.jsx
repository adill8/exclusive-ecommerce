import React from "react";

const Banner = () => {
  return (
    <div className="text-white py-10 px-3 overflow-hidden">
      <div className="max-w-5xl bg-black mx-auto flex flex-col md:flex-row items-center justify-between gap-4 rounded">
        
        {/* Left Section */}
        <div className="pl-12 py-10">
          <p className="text-green-500 font-semibold mb-3">Categories</p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug mb-5">
            Enhance Your <br /> Music Experience
          </h1>

                   {/* Countdown */}
          <div className="flex flex-wrap gap-4 mb-6 py-6">
            <div className="bg-white text-black w-16 h-16 flex flex-col items-center justify-center rounded-full shadow-md">
              <span className="text-lg font-bold">23</span>
              <span className="text-xs">Hours</span>
            </div>
            <div className="bg-white text-black w-16 h-16 flex flex-col items-center justify-center rounded-full shadow-md">
              <span className="text-lg font-bold">05</span>
              <span className="text-xs">Days</span>
            </div>
            <div className="bg-white text-black w-16 h-16 flex flex-col items-center justify-center rounded-full shadow-md">
              <span className="text-lg font-bold">59</span>
              <span className="text-xs">Minutes</span>
            </div>
            <div className="bg-white text-black w-16 h-16 flex flex-col items-center justify-center rounded-full shadow-md">
              <span className="text-lg font-bold">35</span>
              <span className="text-xs">Seconds</span>
            </div>
          </div>

          {/* Button */}
          <button className="bg-green-500 hover:bg-green-600 text-white font-medium py-4 px-12 rounded-md transition">
            Buy Now!
          </button>
        </div>

        {/* Right Section */}
        <div className="flex-1 p-4">
          <img
            src="/images/LoudSpeaker.png"
            alt="Speaker"
            className="max-w-md mx-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;

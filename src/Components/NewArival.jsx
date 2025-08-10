import React from "react";

const NewArival = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <p className="text-red-500 font-semibold flex items-center px-5 mb-2">
        <span className="w-3 h-6 bg-red-500 mr-2 rounded-sm"></span> Featured
      </p>
      {/* Title */}
      <h2 className="text-3xl font-bold my-6 px-5">New Arrival</h2>
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Section */}
        <div className="bg-[#0D0D0D] rounded overflow-hidden flex items-end justify-start relative">
          <img
            src="/images/Playstation.png"
            alt="PlayStation 5"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-10 left-6 text-white w-60">
            <h1 className="text-3xl font-semibold py-4">PlayStation 5</h1>
            <p className="text-sm text-gray-200 py-2">
              Black and White version of the PS5 coming out on sale.
            </p>
            <button className="pt-2 border-b font-medium border-gray-200">
              Shop Now
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col gap-6">
          {/* Top */}
          <div className="bg-[#0D0D0D] text-white rounded overflow-hidden relative px-6 flex flex-col justify-end min-h-[230px] md:min-h-[320px]">
            <img
              src="/images/girl.jpg"
              alt="Women's Collection"
              className="absolute w-full h-76 object-contain -scale-x-100"
            />
            <div className="relative z-10 w-62 py-6">
              <h3 className="text-2xl font-semibold py-2">
                Women’s Collections
              </h3>
              <p className="text-md text-gray-200 py-2">
                Featured woman collections that give you another vibe.
              </p>
              <button className="pt-2 border-b font-medium border-gray-200">
                Shop Now
              </button>
            </div>
          </div>

          {/* Bottom */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#0D0D0D] rounded overflow-hidden relative">
              <img
                src="/images/Wirless Speaker.png"
                alt="Alexa"
                className="w-full h-full object-contain"
              />

              <div className="absolute bottom-4 left-4 text-white w-60 pb-4">
                <h1 className="text-2xl font-semibold">Speakers</h1>
                <p className="text-md text-gray-200">
                  Amazon wireless speakers
                </p>
                <button className="pt-2 border-b font-medium border-gray-200">
                  Shop Now
                </button>
              </div>
            </div>

            <div className="bg-[#0D0D0D] rounded overflow-hidden relative">
              <img
                src="/images/Perfume.png"
                alt="Gucci Perfume"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 text-white w-60 mb-4">
                <h1 className="text-2xl font-semibold py-1">Perfume</h1>
                <p className="text-xs text-gray-200">GUCCI INTENSE OUD EDP</p>
                <button className="pt-2 border-b font-medium border-gray-200">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArival;

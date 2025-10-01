import React from "react";

const CategoryBrowser = () => {
  return (
    <div className="px-6 py-8 max-w-7xl mx-auto">
      <p className="text-red-500 font-semibold flex items-center mb-2">
        <span className="w-3 h-6 bg-red-500 mr-2 rounded-sm"></span> Categories
      </p>
      <h2 className="text-3xl font-bold my-6">Browse By Category</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {/* Phones */}
        <div className="flex flex-col items-center justify-center h-32 cursor-pointer border rounded-md text-black hover:text-white hover:bg-[#db4444] transition">
          <img
            src="/images/cellphone.png"
            alt="Phones"
            className="w-16 h-16 mb-2 object-contain"
          />
          <span className="text-sm font-medium">Phones</span>
        </div>

        {/* Computers */}
        <div className="flex flex-col items-center justify-center h-32 cursor-pointer border rounded-md text-black hover:text-white hover:bg-[#db4444] transition">
          <img
            src="/images/computer.png"
            alt="computer"
            className="w-16 h-16 object-contain"
          />
          <span className="text-sm font-medium">Computers</span>
        </div>

        {/* SmartWatch */}
        <div className="flex flex-col items-center justify-center h-32 cursor-pointer border rounded-md text-black hover:text-white hover:bg-[#db4444] transition">
          <img
            src="/images/watch.png"
            alt="watch"
            className="w-16 h-16 object-contain"
          />
          <span className="text-sm font-medium">SmartWatch</span>
        </div>

        {/* Camera */}
        <div className="flex flex-col items-center justify-center h-32 cursor-pointer border rounded-md text-black hover:text-white hover:bg-[#db4444] transition">
          <img
            src="/images/camera.png"
            alt="camera"
            className="w-16 h-16 object-contain"
          />
          <span className="text-sm font-medium">Camera</span>
        </div>

        {/* HeadPhones */}
        <div className="flex flex-col items-center justify-center h-32 cursor-pointer border rounded-md text-black hover:text-white hover:bg-[#db4444] transition">
          <img
            src="/images/headphone.png"
            alt="headphone"
            className="w-16 h-16 object-contain"
          />
          <span className="text-sm font-medium">HeadPhones</span>
        </div>

        {/* Gaming */}
        <div className="flex flex-col items-center justify-center h-32 cursor-pointer border rounded-md text-black hover:text-white hover:bg-[#db4444] transition">
          <img
            src="/images/gamepad.png"
            alt="headphone"
            className="w-16 h-16 object-contain"
          />
          <span className="text-sm font-medium">Gaming</span>
        </div>
      </div>
      {/* Line */}
      <hr className="border-t border-gray-300 my-18" />
    </div>
  );
};

export default CategoryBrowser;

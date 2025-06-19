import React from "react";
import { PiCameraLight, PiDesktopLight, PiDeviceMobileLight, PiGameControllerLight, PiHeadphonesLight, PiWatchLight } from "react-icons/pi";

const CategoryBrowser = () => {
  return (
    <div className="px-6 py-8 max-w-7xl mx-auto">
      <p className="text-red-500 font-semibold flex items-center mb-2">
        <span className="w-3 h-6 bg-red-500 mr-2 rounded-sm"></span> Categories
      </p>
      <h2 className="text-3xl font-bold my-6">Browse By Category</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {/* Phones */}
        <div className="flex flex-col items-center justify-center h-32 border rounded-md text-black hover:text-white hover:bg-red-500 transition">
          <PiDeviceMobileLight className=" text-6xl mb-2" />
          <span className="text-sm font-medium">Phones</span>
        </div>

        {/* Computers */}
        <div className="flex flex-col items-center justify-center h-32 border rounded-md text-black hover:text-white hover:bg-red-500 transition">
          <PiDesktopLight className="text-6xl mb-2" />
          <span className="text-sm font-medium">Computers</span>
        </div>

        {/* SmartWatch */}
        <div className="flex flex-col items-center justify-center h-32 border rounded-md text-black hover:text-white hover:bg-red-500 transition">
          <PiWatchLight className="text-6xl mb-2" />
          <span className="text-sm font-medium">SmartWatch</span>
        </div>

        {/* Camera (active style) */}
        <div className="flex flex-col items-center justify-center h-32 border rounded-md bg-red-500 text-white transition">
          <PiCameraLight className="text-6xl mb-2" />
          <span className="text-sm font-medium">Camera</span>
        </div>

        {/* HeadPhones */}
        <div className="flex flex-col items-center justify-center h-32 border rounded-md text-black hover:text-white hover:bg-red-500 transition">
          <PiHeadphonesLight className="text-6xl mb-2" />
          <span className="text-sm font-medium">HeadPhones</span>
        </div>

        {/* Gaming */}
        <div className="flex flex-col items-center justify-center h-32 border rounded-md text-black hover:text-white hover:bg-red-500 transition">
          <PiGameControllerLight className="text-6xl mb-2" />
          <span className="text-sm font-medium">Gaming</span>
        </div>
      </div>
       {/* Line */}
      <hr className="border-t border-gray-300 my-18" />
    </div>
  );
};

export default CategoryBrowser;

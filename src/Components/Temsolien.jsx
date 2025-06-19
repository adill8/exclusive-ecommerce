import React from "react";
import { FaTruck, FaHeadphones, FaShieldAlt } from "react-icons/fa";

const Temsolien = () => {
  return (
    <div className="py-12 px-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 text-center">
        
        {/* Feature 1 */}
        <div className="flex flex-col items-center gap-4">
          <div className="bg-gray-300 rounded-full p-4">
            <div className="bg-black text-white rounded-full p-4">
              <FaTruck className="text-2xl" />
            </div>
          </div>
          <h3 className="font-bold text-lg">FREE AND FAST DELIVERY</h3>
          <p className="text-sm text-gray-600">
            Free delivery for all orders over $140
          </p>
        </div>

        {/* Feature 2 */}
        <div className="flex flex-col items-center gap-4">
          <div className="bg-gray-300 rounded-full p-4">
            <div className="bg-black text-white rounded-full p-4">
              <FaHeadphones className="text-2xl" />
            </div>
          </div>
          <h3 className="font-bold text-lg">24/7 CUSTOMER SERVICE</h3>
          <p className="text-sm text-gray-600">
            Friendly 24/7 customer support
          </p>
        </div>

        {/* Feature 3 */}
        <div className="flex flex-col items-center gap-4">
          <div className="bg-gray-300 rounded-full p-4">
            <div className="bg-black text-white rounded-full p-4">
              <FaShieldAlt className="text-2xl" />
            </div>
          </div>
          <h3 className="font-bold text-lg">MONEY BACK GUARANTEE</h3>
          <p className="text-sm text-gray-600">
            We return money within 30 days
          </p>
        </div>
      </div>
    </div>
  );
};

export default Temsolien;

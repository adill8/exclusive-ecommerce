import React from "react";
import { BsHeadphones, BsShieldCheck, BsTruck } from "react-icons/bs";

const Temsolien = () => {
   const features = [
      { title: "Free and Fast Delivery", label: "Friendly 24/7 customer support", icon: <BsTruck/> },
      { title: "24/7 Customer Service", label: "Friendly 24/7 customer support", icon: <BsHeadphones/> },
      { title: "Money Back Guarantee", label: "We return money within 30 days", icon: <BsShieldCheck/> },
    ];
  return (
    <div className="grid md:grid-cols-3 gap-2 text-center p-10 mb-8">
  {features.map((f, i) => (
    <div key={i} className="flex flex-col items-center py-6">
      
      <div className="w-20 h-20 rounded-full bg-gray-300 flex items-center justify-center mb-4">
        <div className="w-14 h-14 rounded-full bg-black flex items-center justify-center">
          <div className="text-white text-2xl">{f.icon}</div>
        </div>
      </div>
      <h4 className="font-semibold text-2xl">{f.title}</h4>
        <p className="text-md text-gray-600">{f.label}
          </p>
    </div>
  ))}
</div>
  );
};

export default Temsolien;

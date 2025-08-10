import React from "react";
import { BsHeadset, BsShieldCheck, BsTruck } from "react-icons/bs";
import { HiOutlineArrowUp } from "react-icons/hi2";
import { TbTruckDelivery } from "react-icons/tb";

const Temsolien = () => {
  const features = [
    {
      title: "Free and Fast Delivery",
      label: "Friendly 24/7 customer support",
      icon: <TbTruckDelivery />,
    },
    {
      title: "24/7 Customer Service",
      label: "Friendly 24/7 customer support",
      icon: <BsHeadset />,
    },
    {
      title: "Money Back Guarantee",
      label: "We return money within 30 days",
      icon: <BsShieldCheck />,
    },
  ];
  return (
    <div className="p-10 mb-8">
      <div className="grid md:grid-cols-3 gap-2 text-center">
        {features.map((f, i) => (
          <div key={i} className="flex flex-col items-center py-6">
            <div className="w-20 h-20 rounded-full bg-gray-300 flex items-center justify-center mb-4">
              <div className="w-14 h-14 rounded-full bg-[#0D0D0D] flex items-center justify-center">
                <div className="text-white text-3xl">{f.icon}</div>
              </div>
            </div>
            <h4 className="font-semibold text-2xl">{f.title}</h4>
            <p className="text-md text-gray-600">{f.label}</p>
          </div>
        ))}
        </div>
        <div className="flex justify-end mt-10">
        <button className="bottom-6 right-6 w-10 h-10 bg-gray-100 hover:bg-gray-300 cursor-pointer rounded-full flex items-center justify-center shadow-md">
          <HiOutlineArrowUp className="text-xl stroke-[2]" />
        </button>
        </div>
      
    </div>
  );
};

export default Temsolien;

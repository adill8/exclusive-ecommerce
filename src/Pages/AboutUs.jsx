import React from "react";
import { BsBag, BsHeadphones, BsInstagram, BsLinkedin, BsShieldCheck, BsShop, BsTruck, BsTruckFlatbed, BsTwitter, } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { FaDollarSign, FaSackDollar, FaTruckMoving, } from "react-icons/fa6";

const AboutUs = () => {
 const stats = [
  { icon: <BsShop/>, label: "Sellers Active Our Site", value: "10.5k" },
  { icon: <FaDollarSign/>, label: "Monthly Product Sale", value: "33k", highlight: true },
  { icon: <BsBag />, label: "Customer Active Our Site", value: "45.5k" },
  { icon: <FaSackDollar/>, label: "Anual gross sale in our site", value: "25k" },
];

  const team = [
    { name: "Tom Cruise", role: "Founder & Director", image: "/images/tom-cruise.png" },
    { name: "Emma Watson", role: "Marketing Specialist", image: "/images/emma-watson.png" },
    { name: "Will Smith", role: "Project Manager", image: "/images/will-smith.png" },
  ];

  const features = [
    { title: "Free and Fast Delivery", label: "Friendly 24/7 customer support", icon: <BsTruck/> },
    { title: "24/7 Customer Service", label: "Friendly 24/7 customer support", icon: <BsHeadphones/> },
    { title: "Money Back Guarantee", label: "We return money within 30 days", icon: <BsShieldCheck/> },
  ];

  return (
    <div className="px-4 md:px-12 py-8 space-y-16">
      {/* Our Story */}
 <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900">
        Our Story
      </h1>
      <p className="mb-6 leading-relaxed text-base">
        Launched in 2015, Exclusive is South Asia’s premier online shopping marketplace with an active presence in Bangladesh. Supported by a wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sellers and 300 brands and serves 3 million customers across the region.
      </p>
      <p className="leading-relaxed text-base">
        Exclusive has more than 1 million products to offer, growing very fast. Exclusive offers a diverse assortment in categories ranging from consumer.
      </p>
    </div>
    {/* Image */}
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img className="object-cover object-center rounded" alt="our story image" src="/images/shopping-girls.jpg" />
    </div>
  </div>
</section>

      {/* Stats */}
       <section className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
  {stats.map((item, i) => (
    <div
      key={i}
      className={`p-4 border rounded-lg ${
        item.highlight ? "bg-red-500 text-white" : "bg-white text-black"
      }`}
    >
      <div className="flex justify-center mb-4">
        <div className="w-20 h-20 rounded-full bg-gray-300 flex items-center justify-center">
          <div
            className={`w-14 h-14 rounded-full flex items-center justify-center ${
              item.highlight ? "bg-white text-black" : "bg-black text-white"
            }`}
          >
            <div className="text-2xl">
              {item.icon}
            </div>
          </div>
        </div>
      </div>

      <h3 className="text-2xl font-bold">{item.value}</h3>
      <p className="mt-1">{item.label}</p>
    </div>
  ))}
</section>


      {/* Team Members */}
    <section>
  <h2 className="text-2xl font-bold my-8 text-center">Meet Our Team</h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-7 cursor-pointer">
    {team.map((member, i) => (
      <div
        key={i}
        className="relative group overflow-hidden min-h-[400px] w-full"
      >
        {/* Image */}
        <div className="bg-gray-100 p-4 h-60 flex items-center justify-center rounded">
          <img
            src={member.image}
            alt={member.name}
            className="h-full object-cover rounded"
          />
        </div>

        {/* Text Section */}
        <div className="bg-white py-4 text-center sm:text-start">
          <h3 className="text-md font-semibold mb-1">{member.name}</h3>
          <p className="text-sm text-gray-600">{member.role}</p>
        </div>

          {/* Social Icons */}
          <div className="flex justify-center sm:justify-start gap-4 text-xl text-gray-700">
            <FaTwitter className="hover:text-blue-500 transition" />
            <BsInstagram className="hover:text-pink-500 transition" />
            <BsLinkedin className="hover:text-blue-700 transition" />
          </div>
      </div>
    ))}
  </div>
</section>



      {/* Features */}
     <section className="grid md:grid-cols-3 gap-6 text-center pb-10">
  {features.map((f, i) => (
    <div key={i} className="flex flex-col items-center">
      
      <div className="w-20 h-20 rounded-full bg-gray-300 flex items-center justify-center mb-4">
        <div className="w-14 h-14 rounded-full bg-black flex items-center justify-center">
          <div className="text-white text-2xl">{f.icon}</div>
        </div>
      </div>
      <h4 className="font-semibold">{f.title}</h4>
        <p className="text-sm text-gray-600">{f.label}
          </p>
    </div>
  ))}
</section>

    </div>
  );
};

export default AboutUs;

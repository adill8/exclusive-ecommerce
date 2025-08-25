import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../about.css";
import { FiInstagram, FiTwitter } from "react-icons/fi";
import { LiaLinkedinIn } from "react-icons/lia";

const AboutUs = () => {
    const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 }
      }
    ]
  };

const stats = [
  { icon: "/images/shop.png", label: "Sellers Active Our Site", value: "10.5k" },
  { icon: "/images/dollar-sign.png", label: "Monthly Product Sale", value: "33k" },
  { icon: "/images/shopping-bag.png", label: "Customer Active Our Site", value: "45.5k" },
  { icon: "/images/sack.png", label: "Annual Gross Sale in Our Site", value: "25k" },
];

  const team = [
    { name: "Tom Cruise", role: "Founder & Director", image: "/images/tom-cruise.png" },
    { name: "Emma Watson", role: "Marketing Specialist", image: "/images/emma-watson.png" },
    { name: "Will Smith", role: "Project Manager", image: "/images/will-smith.png" },
  ];

  const features = [
    { icon: "/images/fast-truck.png", title: "Free and Fast Delivery", label: "Friendly 24/7 customer support"},
    { icon: "/images/headphones.png", title: "24/7 Customer Service", label: "Friendly 24/7 customer support" },
    { icon: "/images/shield.png", title: "Money Back Guarantee", label: "We return money within 30 days" },
  ];

  return (
    <div className="pl-4 py-8 space-y-16">
      {/* our story */}
      <section className="text-gray-600 body-font">
  <div className="flex flex-col md:flex-row w-full min-h-[600px]">
    
    {/* Text */}
    <div className="md:w-1/2 w-full flex flex-col justify-center px-6 md:px-14 py-8 bg-white">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900">
        Our Story
      </h1>
      <p className="mb-6 leading-relaxed text-base">
        Launched in 2015, Exclusive is South Asia’s premier online shopping marketplace with an active presence in Bangladesh. Supported by a wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sellers and 300 brands and serves 3 million customers across the region.
      </p>
      <p className="leading-relaxed text-base">
        Exclusive has more than 1 million products to offer, growing at a very fast. Exclusive offers a diverse assortment in categories ranging from consumer.
      </p>
    </div>

    {/* Image */}
    <div className="md:w-1/2 w-full">
      <img 
        src="/images/shopping-girls.jpg" 
        alt="our story image" 
        className="w-full h-full object-cover md:object-contain" 
      />
    </div>
  </div>
</section>

{/* Stats Section */}
<section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-center px-4 md:px-10 lg:mx-20 my-10">
  {stats.map((item, i) => (
    <div
      key={i}
      className="p-6 border rounded-xl hover:bg-[#DB4444] transition duration-300 bg-white text-black shadow-sm"
    >
      <div className="flex justify-center mb-4">
        
        <div className="w-20 h-20 rounded-full bg-gray-300 flex items-center justify-center">
          
          <div className="w-14 h-14 rounded-full bg-black flex items-center justify-center">
            <img
              src={item.icon}
              alt={item.label}
              className="w-8 h-8 object-contain invert brightness-0"
            />
          </div>
        </div>
      </div>

      <h3 className="text-xl md:text-2xl font-bold">{item.value}</h3>
      <p className="mt-1 text-sm md:text-base">{item.label}</p>
    </div>
  ))}
</section>


      {/* Team Members */}
 <section className="px-4 sm:px-6 lg:px-12 py-10">
  {/* Slider */}
      <Slider {...settings}>
        {team.map((member, i) => (
          <div key={i} className="px-3">
            <div className="group overflow-hidden rounded transition flex flex-col">
              {/* Image */}
              <div className="h-80 w-full bg-gray-100 flex items-center justify-center pt-6 mt-8 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Text */}
              <div className="bg-white py-6 px-4 text-left">
                <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                <p className="text-sm text-gray-600 mb-4">{member.role}</p>

                {/* Social Icons */}
                <div className="flex gap-4 text-xl">
                  <FiTwitter className="hover:text-blue-500 transition" />
                  <FiInstagram className="hover:text-pink-500 transition" />
                  <LiaLinkedinIn className="hover:text-blue-700 transition" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>

      {/* Features */}
    <section className="grid md:grid-cols-3 gap-6 text-center py-10">
  {features.map((f, i) => (
    <div key={i} className="flex flex-col items-center">
      
      
      <div className="w-20 h-20 rounded-full bg-gray-300 flex items-center justify-center mb-4">
        
        <div className="w-14 h-14 rounded-full bg-black flex items-center justify-center">
          
          <img 
            src={f.icon} 
            alt={f.title} 
            className="w-8 h-8 object-contain invert brightness-0" 
          />
        </div>
      </div>

      {/* Title + Label */}
      <h4 className="font-semibold">{f.title}</h4>
      <p className="text-sm text-gray-600">{f.label}</p>
    </div>
  ))}
</section>


    </div>
  );
};

export default AboutUs;

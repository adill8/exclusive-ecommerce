import React from "react";
import { BiEnvelope, BiPhone } from "react-icons/bi";

const Contact = () => {
  return (
    <section className="py-16 px-4 md:px-10 bg-white text-gray-800">
      <div className="max-w-7xl mx-auto">
        <p className="text-sm text-gray-500 mb-8 px-8">Home / Contact</p>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 px-6">
         {/* Contact Info */}
 <div className="md:col-span-4 space-y-6 p-6 bg-white rounded-lg shadow-lg border border-gray-200">
  {/* Call Us */}
  <div className="flex items-start gap-4">
    <div className="w-10 h-10 flex items-center justify-center bg-red-600 text-white rounded-full text-xl font-bold">
     <BiPhone/>
    </div>
    <div>
      <h3 className="font-semibold text-lg">Call To Us</h3>
      <p className="text-sm">We are available 24/7, 7 days a week.</p>
      <p className="text-sm font-medium mt-2">Phone: +8801611112222</p>
    </div>
  </div>

  <hr />

  {/* Write */}
  <div className="flex items-start gap-4">
    <div className="w-12 h-10 flex items-center justify-center bg-red-600 text-white rounded-full text-xl font-bold">
      <BiEnvelope/>
    </div>
    <div>
      <h3 className="font-semibold text-lg">Write To Us</h3>
      <p className="text-sm">Fill out our form and we will contact you within 24 hours.</p>
      <p className="text-sm font-medium mt-2">Email: customer@exclusive.com</p>
      <p className="text-sm font-medium">Email: support@exclusive.com</p>
    </div>
  </div>
</div>

{/* Form */}
 <form className="md:col-span-8 space-y-4 p-6 bg-white rounded-lg shadow-lg">
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
    <input
      type="text"
      placeholder="Your Name *"
      className=" bg-gray-100 p-3 rounded w-full"
      required
    />
    <input
      type="email"
      placeholder="Your Email *"
      className="bg-gray-100 p-3 rounded w-full"
      required
    />
    <input
      type="tel"
      placeholder="Your Phone *"
      className="bg-gray-100 p-3 rounded w-full"
      required
    />
  </div>
  <textarea
    rows="5"
    placeholder="Your Message"
    className="bg-gray-100 p-3 rounded w-full"
  ></textarea>
<div className="flex justify-end">
  <button
    type="submit"
    className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded"
  >
    Send Message
  </button>
</div>

</form>

        </div>
      </div>
    </section>
  );
};

export default Contact;

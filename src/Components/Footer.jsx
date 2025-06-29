import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaArrowAltCircleRight } from "react-icons/fa";
import { PiArrowArcRightLight, PiArrowBendRightDownDuotone, PiArrowElbowRightLight, PiArrowFatRightBold, PiArrowLineRightThin, PiArrowRight, PiFlowArrowLight } from "react-icons/pi";

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {/* Column 1 */}
        <div className="px-3">
          <h3 className="text-lg font-semibold mb-2">Exclusive</h3>
          <p className="my-2">Subscribe</p>
          <p className="text-sm my-4">Get 10% off your first order</p>
          <div className="flex items-center border rounded overflow-hidden w-40">
            <input
              type="email"
              placeholder="Enter your email"
              className="text-white p-2 text-sm w-full outline-none"
            />
            <button className="bg-black text-white px-3 py-1">
                <PiArrowRight/>
            </button>
          </div>
        </div>

        {/* Column 2 */}
        <div className="px-3">
          <h3 className="text-lg font-semibold mb-2">Support</h3>
          <p className="text-sm">111 Bijoy sarani, Dhaka,</p>
          <p className="text-sm">DH 1515, Bangladesh.</p>
          <p className="text-sm my-3">exclusive@gmail.com</p>
          <p className="text-sm">+88015-88888-9999</p>
        </div>

        {/* Column 3 */}
        <div className="px-3">
          <h3 className="text-lg font-semibold mb-2">Account</h3>
          <ul className="space-y-3 text-sm">
            <li>My Account</li>
            <li>Login / Register</li>
            <li>Cart</li>
            <li>Wishlist</li>
            <li>Shop</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div className="px-3">
          <h3 className="text-lg font-semibold mb-2">Quick Link</h3>
          <ul className="space-y-3 text-sm">
            <li>Privacy Policy</li>
            <li>Terms Of Use</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Column 5 */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Download App</h3>
          <p className="text-sm mb-2">Save $3 with App New User Only</p>
          <div className="flex gap-2 mb-4">
            <img
              src="/images/qrcode.jpg"
              alt="QR Code"
              className="w-24 h-22 bg-white p-1"
            />
            <div className="flex flex-col justify-between gap-2 h-20">
              <img src="/images/google-play.png" alt="Google Play" className="w-28 h-1/2 object-cover" />
              <img src="/images/app-store.png" alt="App Store" className="w-28 h-1/2 object-cover" />
            </div>
          </div>
          <div className="flex gap-8 text-lg">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaLinkedinIn />
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-400">
        © Copyright Rimel 2022. All rights reserved
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import { BiSolidCopyright } from "react-icons/bi";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi2";
import { LiaFacebookF, LiaLinkedinIn } from "react-icons/lia";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#0D0D0D] text-white px-6 py-10">
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
                className="text-gray-100 p-2 text-sm w-full outline-none"
              />
              <button className="bg-[#0D0D0D] px-3 py-1 flex items-center justify-center">
                <img
                  src="/images/arrow-head.png"
                  className="w-7 h-5 filter invert brightness-0"
                  alt="arrow"
                />
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
                <img
                  src="/images/google-play.png"
                  alt="Google Play"
                  className="w-28 h-1/2 object-cover"
                />
                <img
                  src="/images/app-store.png"
                  alt="App Store"
                  className="w-28 h-1/2 object-cover"
                />
              </div>
            </div>
            <div className="flex gap-8 text-lg">
              <LiaFacebookF />
              <FiTwitter />
              <FiInstagram />
              <LiaLinkedinIn />
            </div>
          </div>
        </div>
      </footer>
      {/* Bottom */}
      <div className="border-t py-6 text-sm bg-[#0D0D0D] text-gray-600 flex items-center justify-center gap-2">
        <BiSolidCopyright />
        <span>Copyright Rimel 2022. All rights reserved</span>
      </div>
    </>
  );
};

export default Footer;

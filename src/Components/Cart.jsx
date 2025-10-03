import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  // Cart products fetch 
  useEffect(() => {
    axios
      .get("http://localhost:5000/cart")
      .then((res) => setCartItems(res.data))
      .catch((err) => console.error("Error fetching cart:", err));
  }, []);

  return (
    <div className="p-4 md:p-8 max-w-6xl mx-auto my-7">
      <h2 className="text-lg font-semibold text-gray-700 mb-8">Home / Cart</h2>

      {/* Table Header */}
      <div className="hidden md:grid grid-cols-4 gap-2 font-semibold p-4 bg-white rounded shadow-md">
        <div>Product</div>
        <div>Price</div>
        <div>Quantity</div>
        <div>Subtotal</div>
      </div>

      {/* Cart Items */}
      {cartItems.map((item) => (
        <div
          key={item.id}
          className="grid md:grid-cols-4 grid-cols-1 gap-4 items-center p-4 bg-white rounded shadow-md mb-4"
        >
          <div className="flex items-center gap-2">
            <img
              src={item.image}
              alt={item.title}
              className="w-14 h-14 object-contain"
            />
            <span>{item.title}</span>
          </div>
          <div>${item.price}</div>
          <div>
            <span>{item.quantity}</span>
          </div>
          <div>${item.price * item.quantity}</div>
        </div>
      ))}

      {/* Buttons */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-6">
        <button className="border px-4 py-2">Return To Shop</button>
        <button className="border px-4 py-2">Update Cart</button>
      </div>

      {/* Coupon + Cart Total */}
      <div className="grid md:grid-cols-2 gap-6 my-10">
        {/* Coupon */}
        <div className="flex flex-col items-start md:flex-row gap-2 w-full">
          <input
            type="text"
            placeholder="Coupon Code"
            className="border px-3 py-3 rounded text-sm w-full md:w-60"
          />
          <button className="bg-red-500 text-white px-4 rounded text-sm h-[44px]">
            Apply Coupon
          </button>
        </div>

        {/* Cart Total */}
        <div className="border p-4 rounded">
          <h3 className="font-semibold text-lg mb-2">Cart Total</h3>
          <div className="flex justify-between border-b py-1">
            <span>Subtotal:</span>
            <span>${total}</span>
          </div>
          <div className="flex justify-between border-b py-1">
            <span>Shipping:</span>
            <span>Free</span>
          </div>
          <div className="flex justify-between font-bold py-2">
            <span>Total:</span>
            <span>${total}</span>
          </div>
          <Link
            to="/checkout"
            className="block text-center w-full mt-3 bg-red-500 text-white py-2 rounded"
          >
            Process to checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;

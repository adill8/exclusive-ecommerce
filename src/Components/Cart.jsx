import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { TrashIcon } from "@heroicons/react/24/outline";
import { BsTrash2 } from "react-icons/bs";
import { toast } from "react-toastify";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  // Cart products fetch 
  useEffect(() => {
    axios
      .get("http://localhost:5000/cart")
      .then((res) => setCartItems(res.data))
      .catch((err) => console.error("Error fetching cart:", err));
  }, []);

  // Delete Product
  const handleDelete = async(id) =>{
    try {
      await axios.delete(`http://localhost:5000/cart/${id}`);
    setCartItems(cartItems.filter(item => item.id !== id));
    toast.success("Product removed from cart")

    } catch (error) {
      console.error("Error delting item", error);
      
    }
  }

  // Increase Product
  const handleIncrease = async(id) => {
    const updateCart = cartItems.map((item) =>{
      if (item.id === id) {
        return{...item, quantity: item.quantity + 1};
        
      } else {
        return item;
        
      }
    });
    setCartItems(updateCart);

    const updateItem = updateCart.find((item) => item.id === id);
    await axios.patch(`http://localhost:5000/cart/${id}`, {
      quantity: updateItem.quantity,
    });
  }

  // Decrease Product
  const handleDecrease = async(id) => {
    const updateCart = cartItems.map((item) => {
      if (item.id === id && item.quantity > 1) {
        return {...item, quantity: item.quantity - 1}
      } else {
        return item;
      }
    });
    setCartItems(updateCart);

    const updateItem = updateCart.find((item) => item.id === id);
    await axios.patch(`http://localhost:5000/cart/${id}`, {
      quantity: updateItem.quantity,
    });
  }

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="p-4 md:p-8 max-w-6xl mx-auto my-7">
      <h2 className="text-lg font-semibold text-gray-700 mb-8">Home / Cart</h2>

      {/* Table Header */}
      <div className="hidden md:grid grid-cols-5 gap-2 font-semibold p-4 bg-white rounded shadow-md text-center">
        <div>Product</div>
        <div>Price</div>
        <div>Quantity</div>
        <div>Subtotal</div>
        <div>Action</div>
      </div>

      {/* Cart Items */}
      {cartItems.map((item) => (
        <div
          key={item.id}
          className="grid md:grid-cols-5 grid-cols-1 gap-4 items-center text-center p-4 bg-white rounded shadow-md mb-4"
        >
          <div className="flex items-center justify-center gap-2">
            <img
              src={item.image}
              alt={item.title}
              className="w-14 h-14 object-contain"
            />
            <span>{item.title}</span>
          </div>
          <div>${item.price}</div>
          {/* Quantity Buttons */}
          <div className="flex justify-center items-center gap-2">
            <button
            onClick={() => handleDecrease(item.id)}
             className="w-6 h-6 flex items-center justify-center text-lg font-bold hover:bg-gray-200 cursor-pointer">-</button>
             <span className="px-3 py-1 rounded border text-lg">{item.quantity}</span>
            <button
            onClick={() => handleIncrease(item.id)}
             className="w-6 h-6 flex items-center justify-center text-lg font-bold hover:bg-gray-200 cursor-pointer">+</button>
           
          </div>
          <div>${item.price * item.quantity}</div>

          {/* Delte Button */}
          <div>
            <button
            onClick={()=> handleDelete(item.id)}
            className="text-red-500 hover:text-red-700 cursor-pointer">
            <BsTrash2 size ={20}/>
          </button>
          </div>
          
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

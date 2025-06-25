import React from "react";

const Checkout = () => {
  return (
    <div className="max-w-6xl mx-auto p-4 my-10 md:p-8">
      <div className="grid md:grid-cols-2 gap-4">
        {/* Billing Details */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Billing Details</h2>
          <form className="space-y-6">
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-gray-500 "
            >
              First Name
            </label>
            <input
              type="text"
              placeholder=""
              className="  w-[370px] bg-gray-100 px-4 py-1 rounded"
            />
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-gray-500 "
            >
              Company Name
            </label>
            <input
              type="text"
              placeholder=""
              className="w-[370px] bg-gray-100 px-4 py-1 rounded"
            />
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-gray-500 "
            >
              Street Address*
            </label>
            <input
              type="text"
              placeholder=""
              className="w-[370px] bg-gray-100 px-4 py-1 rounded"
            />
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-gray-500 "
            >
              Apartment, floor, etc. (optional)
            </label>
            <input
              type="text"
              placeholder=""
              className="w-[370px] bg-gray-100 px-4 py-1 rounded"
            />
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-gray-500 "
            >
              Town/City*
            </label>
            <input
              type="text"
              placeholder=""
              className="w-[370px] bg-gray-100 px-4 py-1 rounded"
            />
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-gray-500 "
            >
              Phone Number*
            </label>
            <input
              type="text"
              placeholder=""
              className="w-[370px] bg-gray-100 px-4 py-1 rounded"
            />
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-gray-500 "
            >
              Email Address
            </label>
            <input
              type="email"
              placeholder=""
              className="w-[370px] bg-gray-100 px-4 py-1 rounded"
            />

            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" className="accent-red-500" />
              Save this information for faster check-out next time
            </label>
          </form>
        </div>

        {/* Order Summary */}
        <div className="p-4 space-y-4 my-10">
          {/* Product Items */}
          <div className="flex items-center gap-2">
            <img
              src="/images/Game Pad.png"
              alt="Gamepad"
              className="w-12 h-12 object-contain"
            />
            <span className="flex-1">LCD Monitor</span>
            <span>$650</span>
          </div>
          <div className="flex items-center gap-2">
            <img
              src="/images/LCD.png"
              alt="LCD"
              className="w-12 h-12 object-contain"
            />
            <span className="flex-1">Hi Gamepad</span>
            <span>$1100</span>
          </div>

          {/* Totals */}
          <div className="pt-4 space-y-2 text-sm">
            <div className=" flex justify-between border-b py-2 border-gray-400">
              <span>Subtotal:</span>
              <span>$1750</span>
            </div>
            <div className=" border-b py-2 border-gray-400 flex justify-between">
              <span>Shipping:</span>
              <span>Free</span>
            </div>
            <div className="flex justify-between font-semibold text-base">
              <span>Total:</span>
              <span>$1750</span>
            </div>
          </div>

          {/* Payment Options */}
        <div className="space-y-2">
  
  <label className="flex items-center justify-between gap-2">
    <div className="flex items-center gap-2">
      <input type="radio" name="payment" />
      <span>Bank</span>
    </div>
    <div className="flex gap-1">
      <img src="/images/visa.png" alt="Visa" className="w-8 object-contain" />
      <img src="/images/master-card.png" alt="MasterCard" className="w-8 object-contain" />
      <img src="/images/bKash.png" alt="bKash" className="w-16 object-contain" />
    </div>
  </label>

  {/* Cash on Delivery */}
  <label className="flex items-center gap-2">
    <input type="radio" name="payment" defaultChecked />
    Cash on delivery
  </label>
</div>


          {/* Coupon */}
          <div className="flex flex-col md:flex-row gap-2 w-full">
            <input
              type="text"
              placeholder="Coupon Code"
              className="border px-3 py-2 rounded text-sm w-full md:w-1/2"
            />
            <button className="bg-red-500 text-white px-4 py-2 rounded text-sm w-full md:w-auto h-[40px]">
              Apply Coupon
            </button>
          </div>

          {/* Place Order Button */}
          <button className="bg-red-500 text-white px-8 py-2 mt-2 rounded text-sm">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

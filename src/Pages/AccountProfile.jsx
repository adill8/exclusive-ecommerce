import React from "react";

const AccountProfile = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-sm text-gray-500 mb-4">
          <span className="text-gray-400">Home / </span>
          <span className="text-black font-medium">My Account</span>
          <span className="float-right text-red-500">Welcome! Md Rimel</span>
        </div>

        <div className="flex flex-col md:flex-row gap-6 my-8">
          {/* Sidebar */}
          <div className="w-full md:w-1/4">
            <div className="space-y-6 text-sm">
              <div>
                <h3 className="text-gray-800 font-semibold mb-2">
                  Manage My Account
                </h3>
                <ul className="space-y-1 text-gray-600">
                  <li className="text-red-500 font-medium">My Profile</li>
                  <li>Address Book</li>
                  <li>My Payment Options</li>
                </ul>
              </div>
              <div>
                <h3 className="text-gray-800 font-semibold mb-2">My Orders</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>My Returns</li>
                  <li>My Cancellations</li>
                </ul>
              </div>
              <div>
                <h3 className="text-gray-800 font-semibold mb-2">
                  My Wishlist
                </h3>
              </div>
            </div>
          </div>

          {/* Profile Form */}
          <div className="w-full md:w-3/4 bg-white p-8 rounded-lg shadow-lg border border-gray-100">
    <h2 className="text-red-500 font-semibold mb-4 mx-6 text-lg">
              Edit Your Profile
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-6">
              <div>
                <label
                  for="fname"
                  class="block mb-2 text-sm font-medium text-gray-500 "
                >
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="First Name"
                  className="bg-gray-100 p-3 w-90"
                />
              </div>
              <div>
                <label
                  for="lname"
                  class="block mb-2 text-sm font-medium text-gray-500 "
                >
                  Last Name
                </label>
                  <input
                type="text"
                placeholder="Last Name"
                className="bg-gray-100 p-3 w-90"
              />
              </div>
              <div>
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-gray-500 "
            >
              Email
            </label>
             <input
                type="email"
                placeholder="Email"
                className="bg-gray-100 p-3 w-90"
              />
              </div>
            
             <div>
                 <label
              for="address"
              class="block mb-2 text-sm font-medium text-gray-500 "
            >
              Adress
            </label>
             <input
                type="text"
                placeholder="Address"
                className="p-3 bg-gray-100 w-90"
              />
             </div>
             
            </div>

            <h3 className="mt-6 mb-3 mx-6 font-semibold text-gray-600">
              Password Changes
            </h3>
            <div className="space-y-5 mx-6">
              <input
                type="password"
                placeholder="Current Password"
                className="w-full bg-gray-100 p-3 rounded"
              />
              <input
                type="password"
                placeholder="New Password"
                className="w-full bg-gray-100 p-3 rounded"
              />
              <input
                type="password"
                placeholder="Confirm New Password"
                className="w-full bg-gray-100 p-3 rounded"
              />
            </div>

            <div className="mt-6 flex justify-end gap-4">
              <button className="text-gray-600">Cancel</button>
              <button className="bg-red-500 text-white px-4 py-2 rounded">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountProfile;

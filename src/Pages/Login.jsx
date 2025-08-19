import React from "react";

const Login = () => {
  return (
     <div className="md:flex px-6 py-16 gap-8">
      {/* Left Image */}
 <div className="md:w-1/2 w-full">
  <img
    src="/images/Login-Pic.jpg"
    alt="Login"
    className="w-full sm:h-80 md:h-90 lg:h-[700px] object-cover rounded"
  />
</div>


      {/* Form */}
      <div className="flex flex-1 items-center justify-center">
        <div className="w-full max-w-md">
          <h2 className="text-4xl font-semibold mb-4">Log in to Exclusive</h2>
          <p className="text-sm mb-6">Enter your details below</p>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Email or Phone Number"
              className="border-b border-gray-400 py-2 focus:outline-none"
            />
            <input
              type="password"
              placeholder="Password"
              className="border-b border-gray-400 py-2 focus:outline-none"
            />
            <div className="flex items-center justify-between mt-4">
              <button
                type="submit"
                className="bg-red-500 text-white px-12 py-4 rounded hover:bg-red-600 transition"
              >
                Log In
              </button>
              <button
                type="button"
                className="text-red-500 text-sm hover:underline"
              >
                Forgot Password?
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

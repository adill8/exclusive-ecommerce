import React from "react";

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row px-6 py-10 md:py-0">
      {/* Image */}
      <div className="hidden md:flex flex-1 p-6">
        <img
          src="/images/Login-Pic.jpg"
          alt="Login"
          className=" w-full h-full"
        />
      </div>

      {/* Form */}
      <div className="flex flex-1 items-center justify-center">
        <div className="w-full max-w-md">
          <h2 className="text-2xl font-semibold mb-2">Log in to Exclusive</h2>
          <p className="text-gray-500 text-sm mb-6">Enter your details below</p>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Email or Phone Number"
              className="border-b py-2 focus:outline-none"
            />
            <input
              type="password"
              placeholder="Password"
              className="border-b py-2 focus:outline-none"
            />
            <div className="flex items-center justify-between mt-4">
              <button
                type="submit"
                className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition"
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

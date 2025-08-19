import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
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


      {/* Right Form */}
      <div className="md:w-1/2 flex justify-center mt-10 md:mt-32">
        <div className="w-full max-w-md">
          <h2 className="text-4xl font-semibold mb-2">Create an account</h2>
          <p className="text-sm mb-6">Enter your details below</p>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Name"
              className="border-b border-gray-400 py-2 focus:outline-none"
            />
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
            <div className="flex flex-col items-center justify-between mt-4">
              <button
                type="submit"
                className="bg-red-500 text-white w-full py-3 rounded hover:bg-red-600 transition"
              >
                Create Account
              </button>
              <button
                type="button"
                className="text-sm border my-3 w-full py-3 rounded border-gray-300 flex items-center justify-center gap-2"
              >
                <img src="/images/google.png" />
                <span className="text-sm">Sign up with Google</span>
              </button>
              <span className="text-sm text-slate-700 mt-2 flex items-center gap-2">
                <span>Already have an account?</span>
                <Link
                  to="/login"
                  className="text-slate-600 font-bold border-b py-1"
                >
                  Login
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

import React from "react";
import { SiGoogle } from "react-icons/si";

const SignUp = () => {
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
          <h2 className="text-2xl font-semibold mb-2">Create an account</h2>
          <p className="text-gray-500 text-sm mb-6">Enter your details below</p>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Name"
              className="border-b py-2 focus:outline-none"
            />
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
                <SiGoogle className="text-lg" />
                <span className="text-sm">Sign up with Google</span>
              </button>

              <span className="text-sm text-slate-700 mt-2">
                Already have an account?{" "}
                <a
                  href="/login"
                  className="text-slate-600 font-bold border-b py-1"
                >
                  Login
                </a>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

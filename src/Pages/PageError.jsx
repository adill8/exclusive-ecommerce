import React from 'react';
import { Link } from 'react-router-dom';

const PageError = () => {
  return (
    <div className="text-center min-h-screen flex flex-col justify-center items-center px-4">
      <h1 className="text-6xl md:text-8xl font-bold mb-4">404 Not Found</h1>
      <p className="text-sm md:text-base text-gray-600 mb-6">
        Your visited page was not found. You may go back to the homepage.
      </p>
      <Link to="/">
        <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded shadow-md transition">
          Back to Home Page
        </button>
      </Link>
    </div>
  );
};

export default PageError;

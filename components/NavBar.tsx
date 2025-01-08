// components/Navbar.tsx
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex items-center space-x-4">
            <img src="/logo.png" alt="Logo" className="h-10 w-10" />
            <div>
              <h1 className="text-xl font-bold text-gray-900">Logo Name</h1>
              <div className="flex space-x-4 mt-2">
                <a href="#about" className="text-gray-900 hover:text-blue-600">
                  About Us
                </a>
                <a
                  href="#demographics"
                  className="text-gray-900 hover:text-blue-600"
                >
                  Demographics
                </a>
                <a href="#news" className="text-gray-900 hover:text-blue-600">
                  News and Updates
                </a>
              </div>
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex-1 flex justify-end">
            <div className="max-w-lg w-full lg:max-w-xs">
              <label htmlFor="search" className="sr-only">
                Search
              </label>
              <div className="relative">
                <input
                  id="search"
                  name="search"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Search"
                  type="search"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg
                    className="h-5 w-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 16l-4-4m0 0l4-4m-4 4h16"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

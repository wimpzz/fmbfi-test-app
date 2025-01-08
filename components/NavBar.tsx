import { useState } from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-800 text-white p-4 sticky top-0 z-10">
      <div className="max-w-8xl mx-auto flex justify-between items-center">
        {/* Logo (left-aligned) */}
        <div className="flex items-center">
          <img
            src="/images/logo.png" // Replace with your logo image
            alt="Logo"
            className="h-8 w-auto"
          />
          <span className="ml-2 text-xl font-bold">FRANCISO M BAUTISTA FOUNDATION INC.</span>
        </div>

        {/* Navbar Links (Desktop, Tablet, and Mobile) */}
        <div className="hidden md:flex space-x-4 ml-auto">
          <Link href="/about" className="hover:text-gray-400">
            About Us
          </Link>
          <Link href="/demographics" className="hover:text-gray-400">
            Demographics
          </Link>
          <Link href="/news" className="hover:text-gray-400">
            News and Updates
          </Link>
        </div>

        {/* Search Icon (Tablet and Desktop) */}
        <div className="hidden md:flex items-center space-x-2 ml-auto">
          <input
            type="text"
            placeholder="Search..."
            className="p-2 rounded-md text-gray-800"
          />
          <button className="text-white p-2 rounded-md">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M11 4a7 7 0 100 14 7 7 0 000-14zm0 0l7 7"
              />
            </svg>
          </button>
        </div>

        {/* Hamburger Menu for Mobile and Tablet (md and below) */}
        <button className="md:hidden text-white" onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile and Tablet Menu */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col items-center mt-4">
          <Link
            href="/about"
            className="py-2 px-4 text-white hover:bg-gray-700"
          >
            About Us
          </Link>
          <Link
            href="/demographics"
            className="py-2 px-4 text-white hover:bg-gray-700"
          >
            Demographics
          </Link>
          <Link href="/news" className="py-2 px-4 text-white hover:bg-gray-700">
            News and Updates
          </Link>

          {/* Search Input for Mobile and Tablet */}
          <div className="mt-4 flex items-center space-x-2">
            <input
              type="text"
              placeholder="Search..."
              className="p-2 rounded-md text-gray-800"
            />
            <button className="text-white p-2 rounded-md">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M11 4a7 7 0 100 14 7 7 0 000-14zm0 0l7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

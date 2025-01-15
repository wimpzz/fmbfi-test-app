import { useState } from "react";
import { FaSearch } from "react-icons/fa"; // Search Icon
import { AiOutlineClose } from "react-icons/ai"; // Close Icon
import { FiMenu } from "react-icons/fi"; // Hamburger Menu Icon
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const openSearchModal = () => {
    setIsSearchModalOpen(true);
  };

  const closeSearchModal = () => {
    setIsSearchModalOpen(false);
  };

  return (
    <nav className="bg-white text-d12f27 p-3 sticky top-0 z-50">
      <div className="max-w-8xl mx-auto flex justify-between items-center">
        {/* Logo (left-aligned) */}
        <div className="flex items-center">
          <img
            src="/images/logo.png"
            alt="Logo"
            className="h-10 w-10 md:h-12 md:w-12 lg:h-14 lg:w-14 rounded-full"
          />
          <span className="ml-3 text-md sm:text-xl lg:text-2xl font-bold">
            FRANCISCO M BAUTISTA FOUNDATION INC.
          </span>
        </div>

        {/* Navbar Links (Hidden on Small and Tablet, Visible on Large Screens) */}
        <div className="hidden xl:flex space-x-10 ml-auto text-lg items-center">
          <Link
            href="#about"
            className="hover:bg-[#d12f27] hover:text-white px-3 py-2 rounded-md"
          >
            About Us
          </Link>
          <Link
            href="#demographics"
            className="hover:bg-[#d12f27] hover:text-white px-3 py-2 rounded-md"
          >
            Demographics
          </Link>
          <Link
            href="#news"
            className="hover:bg-[#d12f27] hover:text-white px-3 py-2 rounded-md"
          >
            News and Updates
          </Link>
        </div>

        {/* Search Icon for Mobile, Tablet, and Laptop */}
        <div className="flex xl:hidden items-center space-x-3 ml-auto">
          <button
            onClick={openSearchModal}
            className={`p-2 rounded-md ${
              isSearchModalOpen ? "text-white bg-d12f27" : "text-d12f27"
            }`} // Change color when clicked
          >
            <FaSearch className="w-6 h-6" />
          </button>
        </div>

        {/* Search Bar always visible on Extra Large Screens */}
        <div className="hidden xl:flex items-center space-x-3 ml-auto">
          <input
            type="text"
            placeholder="Search..."
            className="p-2 rounded-md text-gray-800 text-lg"
          />
        </div>

        {/* Hamburger Menu for Mobile and Tablet */}
        <button className="xl:hidden text-d12f27" onClick={toggleMenu}>
          <FiMenu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile and Tablet Menu */}
      {isMenuOpen && (
        <div className="xl:hidden flex flex-col items-center mt-4">
          <Link
            href="#about"
            className="py-2 px-5 text-d12f27 hover:bg-[#d12f27] hover:text-white text-lg rounded-md"
          >
            About Us
          </Link>
          <Link
            href="#demographics"
            className="py-2 px-5 text-d12f27 hover:bg-[#d12f27] hover:text-white text-lg rounded-md"
          >
            Demographics
          </Link>
          <Link
            href="#news"
            className="py-2 px-5 text-d12f27 hover:bg-[#d12f27] hover:text-white text-lg rounded-md"
          >
            News and Updates
          </Link>
        </div>
      )}

      {/* Search Modal for Small, Tablet, and Laptop Screens */}
      {isSearchModalOpen && (
        <div className="absolute top-full left-0 w-full z-20">
          <div className="bg-white p-4 mx-auto w-full max-w-md">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="p-3 pl-4 pr-12 rounded-full text-gray-800 w-full text-lg"
              />
              <button
                onClick={closeSearchModal}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-d12f27"
              >
                <AiOutlineClose className="w-6 h-6" /> 
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

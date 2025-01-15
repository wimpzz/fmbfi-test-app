import { useState } from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
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
          <span className="ml-3 text-sm sm:text-xl lg:text-2xl font-bold">
            FRANCISCO M BAUTISTA FOUNDATION INC.
          </span>
        </div>

        {/* Navbar Links (Hidden on Small and Tablet, Visible on Large Screens) */}
        <div className="hidden xl:flex space-x-10 ml-auto text-lg items-center">
          <Link href="#about" className="hover:text-[#c56851] hover:underline">
            About Us
          </Link>
          <Link
            href="#demographics"
            className="hover:text-[#c56851] hover:underline"
          >
            Demographics
          </Link>
          <Link href="#news" className="hover:text-[#c56851] hover:underline">
            News and Updates
          </Link>
        </div>

        {/* Search Icon for Mobile, Tablet, and Laptop */}
        <div className="flex xl:hidden items-center space-x-3 ml-auto">
          <button
            onClick={openSearchModal}
            className="text-d12f27 p-2 rounded-md"
          >
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
        <div className="xl:hidden flex flex-col items-center mt-4">
          <Link
            href="#about"
            className="py-2 px-5 text-d12f27 hover:bg-[#c56851] hover:text-white text-lg"
          >
            About Us
          </Link>
          <Link
            href="#demographics"
            className="py-2 px-5 text-d12f27 hover:bg-[#c56851] hover:text-white text-lg"
          >
            Demographics
          </Link>
          <Link
            href="#news"
            className="py-2 px-5 text-d12f27 hover:bg-[#c56851] hover:text-white text-lg"
          >
            News and Updates
          </Link>
        </div>
      )}

      {/* Search Modal for Small, Tablet, and Laptop Screens */}
      {isSearchModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20">
          <div className="bg-[#e2b8a7] p-4 rounded-md shadow-lg w-3/4 max-w-md">
            <div className="flex justify-between items-center">
              <input
                type="text"
                placeholder="Search..."
                className="p-3 rounded-md text-gray-800 w-full text-lg"
              />
              <button
                onClick={closeSearchModal}
                className="text-d12f27 p-3 ml-2"
              >
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

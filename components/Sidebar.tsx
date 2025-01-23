import Link from "next/link";
import { useState } from "react";
import { FaFilePdf, FaBook, FaBars, FaTimes } from "react-icons/fa";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div>
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen w-64 bg-red-600 text-white transform ${
          isOpen ? "translate-x-0" : "-translate-x-64"
        } transition-transform duration-300 z-50`}
      >
        <div className="flex items-center justify-between p-4">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <button
            onClick={toggleSidebar}
            className="text-white text-lg focus:outline-none lg:hidden"
          >
            <FaTimes />
          </button>
        </div>
        <ul className="space-y-6 p-4">
          <li>
            <Link
              href="/grades"
              className="flex items-center space-x-3 hover:bg-red-500 rounded-md p-2"
            >
              <FaBook />
              <span>Input Grades</span>
            </Link>
          </li>
          <li>
            <Link
              href="/upload-pdf"
              className="flex items-center space-x-3 hover:bg-red-500 rounded-md p-2"
            >
              <FaFilePdf />
              <span>Input PDF</span>
            </Link>
          </li>
          <li>
            <Link
              href="/other-option"
              className="flex items-center space-x-3 hover:bg-red-500 rounded-md p-2"
            >
              <FaBars />
              <span>Other Option</span>
            </Link>
          </li>
        </ul>
      </div>

      {/* Hamburger Button */}
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 text-red-600 text-2xl lg:hidden z-50"
      >
        <FaBars />
      </button>

      {/* Desktop Sidebar (always visible on large screens) */}
      <div className="hidden lg:block fixed top-0 left-0 h-screen w-64 bg-red-600 text-white">
        <div className="p-4 text-2xl font-bold">Dashboard</div>
        <ul className="space-y-6 p-4">
          <li>
            <Link
              href="/grades"
              className="flex items-center space-x-3 hover:bg-red-500 rounded-md p-2"
            >
              <FaBook />
              <span>Input Grades</span>
            </Link>
          </li>
          <li>
            <Link
              href="/upload-pdf"
              className="flex items-center space-x-3 hover:bg-red-500 rounded-md p-2"
            >
              <FaFilePdf />
              <span>Input PDF</span>
            </Link>
          </li>
          <li>
            <Link
              href="/other-option"
              className="flex items-center space-x-3 hover:bg-red-500 rounded-md p-2"
            >
              <FaBars />
              <span>Other Option</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

"use client";

import { useState } from "react";
import {
  AiOutlineHome,
  AiOutlineBell,
  AiOutlineBarChart,
  AiOutlineHeart,
  AiOutlineWallet,
  AiOutlineLogout,
  AiOutlineSearch,
  AiOutlineClose,
  AiOutlineMoon,
  AiOutlineMenu,
} from "react-icons/ai";
import { signOut, useSession } from "next-auth/react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("Revenue");
  const { data: session } = useSession();

  return (
    <div className="relative flex">
      {/* Toggle Button */}
      <button
        className="fixed top-4 left-4 bg-[#d12f27] text-white p-2 rounded-md md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed h-screen bg-white shadow-lg transition-all duration-300 z-50 md:relative md:block flex flex-col 
        ${isOpen ? "w-64 left-0" : "w-16 left-0 md:w-16"}`}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 bg-[#d12f27] text-white p-2 rounded-full md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <AiOutlineClose size={24} />
        </button>

        {/* Profile Section */}
        <div className="flex flex-col items-center py-6 border-b border-gray-200">
          <img
            src="/profile.jpg"
            alt="Profile"
            className="w-14 h-14 rounded-full border-2 border-gray-300"
          />
          {isOpen && session && session.user && (
            <>
              <h2 className="text-lg font-semibold mt-2">{session.user.name}</h2>
              <p className="text-sm text-gray-500">{session.user.role}</p>
            </>
          )}
        </div>

        {/* Search Bar */}
        {isOpen && (
          <div className="px-4 mt-4">
            <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 shadow-sm">
              <AiOutlineSearch size={16} className="text-gray-500" />
              <input
                type="text"
                placeholder="Search..."
                className="ml-2 bg-transparent outline-none w-full"
              />
            </div>
          </div>
        )}

        {/* Menu Items */}
        <nav className="mt-6 px-4 flex flex-col gap-2">
          {[
            { name: "Dashboard", icon: <AiOutlineHome size={20} /> },
            { name: "Revenue", icon: <AiOutlineBarChart size={20} /> },
            { name: "Notifications", icon: <AiOutlineBell size={20} /> },
            { name: "Analytics", icon: <AiOutlineBarChart size={20} /> },
            { name: "Likes", icon: <AiOutlineHeart size={20} /> },
            { name: "Wallets", icon: <AiOutlineWallet size={20} /> },
          ].map((item) => (
            <div key={item.name} className="flex items-center">
              <button
                key={item.name}
                className={`flex items-center px-5 py-3 w-full text-left text-gray-700 rounded-lg transition-all
                  ${active === item.name ? "bg-[#d12f27] text-white shadow-lg" : "hover:bg-gray-100"}`}
                onClick={() => setActive(item.name)}
              >
                {item.icon}
                {isOpen && <span className="ml-4 font-medium">{item.name}</span>}
              </button>
              {!isOpen && <span className="absolute left-20 bg-gray-700 text-white px-2 py-1 rounded-md opacity-0 transition-opacity duration-300 group-hover:opacity-100">{item.name}</span>}
            </div>
          ))}
        </nav>

        {/* Footer */}
        <div className="absolute bottom-4 w-full px-4">
          <button
            onClick={() => signOut({ callbackUrl: "/" })}
            className="flex items-center w-full py-3 text-gray-700 hover:bg-gray-100 rounded-lg px-5"
          >
            <AiOutlineLogout size={20} />
            {isOpen && <span className="ml-4 font-medium">Logout</span>}
          </button>
          <div className="flex items-center justify-center mt-4 bg-gray-100 rounded-lg px-5 py-2 shadow-sm">
            <AiOutlineMoon size={20} className="text-gray-500" />
            {isOpen && <span className="ml-4 text-gray-700">Dark Mode</span>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

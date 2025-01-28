import { useState } from "react";
import {
  FaHome,
  FaTasks,
  FaBell,
  FaEnvelope,
  FaUsers,
  FaPlus,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { FiSearch } from "react-icons/fi";

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState("Dashboard");
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const menuItems = [
    { name: "Dashboard", icon: <FaHome size={20} />, count: null },
    { name: "Tasks", icon: <FaTasks size={20} />, count: 32 },
    { name: "Notifications", icon: <FaBell size={20} />, count: 4 },
    { name: "Messages", icon: <FaEnvelope size={20} />, count: null },
    { name: "Inbox", icon: <FaUsers size={20} />, count: 9 },
  ];

  const teams = [
    { name: "Peter Taylor", color: "bg-pink-500" },
    { name: "Luvleen Lawrence", color: "bg-purple-500" },
    { name: "Su Hua", color: "bg-green-500" },
  ];

  return (
    <div className="relative">
      {/* Mobile Toggle Button */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-blue-500 text-white rounded-full shadow-md"
        onClick={() => setSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed lg:static z-40 h-screen w-64 bg-white shadow-lg flex flex-col transform transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        {/* Profile Section */}
        <div className="p-6 text-center border-b border-gray-200">
          <div className="relative mx-auto w-16 h-16 rounded-full bg-gray-300">
            <span className="absolute right-0 bottom-0 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></span>
          </div>
          <h4 className="mt-4 text-lg font-semibold">Jackson D.</h4>
          <p className="text-sm text-gray-500">Manager</p>
        </div>

        {/* Search Bar */}
        <div className="p-4">
          <div className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-lg">
            <FiSearch className="text-gray-500" />
            <input
              type="text"
              placeholder="Search"
              className="flex-1 bg-transparent focus:outline-none text-sm text-gray-600"
            />
          </div>
        </div>

        {/* Menu */}
        <div className="flex-1 p-4">
          <ul className="space-y-4">
            {menuItems.map((item) => (
              <li
                key={item.name}
                onClick={() => setActiveItem(item.name)}
                className={`flex items-center gap-3 cursor-pointer p-3 rounded-lg ${
                  activeItem === item.name
                    ? "bg-blue-500 text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <div className="relative flex items-center justify-center w-8 h-8">
                  {item.icon}
                  {item.count && (
                    <span className="absolute -top-2 -right-2 w-5 h-5 text-xs bg-blue-600 text-white rounded-full flex items-center justify-center">
                      {item.count}
                    </span>
                  )}
                </div>
                <span className="flex-1 text-sm font-medium">{item.name}</span>
                {item.name === "Tasks" && activeItem === "Tasks" && (
                  <FaPlus size={16} />
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Teams Section */}
        <div className="px-4 pb-4">
          <div className="flex justify-between items-center mb-2">
            <h4 className="text-sm font-semibold text-gray-600">Teams</h4>
            <button className="text-xs text-orange-500">VIEW ALL</button>
          </div>
          <div className="space-y-3">
            {teams.map((team) => (
              <div key={team.name} className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-full ${team.color}`}></div>
                <p className="text-sm text-gray-600">{team.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Drag-and-Drop Upload */}
        <div className="mt-auto p-4">
          <div className="border-dashed border-2 border-gray-300 p-4 text-center rounded-lg text-sm text-gray-400">
            Drag-n-Drop to Upload
          </div>
        </div>
      </div>

      {/* Backdrop for Mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-30"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default Sidebar;

import { useState } from "react";

const LoginSection = () => {
  const [activeTab, setActiveTab] = useState<"scholar" | "admin">("scholar");

  return (
    <section
      id="login"
      className="relative flex justify-center items-center min-h-screen bg-cover bg-center"
    >
      {/* Background Image with opacity */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("/images/FMBFI.JPG")', // Local image path
          opacity: 0.5, // Set opacity to 50% for background image
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      {/* Overlay for background opacity */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Content Container */}
      <div className="bg-white p-6 sm:p-8 md:p-10 rounded-lg shadow-xl w-[90%] sm:w-[400px] relative z-10 mt-12 sm:mt-16 md:mt-20">
        {/* Logo Centered at the Top (Bottom Half Sticking to Top) */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mb-6">
          <img
            src="/images/logo.png" // Replace with your logo image path
            alt="Logo"
            className="w-24 h-auto" // Adjust size as needed
          />
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center space-x-4 sm:space-x-6 border-b pb-4 mb-6 pt-6 sm:pt-8 md:pt-10">
          <button
            aria-selected={activeTab === "scholar" ? "true" : "false"}
            className={`text-lg sm:text-xl font-extrabold ${
              activeTab === "scholar"
                ? "border-b-2 border-[#d12f27] text-[#d12f27]"
                : "text-gray-600"
            } hover:text-[#d12f27] focus:outline-none font-body`}
            onClick={() => setActiveTab("scholar")}
          >
            Scholar
          </button>
          <button
            aria-selected={activeTab === "admin" ? "true" : "false"}
            className={`text-lg sm:text-xl font-extrabold ${
              activeTab === "admin"
                ? "border-b-2 border-[#d12f27] text-[#d12f27]"
                : "text-gray-600"
            } hover:text-[#d12f27] focus:outline-none font-body`}
            onClick={() => setActiveTab("admin")}
          >
            Admin
          </button>
        </div>

        {/* Form for both tabs */}
        <div>
          <h2 className="text-2xl sm:text-3xl mb-4 sm:mb-6 font-semibold text-[#2a2a2a] font-body">
            {activeTab === "scholar" ? "Scholar Login" : "Admin Login"}
          </h2>

          <form>
            <div className="mb-4 sm:mb-5">
              <label
                htmlFor="email"
                className="block text-sm sm:text-base font-medium text-gray-600 font-body"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-3 sm:p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d12f27] focus:border-[#d12f27] font-body"
                required
                aria-describedby="emailHelp"
                placeholder="Enter your email"
              />
            </div>

            <div className="mb-4 sm:mb-5">
              <label
                htmlFor="password"
                className="block text-sm sm:text-base font-medium text-gray-600 font-body"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full p-3 sm:p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d12f27] focus:border-[#d12f27] font-body"
                required
                placeholder="Enter your password"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 sm:py-4 bg-[#d12f27] text-white rounded-lg shadow-lg hover:bg-[#e4532f] focus:outline-none transition duration-300 font-body"
            >
              {activeTab === "scholar" ? "Login as Scholar" : "Login as Admin"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LoginSection;

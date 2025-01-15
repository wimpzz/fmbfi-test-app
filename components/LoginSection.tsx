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
      <div className="absolute inset-0 bg-black opacity-40"></div>{" "}
      {/* Content Container */}
      <div className="bg-white p-10 rounded-lg shadow-xl w-[400px] relative z-10">
        {/* Tab Navigation */}
        <div className="flex justify-center space-x-6 border-b pb-4 mb-6">
          <button
            aria-selected={activeTab === "scholar" ? "true" : "false"}
            className={`text-xl font-semibold ${
              activeTab === "scholar"
                ? "border-b-2 border-[#d12f27] text-[#d12f27]"
                : "text-gray-600"
            } hover:text-[#d12f27] focus:outline-none`}
            onClick={() => setActiveTab("scholar")}
          >
            Scholar
          </button>
          <button
            aria-selected={activeTab === "admin" ? "true" : "false"}
            className={`text-xl font-semibold ${
              activeTab === "admin"
                ? "border-b-2 border-[#d12f27] text-[#d12f27]"
                : "text-gray-600"
            } hover:text-[#d12f27] focus:outline-none`}
            onClick={() => setActiveTab("admin")}
          >
            Admin
          </button>
        </div>

        {/* Form for both tabs */}
        <div>
          <h2 className="text-3xl mb-6 font-semibold text-[#2a2a2a]">
            {activeTab === "scholar" ? "Scholar Login" : "Admin Login"}
          </h2>

          <form>
            <div className="mb-5">
              <label
                htmlFor="email"
                className="block text-base font-medium text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d12f27] focus:border-[#d12f27]"
                required
                aria-describedby="emailHelp"
                placeholder="Enter your email"
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="password"
                className="block text-base font-medium text-gray-600"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d12f27] focus:border-[#d12f27]"
                required
                placeholder="Enter your password"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-[#d12f27] text-white rounded-lg shadow-lg hover:bg-[#e4532f] focus:outline-none transition duration-300"
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

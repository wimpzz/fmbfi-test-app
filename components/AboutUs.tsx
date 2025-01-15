import { useState } from "react";

const AboutUs = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center bg-white text-center py-16 px-6 sm:px-8 lg:px-16 xl:px-24"
    >
      {/* About Us Header */}
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white bg-[#d12f27] mb-8 px-8 sm:px-10 py-6 sm:py-8 rounded-lg shadow-lg">
        ABOUT US
      </h2>

      {/* Cards Container */}
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-8 px-6 sm:px-8 py-8 lg:px-12 xl:px-16">
        {/* Core Values Card */}
        <div className="bg-[#d12f27] text-white shadow-lg rounded-lg p-8 transform transition-all duration-300 ease-in-out hover:scale-105">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">
            Core Values
          </h3>
          <ul className="list-disc list-inside text-lg space-y-4">
            <li>To provide financial assistance to the grantees.</li>
            <li>To assist the grantees to finish their studies.</li>
            <li>To assist the FMBFI graduates find jobs.</li>
          </ul>
        </div>

        {/* Mission Card */}
        <div className="bg-[#d12f27] text-white shadow-lg rounded-lg p-8 transform transition-all duration-300 ease-in-out hover:scale-105">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">
            Mission
          </h3>
          <p className="text-lg text-white text-justify">
            To become a partner of the government in educating the Filipino
            people.
          </p>
        </div>

        {/* Vision Card */}
        <div className="bg-[#d12f27] text-white shadow-lg rounded-lg p-8 transform transition-all duration-300 ease-in-out hover:scale-105">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">
            Vision
          </h3>
          <p className="text-lg text-white text-justify">
            Conceived to develop a highly literate generation that can
            contribute to the growth of the Filipino people and that will
            promote Love of God and country.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

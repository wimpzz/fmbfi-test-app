import { useState } from "react";

const AboutUs = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center bg-white text-center py-16 px-6 sm:px-8 lg:px-16 xl:px-24 pt-12"
    >
      {/* About Us Header */}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-body font-bold text-white bg-[#d12f27] mb-8 px-8 sm:px-10 py-6 sm:py-8 rounded-lg shadow-lg">
        ABOUT US
      </h2>

      {/* Cards Container */}
      <div className="w-full max-w-full mx-auto grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-8 px-6 sm:px-8 py-8 lg:px-12 xl:px-16">
        {/* Core Values Card */}
        <div className="bg-[#d12f27] text-white shadow-lg rounded-lg p-8 transform transition-all duration-300 ease-in-out hover:scale-105">
          <div className="relative mb-6">
            <img
              src="/images/FMBFI.jpg" // Replace with actual image path
              alt="Core Values"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl sm:text-2xl font-body font-bold text-white mb-6">
              Core Values
            </h3>
          </div>
          <p className="text-sm sm:text-base text-white font-body text-center mb-2">
            To provide financial assistance to the grantees.
          </p>
          <p className="text-sm sm:text-base text-white font-body text-center mb-2">
            To assist the grantees to finish their studies.
          </p>
          <p className="text-sm sm:text-base text-white font-body text-center mb-2">
            To assist the FMBFI graduates find jobs.
          </p>
        </div>

        {/* Mission Card */}
        <div className="bg-[#d12f27] text-white shadow-lg rounded-lg p-8 transform transition-all duration-300 ease-in-out hover:scale-105">
          <div className="relative mb-6">
            <img
              src="/images/MISSION.jpg" // Replace with actual image path
              alt="Mission"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl sm:text-2xl font-body font-bold text-white mb-6">
              Mission
            </h3>
          </div>
          <p className="text-sm sm:text-base text-white font-body text-center">
            To become a partner of the government in educating the Filipino
            people.
          </p>
        </div>

        {/* Vision Card */}
        <div className="bg-[#d12f27] text-white shadow-lg rounded-lg p-8 transform transition-all duration-300 ease-in-out hover:scale-105">
          <div className="relative mb-6">
            <img
              src="/images/VISION.jpg" // Replace with actual image path
              alt="Vision"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl sm:text-2xl font-body font-bold text-white mb-6">
              Vision
            </h3>
          </div>
          <p className="text-sm sm:text-base text-white font-body text-center">
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

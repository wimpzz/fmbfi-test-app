import { useState } from "react";

const AboutUs = () => {
  return (
    <section
      id="about-us"
      className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center py-12 px-6 sm:px-8 lg:px-12"
    >
      {/* About Us Header */}
      <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-6 px-6 sm:px-8 py-4">
        ABOUT US
      </h2>

      {/* Cards Container */}
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-8 px-6 sm:px-8 py-6">
        {/* Core Values Card */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
            Core Values
          </h3>
          <ul className="list-disc list-inside text-lg text-gray-600 space-y-4">
            <li>To provide financial assistance to the grantees.</li>
            <li>To assist the grantees to finish their studies.</li>
            <li>To assist the FMBFI graduates find jobs.</li>
          </ul>
        </div>

        {/* Mission Card */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
            Mission
          </h3>
          <p className="text-lg text-gray-600 text-justify">
            To become a partner of the government in educating the Filipino
            people.
          </p>
        </div>

        {/* Vision Card */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
            Vision
          </h3>
          <p className="text-lg text-gray-600 text-justify">
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

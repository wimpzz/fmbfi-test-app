import React from "react";

const HeroSection = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-100 min-h-screen flex items-center justify-center text-center py-8 sm:py-16">
        <div className="flex flex-col lg:flex-row w-full max-w-screen-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Left Column: Image */}
          <div className="flex-1 mb-6 lg:mb-0 flex items-center justify-center">
            <div className="inline-block w-full">
              <img
                src="/images/FMBFI.JPG"
                alt="Hero Image"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Right Column: Text and Buttons */}
          <div className="flex-1 flex flex-col justify-center lg:text-left px-4 lg:px-8">
            <div className="flex-1">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-6 sm:mb-10">
                FRANCISCO M BAUTISTA FOUNDATION INC&nbsp;
                <span className="block sm:inline">(FMBFI)</span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl lg:text-3xl text-gray-700 mb-6 text-justify max-w-[80ch]">
                The Francisco M Bautista Foundation Incorporated was conceived
                to serve as the legacy of Francisco Manuel Bautista, who,
                despite only completing fourth grade, achieved great success in
                life and became the founder of the St Peter Group of Companies.
                Upon his death, his daughter, Sis Del Bautista-Vitangcol,
                endeavored to immortalize his name. This endeavor came to
                fruition through her consultation with Bro Ernie M Burdeos, the
                Presiding Elder of the St Peter Community, whose subsequent
                inspiration prompted the inception of a Scholarship Foundation
                in her father's name.
              </p>
            </div>
            <div className="mt-auto flex justify-center">
              {/* Buttons */}
              <div className="flex flex-col sm:flex-row justify-center sm:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                <a
                  href="#features"
                  className="bg-gray-100 text-red-900 py-2 px-6 sm:py-2 sm:px-8 lg:py-3 lg:px-10 rounded-full text-base sm:text-lg lg:text-xl w-full sm:w-[200px] lg:w-[250px] flex justify-center items-center border-4 border-red-900 hover:bg-red-900 hover:text-white transition-colors duration-300"
                >
                  APPLY NOW
                </a>
                <a
                  href="#login"
                  className="bg-red-900 text-white py-2 px-6 sm:py-2 sm:px-8 lg:py-3 lg:px-10 rounded-full text-base sm:text-lg lg:text-xl w-full sm:w-[200px] lg:w-[250px] flex justify-center items-center border-4 border-transparent hover:bg-white hover:text-red-900 hover:border-red-900 transition-colors duration-300"
                >
                  LOGIN
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;

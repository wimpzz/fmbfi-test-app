import React from "react";

const FeaturesSection = () => {
  return (
    <section
      id="features"
      className="min-h-screen flex items-center justify-center bg-gray-100 text-center py-12 px-4 sm:px-6 lg:px-12"
    >
      <div className="flex flex-col lg:flex-row w-full max-w-screen-xl mx-auto">
        {/* Left Side Text */}
        <div className="flex-1 flex flex-col justify-center text-center lg:text-left px-6 sm:px-8">
          <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            FMBFI THROUGH THE YEARS
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 text-justify">
            The FMBFI is registered with the Securities and Exchange Commission
            in 1996. Initially, its funding came from donations from the members
            and close friends of the St Peter Community, providing assistance to
            financially challenged but deserving students. Since its
            incorporation, the FMBFI has been involved in helping 653 students
            finish their studies. 469 among which have already graduated. Each
            year, the Qualifying Exam for FMBFI is held as a collaborative
            effort involving dedicated volunteers from the St Peter Community,
            the FMBFI Alumni, and its current scholars who serve as proctors,
            interviewers, technical support, and staff, embodying the spirit of
            giving back to the foundation.
          </p>
        </div>

        {/* Right Side Video */}
        <div className="flex-1 mb-6 lg:mb-0 flex items-center justify-center">
          <div className="inline-block w-full">
            <iframe
              className="w-full"
              src="https://www.youtube.com/embed/57bNcoTMmxk"
              title="FMBFI Through the Years"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ height: "450px" }}
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

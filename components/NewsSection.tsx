import React from "react";

const NewsSection = () => {
  return (
    <section
      id="news"
      className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center py-12 px-4 sm:px-6 lg:px-12 relative"
    >
      {/* Semicircle Background using CSS */}
      <div className="absolute top-0 left-0 w-full h-[calc(55vh)] bg-[#d12f27] rounded-b-full z-0"></div>

      {/* Header */}
      <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6 px-4 sm:px-8 relative z-10">
        LATEST NEWS & UPDATES
      </h2>

      {/* Subheading */}
      <p className="text-lg sm:text-xl text-white mb-6 px-4 sm:px-8 relative z-10">
        Stay updated with the latest news and announcements. Here you’ll find
        all the recent developments and important information about our
        services.
      </p>

      {/* Video */}
      <div className="w-full max-w-4xl mx-auto mb-8 relative z-10">
        <iframe
          className="w-full"
          src="https://www.youtube.com/embed/Nfm9dajjhY4"
          title="KWENTONG FMBFI ALUMNI"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ height: "450px" }}
        ></iframe>
      </div>
    </section>
  );
};

export default NewsSection;

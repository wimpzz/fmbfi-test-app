import React from "react";

const NewsSection = () => {
  return (
    <section
      id="news"
      className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center py-12 px-4 sm:px-6 lg:px-12"
    >
      {/* Header */}
      <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-6 px-4 sm:px-8">
        LATEST NEWS & UPDATES
      </h2>

      {/* Subheading */}
      <p className="text-lg sm:text-xl text-gray-600 mb-6 px-4 sm:px-8">
        Stay updated with the latest news and announcements. Here you’ll find
        all the recent developments and important information about our
        services.
      </p>

      {/* Video */}
      <div className="w-full max-w-4xl mx-auto mb-8">
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

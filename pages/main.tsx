import { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Footer from "@/components/Footer";
import LoginForm from "@/components/LoginForm";
import Navbar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";

const Home = () => {
  const router = useRouter();
  const [showScroll, setShowScroll] = useState(false);

  // Function to handle the scroll visibility
  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowScroll(true);
    } else {
      setShowScroll(false);
    }
  };

  // Scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Listen to scroll events
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="bg-gray-100 min-h-screen font-title">
      <div className="w-full">
        <Head>
          <title>Landing Page</title>
          <meta name="description" content="A simple landing page" />
        </Head>

        {/* Navbar */}
        <Navbar />

        {/* Hero Section */}
        <HeroSection />

        {/* Features Section Above News Updates */}
        <section
          id="features"
          className="min-h-screen flex items-center justify-center bg-gray-200 text-center py-16 px-4 sm:px-8 lg:px-16"
        >
          <div className="flex flex-col lg:flex-row w-full max-w-screen-4xl mx-auto">
            {/* Left Side Text */}
            <div className="flex-1 flex flex-col justify-center text-center lg:text-left px-6 sm:px-8">
              <h2 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6">
                FMBFI THROUGH THE YEARS
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 mb-8">
                Add a brief description about this section. This can be any
                content that introduces the video or other content in this new
                section.
              </p>
            </div>

            {/* Right Side Video */}
            <div className="flex-1 mb-6 lg:mb-0 flex items-center justify-center">
              <div className="inline-block w-full">
                <iframe
                  className="w-full"
                  src="https://www.youtube.com/embed/98uCSivvYk8"
                  title="FMBFI Featured Graduates"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ height: "500px" }}
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* News and Updates Section */}
        <section
          id="news"
          className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center py-16 px-4 sm:px-8 lg:px-16"
        >
          {/* Header */}
          <h2 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6 px-4 sm:px-8">
            LATEST NEWS & UPDATES
          </h2>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-gray-600 mb-8 px-4 sm:px-8">
            Stay updated with the latest news and announcements. Here you’ll
            find all the recent developments and important information about our
            services.
          </p>

          {/* Video */}
          <div className="w-full max-w-4xl mx-auto mb-8">
            <iframe
              className="w-full"
              src="https://www.youtube.com/embed/cQ5Irj5B3FQ"
              title="FMBFI Featured Graduates"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ height: "500px" }}
            ></iframe>
          </div>
        </section>

        {/* Mission Section */}
        <section
          id="mission"
          className="min-h-screen flex items-center justify-center bg-gray-50 text-center py-16"
        >
          <div className="w-full max-w-screen-xl mx-auto px-2 sm:px-4 lg:px-6">
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 sm:mb-10">
              MISSION & VISION
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-20 lg:grid-cols-3 gap-8">
              {/* Core Values */}
              <div className="bg-white p-4 sm:p-6 lg:p-8 px-6 sm:px-8 lg:px-10 rounded-lg shadow-lg mb-6 sm:mb-8 lg:mb-10 hover:shadow-xl hover:scale-105 transform transition duration-300">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-800 mb-4">
                  Core Values
                </h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2 lg:text-lg">
                  <li>To provide financial assistance to the grantees.</li>
                  <li>To assist the grantees to finish their studies.</li>
                  <li>To assist the FMBFI graduates find jobs.</li>
                </ul>
              </div>

              {/* Mission */}
              <div className="bg-white p-4 sm:p-6 lg:p-8 px-6 sm:px-8 lg:px-10 rounded-lg shadow-lg mb-6 sm:mb-8 lg:mb-10 hover:shadow-xl hover:scale-105 transform transition duration-300">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-800 mb-4">
                  Mission
                </h3>
                <p className="text-gray-600 lg:text-lg">
                  To become a partner of the government in educating the
                  Filipino people.
                </p>
              </div>

              {/* Vision */}
              <div className="bg-white p-4 sm:p-6 lg:p-8 px-6 sm:px-8 lg:px-10 rounded-lg shadow-lg mb-6 sm:mb-8 lg:mb-10 hover:shadow-xl hover:scale-105 transform transition duration-300">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-800 mb-4">
                  Vision
                </h3>
                <p className="text-gray-600 lg:text-lg">
                  Conceived to develop a highly literate generation that can
                  contribute to the growth of the Filipino people and that will
                  promote Love of God and country.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Login Section */}
        <section
          id="login"
          className="min-h-screen flex items-center justify-center bg-white py-16"
        >
          <div className="max-w-md mx-auto text-center px-4 sm:px-0">
            <h2 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6">
              Login Section
            </h2>
            <LoginForm />
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>

      {/* Back to Top Button */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 flex items-center bg-red-900 text-white p-4 rounded-full shadow-lg hover:bg-red-500 transition duration-300"
        >
          <span className="mr-2">Back to Top</span>
          <span>↑</span>
        </button>
      )}
    </main>
  );
};

export default Home;

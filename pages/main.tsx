import { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Footer from "@/components/Footer";
import LoginForm from "@/components/LoginForm";
import Navbar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import CountUp from "react-countup"; // Import the countup library

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

  // Reusable CountUp Component
  const CountUpCard = ({
    start,
    end,
    label,
  }: {
    start: number;
    end: number;
    label: string;
  }) => (
    <div className="flex flex-col items-center text-gray-800">
      <h3 className="text-3xl sm:text-5xl font-bold mb-2">
        <CountUp start={start} end={end} duration={3} />
      </h3>
      <p className="text-lg">{label}</p>
    </div>
  );

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

        {/* New Demographic Section */}
        <section
          id="demographics"
          className="min-h-screen flex items-center justify-center bg-gray-100 text-center py-12 px-4 sm:px-6 lg:px-12"
        >
          <div className="flex flex-col items-center">
            <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-6">
              OUR IMPACT
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-12">
              <CountUpCard start={0} end={57} label="CITIES" />
              <CountUpCard start={0} end={616} label="GRADUATES" />
              <CountUpCard start={0} end={20} label="BATCHES" />
              <CountUpCard start={0} end={198} label="CURRENT SCHOLARS" />
            </div>
          </div>
        </section>

        {/* Features Section Above News Updates */}
        <section
          id="features"
          className="min-h-screen flex items-center justify-center bg-gray-200 text-center py-12 px-4 sm:px-6 lg:px-12"
        >
          <div className="flex flex-col lg:flex-row w-full max-w-screen-xl mx-auto">
            {/* Left Side Text */}
            <div className="flex-1 flex flex-col justify-center text-center lg:text-left px-6 sm:px-8">
              <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                FMBFI THROUGH THE YEARS
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8">
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

        {/* News and Updates Section */}
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
            Stay updated with the latest news and announcements. Here you’ll
            find all the recent developments and important information about our
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

        {/* Login Section */}
        <section
          id="login"
          className="min-h-screen flex items-center justify-center bg-white py-12 px-4 sm:px-6 lg:px-12"
        >
          <div className="max-w-md mx-auto text-center px-4 sm:px-0">
            <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-6">
              LOGIN SECTION
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
          aria-label="Scroll to top"
        >
          <span className="mr-2">Back to Top</span>
          <span>↑</span>
        </button>
      )}
    </main>
  );
};

export default Home;

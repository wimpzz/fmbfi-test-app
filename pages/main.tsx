import { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Footer from "@/components/Footer";
import LoginForm from "@/components/LoginForm";
import Navbar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection2";
import DemographicsSection from "@/components/DemographicsSection2";
import FeaturesSection from "@/components/FeaturesSection"; // Import FeaturesSection
import NewsSection from "@/components/NewsSection"; // Import NewsSection
import AboutUs from "@/components/AboutUs";

const Home = () => {
  const router = useRouter();
  const [showScroll, setShowScroll] = useState(false);

  const handleScroll = () => {
    setShowScroll(window.scrollY > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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

        {/* Demographic Section */}
        <DemographicsSection />

        {/* About Us Section */}
        <AboutUs />

        {/* Features Section */}
        <FeaturesSection />

        {/* News Section */}
        <NewsSection />

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

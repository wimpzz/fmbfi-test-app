import { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { FaArrowUp } from "react-icons/fa";
import Footer from "@/components/Footer";
import LoginForm from "@/components/LoginForm";
import Navbar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection2";
import DemographicsSection from "@/components/DemographicsSection2";
import FeaturesSection from "@/components/FeaturesSection";
import NewsSection from "@/components/NewsSection";
import AboutUs from "@/components/AboutUs";
import LoginSection from "@/components/LoginSection";

const Home = () => {
  const router = useRouter();
  const [showScroll, setShowScroll] = useState(false);
  const [footerHeight, setFooterHeight] = useState(0);

  const handleScroll = () => {
    setShowScroll(window.scrollY > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const footer = document.querySelector("footer");
    setFooterHeight(footer ? footer.offsetHeight : 0);

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
        {/* <section
          id="login"
          className="min-h-screen flex items-center justify-center bg-white py-12 px-4 sm:px-6 lg:px-12"
        >
          <div className="max-w-md mx-auto text-center px-4 sm:px-0">
            <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-6">
              LOGIN SECTION
            </h2>
            <LoginForm />
          </div>
        </section> */}

        <LoginSection />

        {/* Footer */}
        <Footer />
      </div>

      {/* Back to Top Button */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed right-5 flex flex-col items-center justify-center bg-[#d12f27] text-white p-6 rounded-full shadow-lg hover:bg-[#b3271d] transition duration-300 z-50"
          aria-label="Scroll to top"
          style={{
            bottom: `calc(${footerHeight}px + 16px)`, // Adjusts the button position above the footer
          }}
        >
          <FaArrowUp className="text-md" />{" "}
          <span className="hidden sm:inline mt-2">Back to Top</span>{" "}
        </button>
      )}
    </main>
  );
};

export default Home;

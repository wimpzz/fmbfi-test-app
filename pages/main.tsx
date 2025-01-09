import Head from "next/head";
import { useRouter } from "next/router";
import Footer from "@/components/Footer";
import LoginForm from "@/components/LoginForm";
import Navbar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";

const Home = () => {
  const router = useRouter();

  const handleViewData = () => {
    router.push("/data");
  };

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
        {/* <section className="bg-gray-100 min-h-screen flex items-center justify-center text-center py-8 sm:py-16">
          <div className="flex flex-col lg:flex-row w-full max-w-screen-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex-1 mb-6 lg:mb-0 flex items-center justify-center">
              <div className="inline-block w-full">
                <img
                  src="/images/FMBFI.JPG"
                  alt="Hero Image"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
            <div className="flex-1 flex flex-col justify-center lg:text-left px-4 lg:px-8">
              <div className="flex-1">
                <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold text-gray-900 mb-6 sm:mb-10">
                  FRANCISCO M BAUTISTA FOUNDATION INC (FMBFI)
                </h1>
                <p className="text-base sm:text-lg md:text-xl lg:text-3xl text-gray-600 mb-6 text-justify max-w-[80ch]">
                  The Francisco M Bautista Foundation Incorporated was conceived
                  to serve as the legacy of Francisco Manuel Bautista, who,
                  despite only completing fourth grade, achieved great success
                  in life and became the founder of the St Peter Group of
                  Companies. Upon his death, his daughter, Sis Del
                  Bautista-Vitangcol, endeavored to immortalize his name. This
                  endeavor came to fruition through her consultation with Bro
                  Ernie M Burdeos, the Presiding Elder of the St Peter
                  Community, whose subsequent inspiration prompted the inception
                  of a Scholarship Foundation in her father's name.
                </p>
              </div>
              <div className="mt-auto flex justify-center">
                <div className="flex flex-col sm:flex-row justify-center sm:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                  <a
                    href="#features"
                    className="bg-blue-600 text-white py-2 px-6 sm:py-2 sm:px-8 lg:py-3 lg:px-10 rounded-full text-base sm:text-lg lg:text-xl hover:bg-blue-500 w-full sm:w-[200px] lg:w-[250px] flex justify-center items-center"
                  >
                    APPLY NOW
                  </a>
                  <a
                    href="#login"
                    className="bg-green-600 text-white py-2 px-6 sm:py-2 sm:px-8 lg:py-3 lg:px-10 rounded-full text-base sm:text-lg lg:text-xl hover:bg-green-500 w-full sm:w-[200px] lg:w-[250px] flex justify-center items-center"
                  >
                    LOGIN
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        <HeroSection />

        {/* News and Updates Section */}
        <section
          id="news"
          className="min-h-screen flex items-center justify-center bg-gray-50 text-center py-16"
        >
          <div className="flex flex-col sm:flex-row w-full max-w-screen-xl mx-auto px-2 sm:px-4 lg:px-6">
            {/* Left Column: Header and Subheading */}
            <div className="flex-1 sm:mr-8 mb-8 sm:mb-0 px-4 sm:px-0">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Latest News and Updates
              </h2>
              <p className="text-lg sm:text-xl text-gray-600">
                Stay updated with the latest news and announcements. Here you’ll
                find all the recent developments and important information about
                our services.
              </p>
            </div>
            <div className="flex-1">
              <div className="max-w-4xl mx-auto shadow-lg rounded-lg overflow-hidden">
                <iframe
                  className="w-full"
                  src="https://www.youtube.com/embed/98uCSivvYk8"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ height: "500px" }}
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section
          id="features"
          className="min-h-screen flex items-center justify-center bg-gray-50 text-center py-16"
        >
          <div className="w-full max-w-screen-xl mx-auto px-2 sm:px-4 lg:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 sm:mb-12">
              Our Features
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
                  Feature 1
                </h3>
                <p className="text-gray-600">Description of feature 1.</p>
              </div>
              <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
                  Feature 2
                </h3>
                <p className="text-gray-600">Description of feature 2.</p>
              </div>
              <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
                  Feature 3
                </h3>
                <p className="text-gray-600">Description of feature 3.</p>
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
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">
              Login to Continue
            </h2>
            <LoginForm />
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </main>
  );
};

export default Home;

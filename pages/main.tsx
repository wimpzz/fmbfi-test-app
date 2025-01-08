import Head from "next/head";
import { useRouter } from "next/router";
import SubmitForm from "../components/SubmitForm";
import Footer from "@/components/Footer";
import LoginForm from "@/components/LoginForm";
import Navbar from "@/components/NavBar";

const Home = () => {
  const router = useRouter();

  const handleViewData = () => {
    router.push("/data");
  };

  return (
    <main className="bg-gray-100 min-h-screen">
      <div className="w-full">
        <Head>
          <title>Landing Page</title>
          <meta name="description" content="A simple landing page" />
        </Head>

        {/* Navbar */}
        <Navbar />

        {/* Hero Section */}
        <section className="bg-gray-100 min-h-screen flex items-center justify-center text-center">
          <div className="flex flex-col-reverse sm:flex-row w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Left Column: Image */}
            <div className="flex-1 mb-8 sm:mb-0 sm:mr-8">
              <img
                src="/hero-image.png"
                alt="Hero Image"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>

            {/* Right Column: Text and Buttons */}
            <div className="flex-1 text-center sm:text-left">
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Welcome to Our Landing Page
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 mb-6">
                Start your journey with us and explore the amazing features we offer.
              </p>
              <div className="flex justify-center sm:justify-start space-x-4">
                <a
                  href="#features"
                  className="bg-blue-600 text-white py-2 px-4 sm:py-2 sm:px-6 rounded-full text-base sm:text-lg hover:bg-blue-500"
                >
                  Explore Features
                </a>
                <a
                  href="#login"
                  className="bg-green-600 text-white py-2 px-4 sm:py-2 sm:px-6 rounded-full text-base sm:text-lg hover:bg-green-500"
                >
                  Login
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* News and Updates Section */}
        <section
          id="news"
          className="min-h-screen flex items-center justify-center bg-white text-center"
        >
          <div className="flex flex-col sm:flex-row w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Left Column: Header and Subheading */}
            <div className="flex-1 sm:mr-8 mb-8 sm:mb-0">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Latest News and Updates
              </h2>
              <p className="text-lg sm:text-xl text-gray-600">
                Stay updated with the latest news and announcements. Here you’ll find all the recent developments and important information about our services.
              </p>
            </div>

            {/* Right Column: YouTube Embed */}
            <div className="flex-1">
              <div className="aspect-w-16 aspect-h-9 sm:aspect-h-20">
                <iframe
                  className="w-full h-full rounded-lg"
                  src="https://www.youtube.com/embed/98uCSivvYk8"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section
          id="features"
          className="min-h-screen flex items-center justify-center bg-white text-center"
        >
          <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 sm:mb-12">
              Our Features
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 sm:p-8 rounded-lg shadow-lg">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
                  Feature 1
                </h3>
                <p className="text-gray-600">Description of feature 1.</p>
              </div>
              <div className="bg-gray-50 p-6 sm:p-8 rounded-lg shadow-lg">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
                  Feature 2
                </h3>
                <p className="text-gray-600">Description of feature 2.</p>
              </div>
              <div className="bg-gray-50 p-6 sm:p-8 rounded-lg shadow-lg">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
                  Feature 3
                </h3>
                <p className="text-gray-600">Description of feature 3.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Submit Form Section (Commented out for now) */}
        {/* <section
          id="submit-form"
          className="min-h-screen flex items-center justify-center bg-gray-50"
        >
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">
              Submit Your Information
            </h2>
            <SubmitForm />
          </div>
        </section> */}

        {/* Login Section */}
        <section
          id="login"
          className="min-h-screen flex items-center justify-center bg-gray-50"
        >
          <div className="max-w-md mx-auto text-center">
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

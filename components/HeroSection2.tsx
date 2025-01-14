import React, { useEffect, useState } from "react";

const images = [
  "/images/FMBFI.JPG",
  "/images/FMBFI2.JPG",
  "/images/FMBFI3.JPG",
];

const HeroSection: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative w-full h-screen bg-cover bg-center transition-all duration-1000"
      style={{
        backgroundImage: `url(${images[currentImageIndex]})`,
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="relative z-10 flex items-center justify-center w-full h-full text-center text-white px-6">
        <div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Welcome to Francisco M. Bautista Foundation
          </h1>
          <p className="text-lg sm:text-xl mb-8">
            Empowering communities and building futures.
          </p>
          <a
            href="#demographics"
            className="inline-block bg-d12f27 text-white text-lg py-3 px-8 rounded-md hover:bg-[#c56851]"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

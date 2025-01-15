import React, { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Import icons from react-icons

const images = [
  "/images/FMBFI.JPG",
  "/images/FMBFI2.JPG",
  "/images/FMBFI3.JPG",
];

const HeroSection: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false); // State for tracking hover

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const handleLearnMoreClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById("about-section");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start", // Scrolls to the top of the section
      });
    }
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePreviousClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Handle scroll for changing images
  const handleWheel = (e: React.WheelEvent) => {
    if (e.deltaY > 0) {
      // Scroll down -> next image
      handleNextClick();
    } else {
      // Scroll up -> previous image
      handlePreviousClick();
    }
  };

  return (
    <section onWheel={handleWheel}>
      {" "}
      {/* Add onWheel event listener */}
      <div
        className="relative w-full h-screen bg-cover bg-center transition-all duration-1000"
        style={{
          backgroundImage: `url(${images[currentImageIndex]})`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div
          className={`relative z-10 flex items-center justify-center w-full h-full text-center text-white px-6 transition-opacity duration-500 ease-in-out ${
            isHovered ? "opacity-0" : "opacity-100"
          }`} // Change opacity to 0 with a smooth transition
        >
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              FRANCISCO M BAUTISTA FOUNDATION INC
            </h1>
            <p className="text-lg sm:text-xl mb-8">
              "Go plant it for Me in the heart of a child.”
            </p>
            <a
              href="#about-section"
              onClick={handleLearnMoreClick}
              className="inline-block bg-d12f27 text-white text-lg py-3 px-8 rounded-md hover:bg-[#c56851] transition-all duration-300 mt-20"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Next and Previous Chevron Buttons (Hidden on small screens) */}
        <button
          onClick={handlePreviousClick}
          onMouseEnter={() => setIsHovered(true)} // Set hover state to true on mouse enter
          onMouseLeave={() => setIsHovered(false)} // Set hover state to false on mouse leave
          className="absolute left-5 top-1/2 transform -translate-y-1/2 text-white text-4xl z-20 p-3 bg-black bg-opacity-40 rounded-full hover:bg-[#c56851] transition-all duration-300 hidden sm:block" // hidden on small screens
          style={{
            border: "none", // Ensuring no border
            cursor: "pointer", // Ensuring it's clickable
          }}
        >
          <FaChevronLeft />
        </button>

        <button
          onClick={handleNextClick}
          onMouseEnter={() => setIsHovered(true)} // Set hover state to true on mouse enter
          onMouseLeave={() => setIsHovered(false)} // Set hover state to false on mouse leave
          className="absolute right-5 top-1/2 transform -translate-y-1/2 text-white text-4xl z-20 p-3 bg-black bg-opacity-40 rounded-full hover:bg-[#c56851] transition-all duration-300 hidden sm:block" // hidden on small screens
          style={{
            border: "none", // Ensuring no border
            cursor: "pointer", // Ensuring it's clickable
          }}
        >
          <FaChevronRight />
        </button>
      </div>
      <div id="about-section" className="max-w-6xl mx-auto px-6 py-24 lg:py-32">
        <p className="text-lg leading-relaxed text-justify">
          The Francisco M Bautista Foundation Incorporated was conceived to
          serve as the legacy of Francisco Manuel Bautista, who, despite only
          completing fourth grade, achieved great success in life and became the
          founder of the St Peter Group of Companies. Upon his death, his
          daughter, Sis Del Bautista-Vitangcol, endeavored to immortalize his
          name. This endeavor came to fruition through her consultation with Bro
          Ernie M Burdeos, the Presiding Elder of the St Peter Community, whose
          subsequent inspiration prompted the inception of a Scholarship
          Foundation in her father's name. This initiative has since provided
          scholarships to numerous students, empowering them to pursue higher
          education and succeed in their careers. The Foundation continues to
          honor the legacy of Francisco M. Bautista by supporting the education
          of deserving students and making a positive impact on the community.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;

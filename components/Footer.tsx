import React from "react";

const Footer = () => {
  return (
    <footer className="bg-red-700 text-white py-4">
      <div className="max-w-5xl mx-auto text-center px-4">
        <p className="text-base sm:text-lg md:text-xl">
          © {new Date().getFullYear()} FMBFI. All rights reserved.
        </p>
        <p className="text-sm sm:text-lg md:text-base">
          <a
            href="/privacy-policy"
            className="text-white hover:text-gray-200 hover:underline px-2 py-1"
          >
            Privacy Policy
          </a>{" "}
          |{" "}
          <a
            href="/terms-of-service"
            className="text-white hover:text-gray-200 hover:underline px-2 py-1"
          >
            Terms of Service
          </a>{" "}
          |{" "}
          <a
            href="/contact-us"
            className="text-white hover:text-gray-200 hover:underline px-2 py-1"
          >
            Contact Us
          </a>
        </p>
        <p className="text-sm sm:text-base mt-4 py-1">
          "Go plant it for me in the heart of a child.”
        </p>
      </div>
    </footer>
  );
};

export default Footer;

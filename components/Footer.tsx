// /components/Footer.tsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-4">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-base sm:text-lg md:text-xl">
          © {new Date().getFullYear()} FMBFI. All rights reserved.
        </p>
        <p className="text-xs sm:text-sm md:text-base">
          <a
            href="/privacy-policy"
            className="text-white hover:text-red-400 hover:underline px-2 py-1"
          >
            Privacy Policy
          </a>{" "}
          |{" "}
          <a
            href="/terms-of-service"
            className="text-white hover:text-red-400 hover:underline px-2 py-1"
          >
            Terms of Service
          </a>{" "}
          |{" "}
          <a
            href="/contact-us"
            className="text-white hover:text-red-400 hover:underline px-2 py-1"
          >
            Contact Us
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

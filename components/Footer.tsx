// /components/Footer.tsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-lg sm:text-xl md:text-2xl">
          © {new Date().getFullYear()} FMBFI. All rights reserved.
        </p>
        <p className="text-sm sm:text-base md:text-lg">
          <a
            href="/privacy-policy"
            className="text-indigo-400 hover:underline px-2 py-1"
          >
            Privacy Policy
          </a>{" "}
          |{" "}
          <a
            href="/terms-of-service"
            className="text-indigo-400 hover:underline px-2 py-1"
          >
            Terms of Service
          </a>{" "}
          |{" "}
          <a
            href="/contact-us"
            className="text-indigo-400 hover:underline px-2 py-1"
          >
            Contact Us
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

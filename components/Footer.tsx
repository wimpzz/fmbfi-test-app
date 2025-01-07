// /components/Footer.tsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="max-w-5xl mx-auto text-center">
        <p>© {new Date().getFullYear()} My Website. All rights reserved.</p>
        <p>
          <a href="/privacy-policy" className="text-indigo-400 hover:underline">
            Privacy Policy
          </a>{" "}
          |{" "}
          <a href="/terms-of-service" className="text-indigo-400 hover:underline">
            Terms of Service
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

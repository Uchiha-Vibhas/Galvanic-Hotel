// Footer.js
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center">
      <div className="container mx-auto">
        <p className="text-lg">Hotel Galavanic</p>
        <p className="text-sm mt-2">Address: 123 Hotel Street, City, Country</p>
        <p className="text-sm">Phone: +1234567890</p>
        <div className="mt-4">
          <a
            href="#"
            className="text-white hover:text-gray-300 transition duration-300 mx-2"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-300 transition duration-300 mx-2"
          >
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

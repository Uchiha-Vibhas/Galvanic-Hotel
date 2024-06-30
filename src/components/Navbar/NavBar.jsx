// Navbar.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 0 && !isNavbarFixed) {
        setIsNavbarFixed(true);
      } else if (scrollY === 0 && isNavbarFixed) {
        setIsNavbarFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isNavbarFixed]);

  return (
    <nav
      className={`${
        isNavbarFixed
          ? "fixed top-0 inset-x-0 bg-gray-800  shadow-xl z-50 transition-all duration-300 ease-in-out text-white"
          : "bg-gray-800 text-white"
      }`}
    >
      <div className="container mx-auto pr-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img
              className="h-20 p-5"
              src="./src/components/Navbar/logo.png"
              alt="Hotel Galavanic"
            />
            <span className="ml-2 text-lg font-semibold font-barlow">
              Hotel Galavanic
            </span>
          </div>
          <div className="hidden md:flex space-x-20">
            <Link
              to="/"
              className={`${
                isNavbarFixed ? "text-white" : "text-gray-500"
              } hover:text-white transition duration-300`}
            >
              Home
            </Link>

            <Link
              to="/about"
              className={`${
                isNavbarFixed ? "text-white" : "text-gray-500"
              } hover:text-white transition duration-300`}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={`${
                isNavbarFixed ? "text-white" : "text-gray-500"
              } hover:text-white transition duration-300`}
            >
              Contact
            </Link>
          </div>
          {/* Hamburger menu for mobile view */}
          <div className="md:hidden">
            {/* Replace with your mobile menu toggle button */}
            <button className="text-white hover:text-gray-300">Menu</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

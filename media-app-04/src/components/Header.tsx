import React, { useState, useEffect } from "react";
import { Link } from "react-router";

const AnimatedHeader: React.FC = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-40 transition-transform duration-300 ease-in-out  ${
        scrolled ? "bg-gray-800 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-pink-500 cursor-pointer">MyApp</h1>
        <nav className="space-x-6">
          <Link
            // href="#home"
            to={'/'}
            className="text-pink-300 hover:text-pink-500 transition"
          >
            Home
          </Link>
          <Link
            // href="#about"
            to={'/about'}
            className="text-pink-300 hover:text-pink-500 transition"
          >
            About
          </Link>
          <Link
            // href="#contact"
            to={'/contact'}
            className="text-pink-300 hover:text-pink-500 transition"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default AnimatedHeader;

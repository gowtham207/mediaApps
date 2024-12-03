import React, { memo, useState } from "react";
import { Link, useNavigate } from "react-router";

const CustomHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const nav = useNavigate()
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const logoutBtnPress = () =>{
    localStorage.clear()
    nav("/login")
  }

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to={'/'} className="text-2xl font-bold text-blue-600">
          Entertainment Plus
          </Link>

          {/* Navigation Links */}
          <nav
            className={`lg:flex lg:gap-8 absolute lg:static bg-white lg:bg-transparent w-full lg:w-auto top-16 left-0 px-6 py-4 lg:p-0 transform ${
              menuOpen ? "translate-y-0" : "-translate-y-full"
            } transition-transform duration-300 ease-in-out lg:translate-y-0`}
          >
            <Link
              to="/"
              className="block py-2 px-4 text-gray-700 hover:text-blue-600 lg:inline"
            >
              Home
            </Link>
            <Link
              to="/plan"
              className="block py-2 px-4 text-gray-700 hover:text-blue-600 lg:inline"
            >
              Plan and Pricing
            </Link>
            <Link
              to="/about"
              className="block py-2 px-4 text-gray-700 hover:text-blue-600 lg:inline"
            >
              About Us
            </Link>

            <button
              // to="/login"
              onClick={logoutBtnPress}
              type="button"
              className="block py-2 px-4 text-gray-700 hover:text-blue-600 lg:inline"
            >
              Logout
            </button>
           
          </nav>

          {/* Hamburger Menu */}
          <button
            className="lg:hidden flex flex-col gap-1"
            onClick={toggleMenu}
          >
            <span className="w-6 h-1 bg-gray-700"></span>
            <span className="w-6 h-1 bg-gray-700"></span>
            <span className="w-6 h-1 bg-gray-700"></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default memo(CustomHeader);

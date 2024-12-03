// Header.tsx
import React from 'react';
import { Link } from 'react-router';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-purple-900 to-indigo-900 p-4 shadow-lg">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        {/* Logo or Title */}
        <h1 className="text-white text-2xl font-bold">MyApp</h1>

        {/* Button List with Links */}
        <nav className="flex space-x-6">
          <Link
            to="/"
            className="text-white hover:text-purple-300 focus:outline-none transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/contact"
            className="text-white hover:text-purple-300 focus:outline-none transition duration-300"
          >
            Contact
          </Link>
          <Link
            to="/plan"
            className="text-white hover:text-purple-300 focus:outline-none transition duration-300"
          >
            Plan
          </Link>
          <button
            className="text-white hover:text-red-500 focus:outline-none transition duration-300"
            onClick={() => console.log("Logging out...")} // Implement logout functionality here
          >
            Logout
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;

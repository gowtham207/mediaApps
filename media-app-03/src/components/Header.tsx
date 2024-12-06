import React from 'react';
import { FaHome, FaHeadset } from 'react-icons/fa'; // Importing some example icons
import { Link } from 'react-router'; // Importing Link for routing

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      {/* Left side with links */}
      <div className="flex space-x-4">
        <Link to="/" className="text-blue-600 font-semibold hover:text-blue-800 transition">
          <FaHome className="inline mr-2" />
          Home
        </Link>
        <Link to="/support" className="text-blue-600 font-semibold hover:text-blue-800 transition">
          <FaHeadset className="inline mr-2" />
          Support
        </Link>
      </div>

      {/* Right side with the icon */}
      <div className="flex items-center space-x-4">
        <i className="text-gray-700 text-2xl">👤</i> {/* Example user icon */}
      </div>
    </header>
  );
};

export default Header;

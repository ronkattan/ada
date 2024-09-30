import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-blue-900 text-white p-4 fixed top-0 left-0 right-0 z-50 shadow-md">
      <div className="container max-w-4xl mx-auto flex justify-between items-center">
        {/* Logo or Home Link */}
        <a href="#header" className="text-lg font-semibold hover:underline">
          דף הבית
        </a>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Links for Desktop */}
        <div className="hidden md:flex">
          <a
            href="#issues"
            className="text-lg font-semibold hover:underline ml-6"
          >
            הבעיות
          </a>
          <a
            href="#impact"
            className="text-lg font-semibold hover:underline ml-6"
          >
            השפעה
          </a>
          <a
            href="#call-to-action"
            className="text-lg font-semibold hover:underline ml-6"
          >
            קריאה לפעולה
          </a>
          <a
            href="#opposition"
            className="text-lg font-semibold hover:underline ml-6"
          >
            התנגדות למסוף
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-blue-900 text-white p-4 mt-4 rounded-lg shadow-lg">
          <a
            href="#issues"
            className="block text-lg font-semibold hover:underline mb-2"
            onClick={toggleMenu}
          >
            הבעיות
          </a>
          <a
            href="#impact"
            className="block text-lg font-semibold hover:underline mb-2"
            onClick={toggleMenu}
          >
            השפעה
          </a>
          <a
            href="#call-to-action"
            className="block text-lg font-semibold hover:underline mb-2"
            onClick={toggleMenu}
          >
            קריאה לפעולה
          </a>
          <a
            href="#opposition"
            className="block text-lg font-semibold hover:underline mb-2"
            onClick={toggleMenu}
          >
            התנגדות למסוף
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navigation;

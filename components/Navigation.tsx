import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-blue-900 text-white p-4 fixed top-0 left-0 right-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center max-w-6xl px-4">
        {/* Logo or Home Link */}
        <a href="#header" className="text-xl font-semibold hover:underline">
          דף הבית
        </a>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Links for Desktop */}
        <div className="hidden md:flex space-x-8 space-x-reverse">
          <a href="#issues" className="text-lg font-semibold hover:underline">
            הבעיות
          </a>
          <a href="#impact" className="text-lg font-semibold hover:underline">
            השפעה
          </a>
          <a
            href="#call-to-action"
            className="text-lg font-semibold hover:underline"
          >
            קריאה לפעולה
          </a>
          <a
            href="#opposition"
            className="text-lg font-semibold hover:underline"
          >
            התנגדות למסוף
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-blue-900 text-white p-4 mt-4 space-y-4">
          <a
            href="#issues"
            className="block text-lg font-semibold hover:underline"
            onClick={toggleMenu}
          >
            הבעיות
          </a>
          <a
            href="#impact"
            className="block text-lg font-semibold hover:underline"
            onClick={toggleMenu}
          >
            השפעה
          </a>
          <a
            href="#call-to-action"
            className="block text-lg font-semibold hover:underline"
            onClick={toggleMenu}
          >
            קריאה לפעולה
          </a>
          <a
            href="#opposition"
            className="block text-lg font-semibold hover:underline"
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

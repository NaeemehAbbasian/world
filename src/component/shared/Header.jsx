import React, { useState } from 'react';
import { Link } from 'react-router'; 
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-black text-white shadow-md p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center relative">
        <Link to="/" className="text-xl font-bold">
          Countries Explorer
        </Link>
        
        <div className="md:hidden">
          <button onClick={handleMenuToggle} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>

        <nav className="hidden md:flex space-x-6">
          <Link
            to="/countries"
            className="hover:text-amber-600 transition-colors"
          >
            Countries
          </Link>
          <Link
            to="/hotels"
            className="hover:text-amber-600 transition-colors"
          >
            Hotels
          </Link>
          <Link
            to="/about-us"
            className="hover:text-amber-600 transition-colors"
          >
            About Us
          </Link>
          <Link
            to="/contact-us"
            className="hover:text-amber-600 transition-colors"
          >
            Contact Us
          </Link>
        </nav>
      </div>

      {isMenuOpen && (
        <nav className="md:hidden absolute top-full left-0 w-full bg-gray-900 p-4 shadow-lg transition-transform transform">
          <ul className="flex flex-col space-y-4">
            <li>
              <Link onClick={handleMenuToggle} to="/countries" className="block text-white hover:text-amber-600">
                Countries
              </Link>
            </li>
            <li>
              <Link onClick={handleMenuToggle} to="/hotels" className="block text-white hover:text-amber-600">
                Hotels
              </Link>
            </li>
            <li>
              <Link onClick={handleMenuToggle} to="/about-us" className="block text-white hover:text-amber-600">
                About Us
              </Link>
            </li>
            <li>
              <Link onClick={handleMenuToggle} to="/contact-us" className="block text-white hover:text-amber-600">
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
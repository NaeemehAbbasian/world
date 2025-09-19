import React from 'react';
import { Link } from 'react-router';
// import SearchAndFilter from "../pages/SearchAndFilter";

const Header = () => {
  return (
    
    <header className="bg-black text-white shadow-md p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
         Countries Explorer
        </Link>

       

        <nav className="flex space-x-6">
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
    </header>
  );
};

export default Header;
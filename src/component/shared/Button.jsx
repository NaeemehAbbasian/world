
import React from 'react';

const Button = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-6 py-3 bg-yellow-800 text-white font-semibold rounded-lg shadow-md hover:bg-yellow-700 transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-800 focus:ring-opacity-50"
    >
      {children}
    </button>
  );
};

export default Button;
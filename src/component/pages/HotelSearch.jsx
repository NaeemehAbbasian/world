
import React from 'react';
import Button from "../shared/Button";
const HotelSearch = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center p-6 bg-gray-800 rounded-md shadow-lg space-y-4 md:space-y-0 md:space-x-4 my-8">
      <input
        type="text"
        placeholder="Where are you going?"
        className="p-3 w-full rounded-md shadow-inner bg-black text-white border border-gray-600 focus:outline-none focus:border-blue-500"
      />
      
      <div className="relative w-full">
        <select
          className="p-3 w-full rounded-md shadow-inner bg-black text-white border border-gray-600 focus:outline-none focus:border-blue-500 appearance-none"
        >
          <option value="">Guests</option>
          <option value="1">1 Guest</option>
          <option value="2">2 Guests</option>
          <option value="3">3 Guests</option>
          <option value="4+">4+ Guests</option>
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none text-white">
          <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
      </div>

      <Button>
        Search
      </Button>
    </div>
  );
};

export default HotelSearch;
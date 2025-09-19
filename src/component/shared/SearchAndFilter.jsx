
import React from 'react';

const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

const SearchAndFilter = ({ onSearch, onFilter }) => {
  return (
    <div className="flex flex-col md:flex-row justify-between p-4 bg-gray-800 rounded-md shadow-lg my-8">
      <input
        type="text"
        placeholder="Search for a country..."
        className="flex-grow p-3 rounded-md shadow-inner mb-4 md:mb-0 md:w-1/3 bg-white text-white border border-gray-600 focus:outline-none focus:border-blue-500"
        onChange={(e) => onSearch(e.target.value)}
      />
      <select
        className="p-3 rounded-md shadow-inner bg-black text-white border border-gray-600 focus:outline-none focus:border-blue-500"
        onChange={(e) => onFilter(e.target.value)}
      >
        <option value="">Filter by Region</option>
        {regions.map((region) => (
          <option key={region} value={region}>
            {region}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SearchAndFilter;
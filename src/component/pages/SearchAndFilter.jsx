
import React from 'react';

const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

const SearchAndFilter = ({ onSearch, onFilter }) => {
  return (
    <div className="flex flex-col md:flex-row justify-between mb-8 p-4 ">
      { }
      <input
        type="text"
        placeholder="Search for a country..."
        className="p-3 shadow-md rounded-md md:w-1/3 mb-4 md:mb-0 border border-gray-300"
        onChange={(e) => onSearch(e.target.value)}
      />

      { }
      <select
        className="p-3 shadow-md rounded-md"
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
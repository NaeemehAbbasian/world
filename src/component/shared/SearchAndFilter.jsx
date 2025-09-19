
import React from 'react';

const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

const SearchAndFilter = ({ onSearch, onFilter }) => {
  return (
    <div className="flex flex-col md:flex-row justify-between mb-8">
      <input
        type="text"
        placeholder="Search for a country..."
        className="flex-grow p-3 rounded-md shadow-md mb-4 md:mb-0 md:w-1/3 "
        onChange={(e) => onSearch(e.target.value)}
      />
      <select
        className="p-3 rounded-md shadow-md"
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
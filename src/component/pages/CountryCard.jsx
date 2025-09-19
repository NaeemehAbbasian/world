
import React from 'react';
import { Link } from 'react-router';

const CountryCard = ({ country }) => {
  return (
    <Link to={`/countries/${country.name.common}`} className="block">
      <div className="bg-white rounded-lg shadow-md p-4 transition-transform transform hover:scale-105">
        <img src={country.flags.svg} alt={`Flag of ${country.name.common}`} className="w-full h-auto mb-4 rounded" />
        <div className="p-2">
          <h3 className="text-xl font-bold mb-2">{country.name.common}</h3>
          <p className="text-gray-600">
            <strong>Population:</strong> {country.population.toLocaleString()}
          </p>
          <p className="text-gray-600">
            <strong>Region:</strong> {country.region}
          </p>
          <p className="text-gray-600">
            <strong>Capital:</strong> {country.capital?.[0] || 'N/A'}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CountryCard;
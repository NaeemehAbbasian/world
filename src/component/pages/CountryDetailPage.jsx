import { useState, useEffect } from 'react';
import { useParams } from 'react-router';

const CountryDetailPage = () => {
  const { name } = useParams();
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCountryData = async () => {
      try {
        const response = await fetch(`https://restcountries.com/v3.1/name/${name}?fullText=true`);
        if (!response.ok) {
          throw new Error('Country not found');
        }
        const data = await response.json();
        setCountry(data[0]);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCountryData();
  }, [name]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="p-8 text-white ">
      {country && (
        <>
          <h1 className="text-4xl font-bold mb-4">{country.name.common}</h1>
          <img src={country.flags.svg} alt={`Flag of ${country.name.common}`} className="w-96" />
          <div className="mt-4">
            <p><strong>Capital:</strong> {country.capital?.[0] || 'N/A'}</p>
            <p><strong>Region:</strong> {country.region}</p>
            <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default CountryDetailPage;
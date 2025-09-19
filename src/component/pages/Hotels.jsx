
import React from 'react';
import HotelSearch from './HotelSearch'

const Hotels = () => {
  return (
    <div className="container mx-auto p-8 md:p-12 lg:p-16 text-center">
      <h1 className="text-4xl md:text-5xl  text-white font-bold mb-6">
        Hotels
      </h1>
      <p className="text-lg md:text-xl text-white font-semibold max-w-3xl mx-auto mb-8">
        Discover and book your perfect stay. Use our search and filter options to find the best hotels for your next trip.
      </p>
      
      <HotelSearch />
      
     
    </div>
  );
};

export default Hotels;
import React from 'react'
import { Link } from 'react-router'
// import Header from '../shared/Header'
import  world  from "../../../public/world.jpg"

import Button from '../shared/Button'



const HomePage = () => {
  const bgStyle = {
    backgroundImage: `url(${world})`,
  };

  return (
   
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat" style={bgStyle}>
     <div className="absolute inset-0 bg-black opacity-50"></div>

     
      <div className="relative z-10 text-center text-white p-4 flex flex-col items-center space-y-4">
      
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
          Discover Countries
        </h1>
        <p className="mt-4 text-lg md:text-xl drop-shadow-lg">
          Browse, search, and learn about countries around the world.
        </p>
        <Link 
          to="/countries" 
          
          className="mt-4 px-8 py-4 text-gray-800 font-bold rounded-lg shadow-xl transition-colors transform hover:scale-105"
        >
           <Button>Explore Now</Button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;

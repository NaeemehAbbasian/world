// src/components/pages/HomeLayout.jsx

import React from 'react';
import { Outlet } from 'react-router';
import Header from '../shared/Header';

const bgImage = 'https://images.pexels.com/photos/592753/pexels-photo-592753.jpeg';

export default function HomeLayout() {
  return (

    <div 
      className="min-h-screen bg-cover bg-center bg-no-repeat relative" 
      style={{ backgroundImage: `url('${bgImage}')` }}
    >
      <div className="absolute inset-0 bg-black opacity-10"></div>
      
      <div className="relative z-10">
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
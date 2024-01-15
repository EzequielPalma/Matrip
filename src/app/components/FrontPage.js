'use client'
import React, { useState } from 'react';
import Navbar from './Navbar';

const FrontPage = () => {

  return (
    <div>
      <Navbar />

      
      <header id="up" className="bg-center bg-fixed bg-no-repeat bg-center bg-cover h-screen relative">
        <div className="bg-gray-800 bg-opacity-75 p-8 rounded-md shadow-lg mb-20 m-2 rounded-md">
          <h1 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
            Madrid, donde cada pisada es una melodía que resuena en tu corazón. Deja que esta ciudad te envuelva con su encanto, susurros de historia y la calidez de su gente. Cada calle, cada plaza, es una sinfonía de experiencias que se fusionan para crear recuerdos imborrables. Ven y descubre cómo Madrid te cautiva con cada paso, dejando huellas de amor en tu corazón.
          </h1>
        </div>
      </header>

    </div>
  );
};

export default FrontPage;

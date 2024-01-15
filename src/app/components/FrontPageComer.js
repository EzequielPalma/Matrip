'use client'
import React, { useState } from 'react';
import Navbar from './Navbar';
import FetchRestaurantes from './FetchRestaurantes';


const FrontPageComer = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);



  return (
    <div>

      <Navbar/>

      <div id="nav-opened" className={`fixed left-0 right-0 ${isNavOpen ? 'block' : 'hidden'} bg-white mx-2 mt-16 rounded-br rounded-bl shadow z-10`}>
        <div className="p-2 divide-y divide-gray-600 flex flex-col">
          <a href="#about" className="p-2 font-semibold hover:text-indigo-700">About</a>
          <a href="#whyus" className="p-2 font-semibold hover:text-indigo-700">Why Us ?</a>
          <a href="#showcase" className="p-2 font-semibold hover:text-indigo-700">Our Products</a>
        </div>
      </div>

      <header id="comer" className="bg-center bg-fixed bg-no-repeat bg-center bg-cover h-screen relative">
        <div className="mx-2 text-center">
            <FetchRestaurantes/>
        </div>
      </header>
    </div>
  );
};

export default FrontPageComer;

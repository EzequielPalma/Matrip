'use client'
import React, { useState } from 'react';
import FetchRestaurantes from './FetchRestaurantes';


const FrontPageComer = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);



  return (  
      <header id="comer" className="bg-center bg-fixed bg-no-repeat bg-center bg-cover h-screen relative">
        <div className="mx-2 text-center">
            <FetchRestaurantes/>
        </div>
      </header>
  );
};

export default FrontPageComer;

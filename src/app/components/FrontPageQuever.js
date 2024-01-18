'use client'
import React, { useState } from 'react';
import FetchLugares from './FetchLugares';


const FrontPageQuever = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);



  return (
    <div>     

      <header id="quever" className="bg-center bg-fixed bg-no-repeat bg-center bg-cover h-screen relative">
        <div className="mx-2 text-center">
            <FetchLugares/>
        </div>
      </header>
    </div>
  );
};

export default FrontPageQuever;

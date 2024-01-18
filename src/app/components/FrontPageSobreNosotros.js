'use client'
import React, { useState } from 'react';
import SobreNosotros from './SobreNosotros';


const FrontPageSobreNosotros = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);



  return (

      <main id="sobrenosotros" className="bg-center bg-fixed bg-no-repeat bg-center bg-cover h-screen relative">
        <div className="mx-2 text-center">
            <SobreNosotros/>
        </div>
      </main>
  );
};

export default FrontPageSobreNosotros;

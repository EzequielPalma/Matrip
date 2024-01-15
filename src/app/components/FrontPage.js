'use client'
import Navbar from './Navbar';
import Descripcion from './Descripcion';

const FrontPage = () => {

  return (
    <div>
      <Navbar />

      
      <header id="up" className="bg-center bg-fixed bg-no-repeat bg-center bg-cover h-screen relative">
        <Descripcion/>
      </header>

    </div>
  );
};

export default FrontPage;

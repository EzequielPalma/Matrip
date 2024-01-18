'use client'
import FetchRestaurantes from './FetchRestaurantes';


const FrontPageComer = () => {
  return (
    <main id="comer" className="bg-center bg-fixed bg-no-repeat bg-center bg-cover h-screen relative">
      <div className="mx-2 text-center">
        <FetchRestaurantes />
      </div>
    </main>
  );
};

export default FrontPageComer;

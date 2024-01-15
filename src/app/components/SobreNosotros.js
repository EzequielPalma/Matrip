import React from 'react'
import Link from 'next/link';
export default function SobreNosotros() {
  return (
    <div className="bg-gray-800 bg-opacity-75 p-8 rounded-md shadow-lg mb-20">
      <h1 className="text-4xl font-bold text-white mb-4">¡Bienvenido a MATRIP!</h1>
      <p className="text-white text-lg">En el mágico universo de MATRIP, te sumergirás en una experiencia única donde cada rincón de la ciudad cobra vida con un toque de magia. Somos más que una simple guía; somos tu pase de entrada a un viaje lleno de descubrimientos, sabores y secretos que te transportarán a un Madrid mágico y encantador.</p>
      <p className="text-white text-lg mt-4">Descubre los tesoros ocultos que van más allá de la realidad cotidiana. Explora calles empedradas que cuentan historias olvidadas, descubre puertas secretas que te llevan a dimensiones insospechadas y despierta la curiosidad que hay en ti mientras te sumerges en los encantos ocultos de la ciudad.</p>
      <p className="text-white text-lg mt-4">Nuestra misión en MATRIP es brindarte información detallada y actualizada sobre los lugares más emblemáticos, los secretos locales y los restaurantes que harán que tu experiencia en Madrid sea única.</p>
      <div className="flex flex-col-reverse items-center">
        <button className="mx-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-4"><Link href="/dondecomer">  Quiero comer!!! </Link> </button>
        <button  className="mx-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-4"><Link href="/quever">  Quiero visitar un gran lugar!!! </Link> </button>
      </div>
    </div>


  )
};

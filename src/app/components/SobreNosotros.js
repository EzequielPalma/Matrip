import { motion } from 'framer-motion';
import Link from 'next/link';
export default function SobreNosotros() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.1 }}
      animate={{ opacity: 1, scale: 0.9 }}
      transition={{ duration: 2 }}
    >
      <div className="bg-gray-800 bg-opacity-75 p-8 rounded-md shadow-lg mb-4 md:w-3/4 lg:w-1/2 xl:w-1/3 mx-auto flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">¡Bienvenido a MATRIP!</h1>
          
          <p className="text-white text-lg mt-4 text-left">En MATRIP, sumérgete en una experiencia única donde cada rincón de Madrid cobra vida con magia. Somos tu guía para un viaje lleno de descubrimientos, sabores y secretos, transportándote a un Madrid encantador. Descubre tesoros ocultos, explora calles empedradas con historias olvidadas, encuentra puertas secretas hacia dimensiones insospechadas y deja que tu curiosidad se despierte en los encantos ocultos de la ciudad.</p>
          <p className="text-white text-lg mt-4 text-left">Nuestra misión en MATRIP es brindarte información detallada y actualizada sobre los lugares más emblemáticos, los secretos locales y los restaurantes que harán que tu experiencia en Madrid sea única.</p>
          <div className="flex flex-col items-center mt-4">
            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-4">
              <Link href="/dondecomer">Quiero comer!!!</Link>
            </button>
            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-4">
              <Link href="/quever">Quiero visitar un gran lugar!!!</Link>
            </button>
          </div>
        </div>
      </div>

    </motion.div>


  )
};

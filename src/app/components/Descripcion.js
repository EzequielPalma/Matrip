import { motion } from 'framer-motion';


export default function Descripcion() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 2 }}
    >
      <div className="bg-gray-800 shadow-md bg-opacity-75 p-8 rounded-md shadow-lg mb-20 mx-auto my-2 md:w-2/3 lg:w-1/2 xl:w-1/3">
        <h1 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
          "Madrid, donde cada pisada es una melodía que resuena en tu corazón. Deja que esta ciudad te envuelva con su encanto, susurros de historia y la calidez de su gente. Cada calle, cada plaza, es una sinfonía de experiencias que se fusionan para crear recuerdos imborrables. Ven y descubre cómo Madrid te cautiva con cada paso, dejando huellas de amor en tu corazón."
        </h1>
      </div>

    </motion.div>



  )
}

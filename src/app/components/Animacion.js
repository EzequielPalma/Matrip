"use client"

import { motion, useScroll } from 'framer-motion';

function Animacion() {

  const { scrollYProgress } = useScroll();

  return (

    <>

    <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 4.5 }}
          transition={{ duration: 20 }}
          >      
          <div className="underline text-red-600 bg-green-700">¡Hola mundo animado! (Animando el tamaño)</div>
      </motion.div>

   
    <motion.div
      style = {{ scaleX: scrollYProgress }}>
      <p>hola hola hola hola hola olaolaolaolaolaolaolaolaolaolaolaolaolaola hola hola hola hola</p>
    </motion.div>
    </>



  );
}

export default Animacion;

//rfc 


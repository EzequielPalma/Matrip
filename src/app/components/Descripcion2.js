import React from 'react';
import { motion } from 'framer-motion';



const Descripcion2 = () => {

  return (
    <motion.div
      initial={{ opacity: 0.1, y: 220, scale: 0.6 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 2.5 }}
      drag
      dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
    >
      <div className="description">
        <div className="text-4xl font-bold text-white mb-4">
          ¡De Madrid al cielo!
        </div>

        
      <p className="text-left text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl text-white">
        Deja que esta ciudad te envuelva con su encanto, <br />
        susurros de historia y la calidez de su gente. 
      </p>
      </div>
    </motion.div>
  );
};

export default Descripcion2;

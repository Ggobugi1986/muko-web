// Import React
import React from 'react';

// Import Other Modules
import { motion } from 'framer-motion';

const Club = (props) => {
  // Destructure Props
  const { title } = props;

  return (
    <motion.div className="absolute inset-0 left-4 p-4" animate={{ left: 0 }}>
      <motion.div className="mb-4">
        <div className="text-2xl font-bold text-gray-900">{title[0]}</div>
        <div className="text-2xl font-bold text-gray-900">{title[1]}</div>
      </motion.div>
      <motion.div
        className="absolute right-0 z-10"
        style={{ right: -40, bottom: -40 }}
        animate={{ right: -20, bottom: -40 }}
      >
        <img src="/assets/images/image1.png" alt="" className="w-60" />
      </motion.div>
    </motion.div>
  );
};

export default Club;

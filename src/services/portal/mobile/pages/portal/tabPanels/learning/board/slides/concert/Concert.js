// Import React
import React from 'react';

// Import Other Modules
import clsx from 'clsx';
import { motion } from 'framer-motion';

const Concert = (props) => {
  // Destructure Props
  const { title } = props;

  return (
    <div className="absolute inset-0">
      <motion.div
        className={clsx(
          'absolute top-8 opacity-0 left-0 h-6 px-3 flex items-center border border-gray-900 rounded-xl'
        )}
        animate={{ left: 16, opacity: 1 }}
      >
        <div className="text-sm font-semibold text-gray-900">공연</div>
      </motion.div>

      <motion.div
        className={clsx('absolute top-16 left-0 opacity-0')}
        animate={{ left: 16, opacity: 1 }}
      >
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
    </div>
  );
};

export default Concert;

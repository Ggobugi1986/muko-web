// Import React
import React from 'react';

// Import Other Modules
import { motion } from 'framer-motion';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

const Concert = ({ title, subtitle }) => {
  return (
    <>
      <motion.div
        className="absolute top-8 left-0 opacity-0"
        animate={{ left: 16, opacity: 1 }}
        transition={{ duration: 0.25 }}
      >
        <div className="flex mb-3">
          <div className="h-6 px-3 flex items-center border border-slate-900 rounded-full">
            <div className="text-sm font-semibold text-slate-900">공연</div>
          </div>
        </div>

        <div className="mb-2">
          <div className="text-2xl font-bold text-slate-900">{title[0]}</div>
          <div className="text-2xl font-bold text-slate-900">{title[1]}</div>
        </div>

        <div className="mb-4">
          <div className="text-lg font-semibold text-purple-500">
            {subtitle}
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <div className="text-sm font-semibold text-slate-900">더보기</div>
          <HiOutlineArrowNarrowRight className="text-slate-900" />
        </div>
      </motion.div>

      <motion.div
        className="absolute right-0"
        style={{ right: -40, bottom: -40 }}
        animate={{ right: -20, bottom: -40 }}
        transition={{ duration: 0.25 }}
      >
        <img src="/assets/images/image1.png" alt="" className="w-60" />
      </motion.div>
    </>
  );
};

export default Concert;

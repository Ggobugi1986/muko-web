// Import React
import React, { useContext } from 'react';

// Import React-Router-Dom
import { useLocation } from 'react-router-dom';

// Import React-Redux
import { useDispatch } from 'react-redux';

// Import Contexts
import { systemContext } from 'contexts';

// Import Hooks
import { useLinkClick } from 'hooks/mobile';

// Import Actions
import { changeActiveTab } from 'services/portal/mobile/slices/uiSlice';

// Import Other Modules
import { motion } from 'framer-motion';

const HeaderA = () => {
  // Set UseLocation Hook
  const location = useLocation();

  // Set UseContext Hooks
  const { appBarTitle } = useContext(systemContext);

  // Set Custom Hooks
  const handleLinkClick = useLinkClick();

  // Set UseDispatch Hook
  const dispatch = useDispatch();

  return (
    <div className="absolute inset-x-0 top-0 h-14 flex items-center px-2">
      <div
        className="w-10 h-10 flex items-center justify-center rounded"
        onClick={() => {
          dispatch(changeActiveTab('now'));
          handleLinkClick(
            '/',
            '뮤코 하우스',
            location.pathname !== '/' && 'down'
          );
        }}
      >
        <motion.div
          className="w-8 h-8 flex items-center justify-center rounded-full bg-yellow-300 opacity-0"
          animate={{ opacity: 1 }}
          transition={{ duration: 0.25 }}
        >
          <div className="w-5">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 16">
              <motion.polygon points="0 8 5 0 10 8 15 0 20 8 20 16 0 16 0 8" />
            </svg>
          </div>
        </motion.div>
      </div>
      <div className="flex-1 flex justify-center px-2">
        <motion.div
          className="text-lg font-bold"
          style={{
            color:
              location.pathname === '/' ? 'rgb(15 23 42)' : 'rgb(241 245 249)',
            opacity: 0,
          }}
          animate={{
            color:
              location.pathname === '/' ? 'rgb(15 23 42)' : 'rgb(241 245 249)',
            opacity: 1,
          }}
          transition={{ duration: 0.25 }}
        >
          {appBarTitle}
        </motion.div>
      </div>
      <div className="w-10 h-10 flex items-center justify-center rounded" />
    </div>
  );
};

export default HeaderA;

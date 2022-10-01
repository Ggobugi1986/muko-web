// Import React
import React, { useContext, useState } from 'react';

// Import Contexts
import { mobileLayoutContext } from 'contexts';

// Import Other Modules
import loadable from '@loadable/component';
import clsx from 'clsx';
import { motion } from 'framer-motion';

const Carousel = ({ slides }) => {
  // Set UseContext Hooks
  const { isTransitionCompleted } = useContext(mobileLayoutContext);

  // Set UseState Hooks
  const [activeIndex, setActiveIndex] = useState(0);

  // Render Components
  const renderSlide = (slide) => {
    const Slide = loadable(() => import(`./slides/${slide.type}`));

    return <Slide key={slide.id} {...slide} />;
  };

  return (
    isTransitionCompleted && (
      <>
        {slides.map(
          (slide, index) => index === activeIndex && renderSlide(slide)
        )}

        <div className="absolute top-8 right-8 flex items-center space-x-2">
          {slides.map((slide, index) => (
            <motion.div
              key={slide.id}
              className={clsx(
                'w-2 h-2 flex rounded-full',
                index === activeIndex ? 'bg-purple-400' : 'bg-white'
              )}
              animate={{
                backgroundColor:
                  index === activeIndex
                    ? 'rgb(192 132 252)'
                    : 'rgb(255 255 255)',
              }}
              transition={{ duration: 0.25 }}
            />
          ))}
        </div>
      </>
    )
  );
};

export default Carousel;

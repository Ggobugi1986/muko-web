// Import React
import React, { useRef } from 'react';

// Import UI
import { PaperA } from 'ui/mobile';

// Import Board
import Board from './board';

// Import Components
import { Articles, Menu } from './components';

const About = () => {
  // Set UseRef Hooks
  const scrollY = useRef(null);

  return (
    <div
      ref={scrollY}
      className="absolute inset-0 top-12 flex flex-col overflow-x-hidden overflow-y-scroll"
    >
      <Board scrollY={scrollY} />
      <PaperA>
        <Menu scrollY={scrollY} />
        <Articles scrollY={scrollY} />
      </PaperA>
    </div>
  );
};

export default About;

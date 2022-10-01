// Import React
import React, { useContext } from 'react';

// Import Contexts
import { mobileLayoutContext } from 'contexts';

// Import UI
import { Carousel } from 'ui/mobile';

const Board = () => {
  // Set UseContext Hooks
  const { boardHeight } = useContext(mobileLayoutContext);

  // Set UI Props
  const carouselProps = {
    slides: [
      {
        id: 0,
        type: 'concert',
        title: ['공연을 소개하는', '문구를 입력해주세요'],
        subtitle: '문구를 입력해주세요',
      },
      {
        id: 1,
        type: 'concert',
        title: ['공연을 소개하는', '문구를 입력해주세요'],
        subtitle: '문구를 입력해주세요',
      },
      {
        id: 2,
        type: 'concert',
        title: ['공연을 소개하는', '문구를 입력해주세요'],
        subtitle: '문구를 입력해주세요',
      },
    ],
  };

  return (
    <div className="relative z-10" style={{ height: boardHeight }}>
      <Carousel {...carouselProps} />
    </div>
  );
};

export default Board;

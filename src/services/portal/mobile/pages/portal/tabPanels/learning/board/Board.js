// Import React
import React, { useContext, useState } from 'react';

// Import React-Redux
import { useSelector } from 'react-redux';

// Import Contexts
import { mobileLayoutContext } from 'contexts';

const Board = ({ scrollY }) => {
  // Set UseContext Hooks
  const { boardHeight } = useContext(mobileLayoutContext);

  // Set UseState Hooks
  const [activeIndex, setActiveIndex] = useState(0);

  // Set Data
  const slides = [
    {
      id: 0,
      type: 'concert',
      title: ['공연을 소개하는', '제목을 입력해주세요!'],
    },
    {
      id: 1,
      type: 'concert',
      title: ['공연을 소개하는', '제목을 입력해주세요!'],
    },
    {
      id: 2,
      type: 'concert',
      title: ['공연을 소개하는', '제목을 입력해주세요!'],
    },
  ];

  return <div className="relative p-4" style={{ height: boardHeight }}></div>;
};

export default Board;

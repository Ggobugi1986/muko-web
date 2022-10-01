// Import React
import React, { useContext, useState } from 'react';

// Import React-Redux
import { useSelector } from 'react-redux';

// Import Contexts
import { mobileLayoutContext } from 'contexts';

// Import Slides
import { Club, Concert } from './slides';

// Import Other Modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';

// Import CSS
import 'swiper/css';

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

  return (
    <div className="relative p-4" style={{ height: boardHeight }}>
      {slides.map((slide) => (
        <div key={slide.id} className="absolute inset-0">
          {slide.id === activeIndex && slide.type === 'club' && (
            <Club {...slide} />
          )}

          {slide.id === activeIndex && slide.type === 'concert' && (
            <Concert {...slide} />
          )}
        </div>
      ))}

      <div className="absolute inset-0 z-50">
        <Swiper
          className="h-full"
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.activeIndex);
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}></SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Board;

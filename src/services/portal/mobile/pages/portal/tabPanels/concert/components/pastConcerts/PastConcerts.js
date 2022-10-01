// Import React
import React from 'react';

// Import Hooks
import { useLinkClick } from 'hooks/mobile';

// Import Other Modules
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

const PastConcerts = ({ scrollY }) => {
  // Set Custom Hooks
  const handleLinkClick = useLinkClick();

  // Set Data
  const clubs = [
    {
      id: 1,
      title: '우리의 여행',
      poster: 'd1c3eacf-f6de-4107-9002-38d8c1bf30b2',
    },
    {
      id: 2,
      title: '동화마을 Festival',
      poster: '3a1bc534-213f-43e0-b65e-173344aec86a',
    },
    {
      id: 3,
      title: '동화마을 Festival',
      poster: '3a1bc534-213f-43e0-b65e-173344aec86a',
    },
  ];

  return (
    <div className="mb-4">
      <div className="flex items-center mb-8 px-4">
        <div className="text-lg font-semibold text-gray-900">지난 공연</div>
      </div>

      <div className="flex pl-4 space-x-4 overflow-x-scroll">
        {clubs.map((club) => (
          <div
            key={club.id}
            className="relative flex-none pt-8"
            onClick={() =>
              handleLinkClick(`/club/${club.id}`, '동아리', 'top', scrollY)
            }
          >
            <div className="w-60 h-60 flex flex-col justify-end p-4 rounded-md bg-yellow-200">
              <div className="flex flex-col items-center mb-2">
                <div className="font-semibold text-slate-900">{club.title}</div>
              </div>
              <div
                className="flex items-center justify-end space-x-2"
                onClick={() =>
                  handleLinkClick(`/articles`, '언론 기사', 'top', scrollY)
                }
              >
                <div className="text-sm font-semibold text-slate-900">
                  더보기
                </div>
                <HiOutlineArrowNarrowRight className="text-slate-900" />
              </div>
            </div>
            <div
              className="absolute inset-0 flex justify-center"
              style={{ top: 0 }}
            >
              <img
                src={`/assets/concertPosters/${club.poster}.png`}
                alt=""
                className="w-36 h-48 rounded"
              />
            </div>
          </div>
        ))}
        <div className="flex-none w-2" />
      </div>
    </div>
  );
};

export default PastConcerts;

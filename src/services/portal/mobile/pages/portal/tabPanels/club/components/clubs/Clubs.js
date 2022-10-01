// Import React
import React from 'react';

// Import Hooks
import { useLinkClick } from 'hooks/mobile';

// Import Other Modules
import { FiRotateCw } from 'react-icons/fi';

const Clubs = ({ scrollY }) => {
  // Set Custom Hooks
  const handleLinkClick = useLinkClick();

  // Set Data
  const clubs = [
    {
      id: 1,
      name: '',
    },
    {
      id: 2,
      name: '',
    },
    {
      id: 3,
      name: '',
    },
  ];

  return (
    <div className="px-4">
      <div className="flex items-center mb-4">
        <div className="text-lg font-semibold text-gray-900">
          동아리 살펴보기
        </div>

        <div className="flex-1 flex justify-end">
          <FiRotateCw className="w-5 h-5 text-gray-900" />
        </div>
      </div>

      <div className="flex space-x-4 overflow-x-scroll">
        {clubs.map((club) => (
          <div
            key={club.id}
            className="flex flex-col"
            onClick={() =>
              handleLinkClick(`/club/${club.id}`, '동아리', 'top', scrollY)
            }
          >
            <div className="flex-none w-40 h-40 mb-2 rounded-md bg-gray-200" />
            <div className="text-lg font-semibold text-gray-900">동아리</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clubs;

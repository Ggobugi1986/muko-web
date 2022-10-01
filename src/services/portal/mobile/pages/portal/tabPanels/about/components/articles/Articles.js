// Import React
import React from 'react';

// Import Hooks
import { useLinkClick } from 'hooks/mobile';

// Import Other Modules
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

const Articles = ({ scrollY }) => {
  // Set Custom Hooks
  const handleLinkClick = useLinkClick();

  // Set Data
  const articles = [
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
    <div className="mb-4">
      <div className="px-4 flex items-center mb-2">
        <div className="text-lg font-semibold text-gray-900">
          언론이 소개한 뮤코
        </div>

        <div className="flex-1 flex justify-end">
          <div
            className="flex items-center justify-end space-x-2"
            onClick={() =>
              handleLinkClick(`/articles`, '언론 기사', 'top', scrollY)
            }
          >
            <div className="text-sm font-semibold text-slate-900">더보기</div>
            <HiOutlineArrowNarrowRight className="text-slate-900" />
          </div>
        </div>
      </div>

      <div className="flex pl-4 space-x-4 overflow-x-scroll">
        {articles.map((article) => (
          <div
            key={article.id}
            className="flex-none w-40 flex flex-col p-2 border border-slate-300 rounded bg-slate-100"
            onClick={() =>
              handleLinkClick(
                `/article/${article.id}`,
                '언론 기사',
                'top',
                scrollY
              )
            }
          >
            <div className="flex justify-center mb-2">
              <div className="text-xs font-bold text-slate-700">
                용인시민신문
              </div>
            </div>
            <div className="h-12 mb-2 overflow-hidden">
              <img
                src="/assets/images/0c3ad174-1491-42fd-b564-4c7eefc6af50.jpeg"
                alt=""
                className="rounded grayscale"
              />
            </div>
            <div className="mb-1">
              <div className="text-sm font-bold text-slate-700 truncate">
                커뮤니티를 일구는 ‘마음토닥토닥 합창단’
              </div>
            </div>
            <div className="mb-2">
              <div className="text-xs font-bold text-slate-500 truncate">
                대한민국은 현재, 코로나19로 이웃과 소통이 단절되고 있다.
              </div>
            </div>
            <div className="flex items-center justify-end space-x-2">
              <div className="text-xs font-semibold text-slate-500">더보기</div>
              <HiOutlineArrowNarrowRight className="text-slate-500" />
            </div>
          </div>
        ))}
        <div className="flex-none w-2" />
      </div>
    </div>
  );
};

export default Articles;

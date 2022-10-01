// Import React
import React, { useEffect, useState } from 'react';

// Import Hooks
import { useLinkClick, usePage } from 'hooks/mobile';

// Import UI
import { HeaderB, PaperB, TabsB } from 'ui/mobile';

const Club = () => {
  // Set UseState Hooks
  const [activeTab, setActiveTab] = useState('introduction');

  // Set Custom Hooks
  const initializePage = usePage();
  const handleLinkCliek = useLinkClick();

  // Set UseEffect Hooks
  useEffect(() => {
    initializePage('동아리 소개');
  }, [initializePage]);

  // Set UI Props
  const headerBProps = {
    title: '동아리 이름',
    leftButton: {
      icon: 'FiChevronDown',
      action: () => handleLinkCliek('/', '뮤코 하우스', 'down'),
    },
    rightButtons: [
      {
        icon: 'FiShare2',
        action: () => {},
      },
    ],
  };

  const tabsBProps = {
    activeTab: activeTab,
    tabs: [
      {
        id: 'introduction',
        label: '소개',
        action: () => setActiveTab('introduction'),
      },
      {
        id: 'teacher',
        label: '선생님',
        action: () => setActiveTab('teacher'),
      },
      {
        id: 'news',
        label: '소식',
        action: () => setActiveTab('news'),
      },
    ],
    layoutId: 'clubTabsIndicator',
  };

  return (
    <PaperB>
      <HeaderB {...headerBProps} />
      <div className="absolute inset-0 top-12 overflow-scroll">
        <div className="h-40 m-4 rounded-md bg-gray-300 overflow-hidden">
          <img src="/assets/images/image2.jpg" alt="" />
        </div>
        <TabsB {...tabsBProps} />
      </div>
    </PaperB>
  );
};

export default Club;

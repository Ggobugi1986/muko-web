// Import React
import React, { useEffect } from 'react';

// Import React-Redux
import { useDispatch, useSelector } from 'react-redux';

// Import Hooks
import { usePage } from 'hooks/mobile';

// Import Store
import { withReducer } from 'store';

// Import UI
import { TabsA } from 'ui/mobile';

// Import Reducer
import portalReducer from 'services/portal/mobile/slices';

// Import Actions
import { changeActiveTab } from 'services/portal/mobile/slices/uiSlice';

// Import Tab Panels
import { About, Club, Concert, Learning, Now } from './tabPanels';

const Portal = () => {
  // Set UseSelector Hooks
  const { activeTab } = useSelector((state) => state.portal.ui);

  // Set Custom Hooks
  const initializePage = usePage();

  // Set UseDispatch Hook
  const dispatch = useDispatch();

  // Set UseEffect Hooks
  useEffect(() => {
    initializePage('뮤코 하우스');
  }, [initializePage]);

  // Set UI Props
  const tabsAProps = {
    activeTab: activeTab,
    tabs: [
      {
        id: 'now',
        label: 'NOW',
        action: () => dispatch(changeActiveTab('now')),
      },
      {
        id: 'club',
        label: '동아리',
        action: () => dispatch(changeActiveTab('club')),
      },
      {
        id: 'learning',
        label: '배움',
        action: () => dispatch(changeActiveTab('learning')),
      },
      {
        id: 'concert',
        label: '공연',
        action: () => dispatch(changeActiveTab('concert')),
      },
      {
        id: 'store',
        label: '스토어',
        action: () => dispatch(changeActiveTab('store')),
      },
      {
        id: 'about',
        label: '소개',
        action: () => dispatch(changeActiveTab('about')),
      },
    ],
    layoutId: 'portalTabsIndicator',
  };

  return (
    <div className="absolute inset-0 top-14">
      <TabsA {...tabsAProps} />
      {activeTab === 'about' && <About />}
      {activeTab === 'club' && <Club />}
      {activeTab === 'concert' && <Concert />}
      {activeTab === 'learning' && <Learning />}
      {activeTab === 'now' && <Now />}
    </div>
  );
};

export default withReducer('portal', portalReducer)(Portal);

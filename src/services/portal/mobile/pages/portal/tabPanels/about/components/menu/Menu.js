// Import React
import React from 'react';

const Menu = () => {
  // Set Data
  const menu = [
    {
      label: '뮤코 이야기',
    },
    {
      label: '뮤코 사람들',
    },
    {
      label: '뮤코 조직도',
    },
    {
      label: '뮤코의 역사',
    },
  ];

  return (
    <div className="flex flex-wrap p-3 mb-4">
      {menu.map((menuItem, index) => (
        <div key={index} className="flex-none w-1/2 h-12 p-1">
          <div className="h-full flex items-center justify-center rounded bg-yellow-200">
            <div className="font-semibold text-slate-900">{menuItem.label}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Menu;

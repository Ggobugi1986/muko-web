// Import React
import React from 'react';

// Import UI
import { Icon } from 'ui/core';

const HeaderB = ({ title, leftButton, rightButtons }) => {
  return (
    <div className="absolute inset-x-0 top-0 h-14 flex items-center px-2">
      {leftButton && (
        <div
          className="w-10 h-10 flex items-center justify-center rounded"
          onClick={leftButton.action}
        >
          <Icon icon={leftButton.icon} className="w-6 h-6 text-slate-900" />
        </div>
      )}
      <div className="flex-1 px-2">
        <div className="text-lg font-bold text-slate-900">{title}</div>
      </div>
      {rightButtons &&
        rightButtons.map((button, index) => (
          <div
            key={index}
            className="w-10 h-10 flex items-center justify-center rounded"
            onClick={button.action}
          >
            <Icon icon={button.icon} className="w-6 h-6 text-slate-900" />
          </div>
        ))}
    </div>
  );
};

export default HeaderB;

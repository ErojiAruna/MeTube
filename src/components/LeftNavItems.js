import React from 'react';

const LeftNavItems = ({ text, icon, className, action }) => {
  return (
    <div
      className={
        'text-sm cursor-pointer h-10 flex items-center px-3 mb-[1px] rounded-lg hover:bg-gray-100 ' +
        className
      }
      onClick={action}
    >
      <span className="text-base mr-5">{icon}</span>
      {text}
    </div>
  );
};

export default LeftNavItems;

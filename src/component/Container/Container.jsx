import React from 'react';

export const Container = ({
  className = '',
  children,
  applyPadding = 'both',
}) => {
  let padding = '';
  switch (applyPadding) {
    case 'both':
      padding = '2xl:px-[100px] px-[40px]';
      break;
    case 'left':
      padding = '2xl:pl-[100px] pl-[40px]';
      break;
    case 'right':
      padding = '2xl:pr-[100px] pr-[40px]';
      break;
    case 'none':
      padding = '';
      break;
    default:
      return padding;
  }
  return <div className={`${padding} ${className}`}>{children}</div>;
};

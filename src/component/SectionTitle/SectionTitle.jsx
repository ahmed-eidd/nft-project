import React from 'react';

const SectionTitle = ({ children, className='' }) => {
  return (
    <h2
      className={`text-[32px] font-semibold sm:text-[48px] 2xl:text-[64px] leading-relaxed ${className}`}
    >
      {children}
    </h2>
  );
};

export default SectionTitle;

import React from 'react';

const Button = ({ children, className = '', onClick }) => {
  const tailwindStyles = {
    background:
      'bg-gradient-to-r from-primary-violet bg-[length:1000%_auto] to-primary-mint',
    hover:
      'hover:bg-[length:100%_auto] transition-all ease-in-out duration-300',
    active: 'active:from-primary-mint to-primary-mint',
    padding: 'px-9 py-2',
    font: 'font-medium',
    shadow: 'shadow-primary',
    mixBlend: 'mix-blend-normal',
    radius: 'rounded',
  };

  return (
    <button
      onClick={onClick}
      className={`${[...Object.values(tailwindStyles)].join(
        ' '
      )} active:bg-[length:100%_auto] ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;

import React from 'react';
import LogoImg from '../../assets/logo.png';

const Logo = ({className = ''}) => {
  return (
    <div className={ `flex items-center justify-between ${className}` }>
      <img src={LogoImg} alt='logo' className='pr-8' />
      <p className='text-xl font-bold'>LOGO</p>
    </div>
  );
};

export default Logo;

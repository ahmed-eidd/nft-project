import React, { useState } from 'react';
import Logo from '../Logo/Logo';
import BurgerIcon from '../../assets/burderIcon.png';
import { Container } from '../Container/Container';

const BurderNav = ({ onToggle }) => {
  return (
    <Container className='flex items-center justify-between py-4 shadow-footer'>
      <Logo />
      <img
        onClick={onToggle}
        src={BurgerIcon}
        alt='burder icon'
        className='h-[22px] w-[28px] cursor-pointer'
      />
    </Container>
  );
};

export default BurderNav;

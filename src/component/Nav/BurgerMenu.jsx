import React from 'react';
import CloseImg from '../../assets/closeIcon.png';
import Button from '../Button/Button';
import Logo from '../Logo/Logo';

const BurgerLinks = ({ to = '#', text }) => {
  return (
    <a className='z-10 list-none text-[24px] font-semibold' href={to}>
      {text}
    </a>
  );
};

const BurgerMenu = ({ open, onToggle }) => {
  return (
    <div
      className={`fixed top-0 z-50 h-screen w-screen ${
        open ? 'translate-x-0' : 'translate-x-full'
      } flex flex-col items-center justify-center gap-[40px] bg-primary-gray transition-all`}
    >

      {/* <-- Close Menu Icon --> */}
      <img
        src={CloseImg}
        alt='close'
        className='absolute top-[40px] right-[50px] h-[28px] w-[28px] cursor-pointer'
        onClick={onToggle}
      />

      {/* <-- Gradient --> */}
      <div className='absolute left-[165px] top-[100px] z-0 h-[632px] w-[252px] rotate-[-29.24deg] bg-gradient-to-r from-primary-mint to-primary-violet blur-[100px] sm:w-[300px]  md:h-[996px] 2xl:left-[115.76px]  2xl:h-[1200px] 2xl:w-[550px] 2xl:blur-[150px]'></div>

      {/* <-- Logo --> */}
      <Logo className='z-10 mb-[30px]' />

      {/* <-- Links --> */}
      <BurgerLinks text='About' />
      <BurgerLinks text='Ourt tool' />
      <BurgerLinks text='Features' />
      
      {/* <-- Button --> */}
      <Button className='z-10 mt-[30px]'>Connect wallet</Button>
      
    </div>
  );
};

export default BurgerMenu;

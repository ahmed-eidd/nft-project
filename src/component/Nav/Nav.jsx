import React from 'react';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import Button from '../Button/Button';
import { Container } from '../Container/Container';
import Logo from '../Logo/Logo';
import BurderNav from './BurgerNav';

const NavLinks = ({ text, to = '#' }) => {
  return (
    <li className='transition-all hover:text-primary-violet'>
      <a className='' href={to}>
        {text}
      </a>
    </li>
  );
};

const Nav = () => {
  return (
    <Container className='flex w-full items-center justify-between py-9'>
      <div className='flex items-center justify-around sm:gap-[70px] 2xl:gap-[100px]'>
        
        {/* <-- Logo --> */}
        <Logo />

        {/* <-- Links --> */}
        <ul className='flex items-center justify-between sm:gap-[50px] 2xl:gap-[70px]'>
          <NavLinks text='About' />
          <NavLinks text='Our tool' />
          <NavLinks text='Features' />
        </ul>
      </div>

      {/* <-- Button --> */}
      <Button>Connect wallet</Button>
    </Container>
  );
};

export default Nav;

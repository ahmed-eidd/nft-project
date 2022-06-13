import React, { useState } from 'react';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import Footer from '../Footer/Footer';
import BurgerMenu from '../Nav/BurgerMenu';
import BurderNav from '../Nav/BurgerNav';
import Nav from '../Nav/Nav';

const Layout = ({ children }) => {
  const { _, width } = useWindowDimensions();
  const [open, setOpen] = useState(false);
  const onToggleHandler = () => {
    setOpen(!open);
  };
  return (
    <div className='min-h-screen overflow-hidden bg-primary-gray font-[Saira] text-white sm:text-sm 2xl:text-base'>
      {/* <-- Burger Nav Menu & Nav --> */}
      {width < 717 ? (
        <>
          <BurderNav onToggle={onToggleHandler} />{' '}
          <BurgerMenu onToggle={onToggleHandler} open={open} />
        </>
      ) : (
        <Nav />
      )}

      {/* <-- Children --> */}
      {children}

      {/* <-- Footer --> */}
      <Footer />
    </div>
  );
};

export default Layout;

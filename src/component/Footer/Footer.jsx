import React from 'react';
import { Container } from '../Container/Container';
import Logo from '../Logo/Logo';
import FacebookIcon from '../../assets/Facebook.png';
import TwitterIcon from '../../assets/Twitter.png';
import LinkedinIcon from '../../assets/Linkedin.png';
import InstagramIcon from '../../assets/instagram.png';
import useWindowDimensions from '../../hooks/useWindowDimensions';

const Footer = () => {
  const { _, width } = useWindowDimensions();
  return (
    <Container className='mt-[100px] flex h-[90px] items-center justify-between border-t border-[#535C88] shadow-footer'>
      <Logo />
      <div className='flex flex-col items-end justify-end gap-[5px]'>
        {/* <-- if the width of the screen is less than 650px we show another ui for the footer --> */}
        {width > 650 && (
          <>
            {/* <-- Soical media icons --> */}
            <div className='flex items-center justify-center gap-[15px]'>
              <img
                src={TwitterIcon}
                alt='twitter'
                className='h-[25px] w-[25px]'
              />

              <img
                src={FacebookIcon}
                alt='facebook'
                className='h-[25px] w-[25px]'
              />
              <img
                src={InstagramIcon}
                alt='instagram'
                className='h-[25px] w-[25px]'
              />
              <img
                src={LinkedinIcon}
                alt='linkedin'
                className='h-[25px] w-[25px]'
              />
            </div>
          </>
        )}

        {/* <-- Copyright --> */}
        <p className=''>
          {width > 650 ? '©2022 - Form | All right reserved' : 'Copyright ©'}
        </p>
      </div>
    </Container>
  );
};

export default Footer;

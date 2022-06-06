import React from 'react';
import HeaderImg from '../../../assets/headerImage.png';
import Button from '../../../component/Button/Button';
import { Container } from '../../../component/Container/Container';
import useWindowDimensions from '../../../hooks/useWindowDimensions';

const Header = () => {
  const { _, width } = useWindowDimensions();
  return (
    <>
      <Container
        applyPadding={width > 1500 ? 'left' : 'both'}
        className='relative mt-[64px]'
      >
        {/* <-- linear Gradient --> */}
        <div className='absolute left-[165px] top-[-15.34px] z-0 h-[632px] w-[152px] rotate-[-29.24deg] bg-gradient-to-r from-primary-mint to-primary-violet blur-[75px] sm:w-[300px]  md:h-[996px] 2xl:left-[115.76px]  2xl:h-[1200px] 2xl:w-[550px] 2xl:blur-[150px]'></div>

        {/* <-- Header Text & Image Container --> */}
        <div className='z-10 flex flex-col items-center justify-between gap-[70px]  2xl:flex-row'>
          {/* <-- Header Text Container --> */}
          <div className='z-10 sm:mr-auto'>
            {/* <-- Header Main Title --> */}
            <h1 className='mb-8 text-4xl font-semibold sm:text-6xl 2xl:text-[88px]'>
              Discover, collect <br /> and sell creative <br /> NFTs
            </h1>

            {/* <-- Header Main Text --> */}
            <p className='sm:text-base 2xl:text-xl'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar
              amet <br /> tellus urna id dui est magna placerat massa. Sit amet
              sit netus.
            </p>

            {/* <-- Header Main Button --> */}
            <Button className='mt-10'>Learn More</Button>
          </div>

          {/* <-- Header Imgage --> */}
          <div className='mr-[22px] flex h-[336px] w-[336px] flex-col items-center justify-center gap-[27px] rounded-[10px] sm:ml-auto sm:h-[553px] sm:w-[551px] 2xl:h-[863px] 2xl:w-[860px]'>
            <img
              src={HeaderImg}
              alt='header'
              className='z-10 h-full w-full rounded-[10px]'
            />

            {/* <-- Header Image indicator --> */}
            <div className='flex items-center justify-center gap-[25px]'>
              <div className='h-[7px] w-[7px] rounded-full bg-primary-violet'></div>
              <div className='h-[7px] w-[7px] rounded-full bg-gray-600'></div>
              <div className='h-[7px] w-[7px] rounded-full bg-gray-600'></div>
              <div className='h-[7px] w-[7px] rounded-full bg-gray-600'></div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Header;

import React from 'react';
import { Container } from '../../../component/Container/Container';
import TextIcon from '../../../component/TextIcon/TextIcon';
import SectionTitle from '../../../component/SectionTitle/SectionTitle';
import Icon1 from '../../../assets/icon-1.png';
import Icon2 from '../../../assets/icon-2.png';
import Icon3 from '../../../assets/icon-3.png';
import Icon4 from '../../../assets/icon-4.png';
import Icon5 from '../../../assets/icon-5.png';
import Icon6 from '../../../assets/icon-6.png';
import LaptopImg from '../../../assets/featuresImg.png';
import useWindowDimensions from '../../../hooks/useWindowDimensions';

const SomeFeatures = () => {
  const { _, width } = useWindowDimensions();

  console.log(width);
  return (
    <Container
      applyPadding='right'
      className='mt-[170px] flex flex-col-reverse items-start gap-y-20 pr-0 xl:flex-row xl:justify-between '
    >

      {/* <-- Section Laptop Image --> */}
      <div
        className='relative sm:h-[504px] sm:w-[704px] 
      2xl:h-[732px] 2xl:w-[1302px] 
      '
      >
        <img
          src={LaptopImg}
          className='relative z-10 h-full w-full'
          alt='laptop'
        />

        {/* <-- Gradient --> */}
        <div className='absolute left-[200px] top-[-100px] z-0 h-[400px] w-[190px] rotate-[-77.37deg] bg-primary-mint blur-[150px]  md:top-[-150px] md:h-[705.63px] md:w-[333px]'></div>

      </div>

      <Container applyPadding={width < 1500 ? 'both' : 'none'}>

        {/* <-- Section Title --> */}
        <SectionTitle className='mb-[40px]'>Some features</SectionTitle>

        {/* <-- Section Icon Text Container --> */}
        <div className='grid grid-cols-1 gap-x-[111px] gap-y-[40px] sm:grid-cols-2 md:gap-y-[70px]'>
          <TextIcon
            icon={Icon1}
            title='Lorem ipsum dolor'
            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. A vel suspendisse faucibus'
          />
          <TextIcon
            icon={Icon2}
            title='Lorem ipsum dolor'
            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. A vel suspendisse faucibus'
          />
          <TextIcon
            icon={Icon3}
            title='Lorem ipsum dolor'
            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. A vel suspendisse faucibus'
          />
          <TextIcon
            icon={Icon4}
            title='Lorem ipsum dolor'
            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. A vel suspendisse faucibus'
          />
          <TextIcon
            icon={Icon5}
            title='Lorem ipsum dolor'
            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. A vel suspendisse faucibus'
          />
          <TextIcon
            icon={Icon6}
            title='Lorem ipsum dolor'
            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. A vel suspendisse faucibus'
          />
        </div>
      </Container>
    </Container>
  );
};

export default SomeFeatures;

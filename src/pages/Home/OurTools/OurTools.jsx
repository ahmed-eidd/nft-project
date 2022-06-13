import React from 'react';
import { Container } from '../../../component/Container/Container';
import TextIcon from '../../../component/TextIcon/TextIcon';
import SectionTitle from '../../../component/SectionTitle/SectionTitle';
import HalfPhoneImg from '../../../assets/halfPhone.png';
import FullPhoneImg from '../../../assets/fullPhone.png';
import Icon1 from '../../../assets/icon-1.png';
import Icon2 from '../../../assets/icon-2.png';
import Icon3 from '../../../assets/icon-3.png';
import Icon4 from '../../../assets/icon-4.png';
import Icon5 from '../../../assets/icon-5.png';
import Icon6 from '../../../assets/icon-6.png';
import useWindowDimensions from '../../../hooks/useWindowDimensions';

const OurTools = () => {
  const { _, width } = useWindowDimensions();

  return (
    <Container className='relative mt-[170px] '>
      {/* <-- Section Title --> */}
      <SectionTitle className='mb-[40px]'>Our Tool</SectionTitle>
      {width < 1500 && width > 680 ? ( // check for the width of the scree to change the main layout
        <>


          {/* <-- the UI with the half phone pictre --> */}

          
          <div className='relative flex justify-between '>
            
            {/* <-- the textIcon container --> */}
            <div className='flex max-w-[300px] flex-col gap-y-[40px]'>
              <TextIcon
                title='Lorem ipsum dolor'
                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. A vel suspendisse faucibus'
                icon={Icon1}
              />
              <TextIcon
                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. A vel suspendisse faucibus'
                title='Lorem ipsum dolor'
                icon={Icon2}
              />
              <TextIcon
                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. A vel suspendisse faucibus'
                title='Lorem ipsum dolor'
                icon={Icon3}
              />
              <TextIcon
                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. A vel suspendisse faucibus'
                title='Lorem ipsum dolor'
                icon={Icon4}
              />{' '}
              <TextIcon
                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. A vel suspendisse faucibus'
                title='Lorem ipsum dolor'
                icon={Icon5}
              />
              <TextIcon
                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. A vel suspendisse faucibus'
                title='Lorem ipsum dolor'
                icon={Icon6}
              />
            </div>

            {/* <-- half phone picutre --> */}
            <div className='absolute right-[-170px] top-[-15px] h-[924px] w-[490px]'>
              <img src={HalfPhoneImg} className='h-full' alt='' />
            </div>

          </div>
        </>
      ) : (
        <>


          {/* <-- the UI with the full phone pictre --> */}


          <div className='flex flex-col items-center justify-center gap-[30px] md:order-1 md:flex-row xl:gap-[0]'>
            
            {/* <-- Section left Icon Text Cotainer --> */}
            <div className='order-2 flex flex-col items-center justify-center gap-[40px] md:order-1 xl:gap-[80px]'>
              <TextIcon
                direction={width < 650 ? 'right' : 'left'}
                title='Lorem ipsum dolor'
                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. A vel suspendisse faucibus'
                icon={Icon1}
              />
              <TextIcon
                direction={width < 650 ? 'right' : 'left'}
                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. A vel suspendisse faucibus'
                title='Lorem ipsum dolor'
                icon={Icon2}
              />
              <TextIcon
                direction={width < 650 ? 'right' : 'left'}
                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. A vel suspendisse faucibus'
                title='Lorem ipsum dolor'
                icon={Icon3}
              />
            </div>

            {/* <-- full phone img --> */}
            <div className='order-1  sm:pl-[109px] sm:pr-[61px] md:order-2'>
              <div className='absolute left-[5%] top-[10%] z-0 h-[183px] w-[411px] rotate-[-39.54deg] bg-primary-violet blur-[150px] xl:left-[35%] xl:top-[40%] xl:h-[285.08px] xl:w-[640.64px]'></div>
              <img
                src={FullPhoneImg}
                className='relative z-10 h-[383px] w-[204px] xl:h-[716px] xl:w-[380px]'
                alt='our tool'
              />
            </div>

            {/* <-- Section right Icon Text Cotainer --> */}
            <div className=' order-3 flex flex-col items-center justify-center gap-[40px] xl:gap-[80px]'>
              <TextIcon
                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. A vel suspendisse faucibus'
                title='Lorem ipsum dolor'
                icon={Icon4}
              />{' '}
              <TextIcon
                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. A vel suspendisse faucibus'
                title='Lorem ipsum dolor'
                icon={Icon5}
              />
              <TextIcon
                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. A vel suspendisse faucibus'
                title='Lorem ipsum dolor'
                icon={Icon6}
              />
            </div>
          </div>
        </>
      )}
    </Container>
  );
};

export default OurTools;

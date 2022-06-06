import React from 'react';
import ColoredText from '../../../component/ColoredText/ColoredText';
import { Container } from '../../../component/Container/Container';
import SectionTitle from '../../../component/SectionTitle/SectionTitle';

const WhoWeAre = () => {
  return (
    <Container
      className='z-10 mt-[128px] md:mt-[350px] flex h-full flex-col items-start 
    justify-between gap-[50px] 2xl:flex-row'
    >
      <div className='z-10  h-auto'>

        {/* <-- Section title --> */}
        <SectionTitle className='z-10 mb-[40px]'>Who We Are?</SectionTitle>

        {/* <-- Section text --> */}
        <p className='text-left 2xl:mb-7 2xl:w-[569px] 2xl:text-base'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis
          sodales habitasse curabitur dolor ut consectetur eleifend non. Iaculis
          morbi mi pellentesque praesent. Consectetur eget ultrices odio
          adipiscing condimentum placerat viverra. Urna, nibh id gravida
          vivamus. Vulputate arcu in imperdiet praesent. Faucibus tortor tempor
          iaculis maecenas mauris.
        </p>

        {/* <-- Section text --> */}
        <p className='text-left 2xl:mb-7 2xl:w-[569px] 2xl:text-base'>
          A lacus eleifend eu augue tincidunt aliquet egestas turpis massa.
          Augue sagittis viverra nunc, hac nisl accumsan, mi odio nibh. Urna
          elementum elementum id commodo elit eu ultricies eget aliquam.
          Malesuada sodales nisi sit mollis mi dignissim nulla etiam. Feugiat mi
          velit accumsan magna. Lectus enim in nam proin neque et sem. Eget
          tincidunt fringilla cras velit enim lorem.
        </p>
      </div>

      {/* <-- Section Colored Text Container --> */}
      <div className='grid grid-cols-2 gap-x-[20px] gap-y-[40px] mx-auto xl:mx-0 sm:w-full sm:grid-cols-4 sm:gap-[64px] 2xl:w-auto 2xl:grid-cols-[repeat(2,_195px)] 2xl:gap-[100px]'>
        <ColoredText
          text='100+'
          paragraph='In adipiscing sed aliquet consectetur.'
          color='rose'
        />
        <ColoredText
          text='100+'
          paragraph='In adipiscing sed aliquet consectetur.'
          color='mint'
        />
        <ColoredText
          text='100+'
          paragraph='In adipiscing sed aliquet consectetur.'
          color='green'
        />
        <ColoredText
          text='100+'
          paragraph='In adipiscing sed aliquet consectetur.'
          color='violet'
        />
      </div>
      
    </Container>
  );
};

export default WhoWeAre;

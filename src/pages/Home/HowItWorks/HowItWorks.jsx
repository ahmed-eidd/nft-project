import React from 'react';
import { Container } from '../../../component/Container/Container';
import NumberedText from '../../../component/NumberedText/NumberedText';
import SectionTitle from '../../../component/SectionTitle/SectionTitle';

const HowItWorks = () => {
  return (
    <Container applyPadding='both' className='mt-[170px]'>
      {/* <-- Section Title -->  */}
      <SectionTitle className='mb-[40px] '>How It Works?</SectionTitle>

      {/* <-- Section NumberedText Container -->  */}
      <div className='flex flex-col gap-[40px] sm:grid sm:grid-cols-2 xl:flex-row xl:justify-between 2xl:flex 2xl:items-center'>
        <NumberedText
          number={1}
          title='Lorem ipsum dolor'
          text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. A vel suspendisse faucibus'
          titleColor='mint'
        />
        <NumberedText
          number={2}
          title='Lorem ipsum dolor'
          text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. A vel suspendisse faucibus'
          titleColor='violet'
        />
        <NumberedText
          number={3}
          title='Lorem ipsum dolor'
          text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. A vel suspendisse faucibus'
          titleColor='green'
        />
        <NumberedText
          number={4}
          title='Lorem ipsum dolor'
          text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. A vel suspendisse faucibus'
          titleColor='rose'
        />
      </div>
    </Container>
  );
};

export default HowItWorks;

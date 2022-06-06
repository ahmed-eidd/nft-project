import React from 'react';

const NumberedText = ({ title, text, number, titleColor }) => {
  let color = '';
  switch (titleColor) {
    case 'rose': {
      color = 'text-primary-rose';
      break;
    }
    case 'mint': {
      color = 'text-primary-mint';
      break;
    }
    case 'green': {
      color = 'text-primary-green';
      break;
    }
    case 'violet': {
      color = 'text-primary-violet';
      break;
    }
    default:
      break;
  }
  return (
    <div className='relative sm:w-[300px] 2xl:w-[350px]'>
      {/* <-- Number Start --> */}
      <p className='mb-[-55px] text-8xl font-semibold opacity-10 sm:mb-[-45px] sm:text-[110px] 2xl:mb-[-60px] 2xl:text-9xl'>
        {number < 10 ? `0${number}.` : `${number}.`}
      </p>
      {/* <-- Number End --> */}

      <div className='pl-[20px] sm:pl-[20px] 2xl:pl-[30px]'>
        {/* <-- Title start --> */}
        <p
          className={`${color} mb-[20px] text-[20px] font-semibold  sm:mb-[15px] sm:text-[22px] `}
        >
          {title}
        </p>
        {/* <-- Title End --> */}

        {/* <-- Text Start --> */}
        <p className='text-sm leading-[160%] sm:text-base'>{text}</p>
        {/* <-- Text End --> */}
      </div>
    </div>
  );
};

export default NumberedText;

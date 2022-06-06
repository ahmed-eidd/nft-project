import React from 'react';

const TextIcon = ({ icon, title, text, direction = 'right', className }) => {

  let dirStyle = ''; 
  
  /* Setting the value of the variable dirStyle to either 'items-end' or 'items-start' depending on the
  value of the variable direction. */
  switch (direction) {
    case 'left': {
      dirStyle = 'items-end';
      break;
    }
    case 'right': {
      dirStyle = 'items-start';
      break;
    }
    default:
      break;
  }
  return (
    <div
      className={`flex flex-col justify-between gap-[10px] md:w-[270px] 2xl:w-[320px] ${dirStyle} ${className}`}
    >
      
      {/* <-- Container of Icon & Title --> */}
      <div
        className={`flex items-center justify-center  ${dirStyle} ${
          direction === 'left' ? 'flex-row-reverse' : 'flex-row'
        } gap-5`}
      >
        <div className='flex h-[55px] w-[53px] items-center justify-center rounded-lg bg-[#31323A] '>
          <img className='' src={icon} alt='icon' />
        </div>
        <h3 className='text-[20px] font-semibold sm:text-[22px]'>{title}</h3>
      </div>

      {/* <-- Text --> */}

      <p
        className={`${
          direction === 'left' ? 'text-right' : 'text-left'
        } text-sm md:text-base`}
      >
        {text}
      </p>

    </div>
  );
};

export default TextIcon;

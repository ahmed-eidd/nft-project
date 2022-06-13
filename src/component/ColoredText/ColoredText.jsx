import React from 'react';

const ColoredText = ({ text, paragraph, color }) => {
  let textColor = '';
  switch (color) {
    case 'rose': {
      textColor = 'text-primary-rose';
      break;
    }
    case 'mint': {
      textColor = 'text-primary-mint';
      break;
    }
    case 'green': {
      textColor = 'text-primary-green';
      break;
    }
    case 'violet': {
      textColor = 'text-primary-violet';
      break;
    }
    default:
      break;
  }
  return (
    <div
      className={`flex w-[157px] flex-col items-start justify-center gap-[15px] sm:w-[115px] 2xl:w-[195px] `}
    >
      {/* <-- Text Start --> */}
      <p className={` text-[48px] font-semibold 2xl:text-[64px] leading-relaxed ${textColor}`}>
        {text}
      </p>
      {/* <-- Paragraph Start --> */}
      <p>{paragraph}</p>
    </div>
  );
};

export default ColoredText;

import React from 'react';

const Box = ({ text }) => {
  return (
    <div className='box p-14 relative border-4 border-solid border-green-500 rounded-lg'>
      <p className='text-white break-words'>{text}</p>
    </div>
  );
};

export default Box;
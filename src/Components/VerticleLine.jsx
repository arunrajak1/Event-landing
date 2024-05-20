import React from 'react';
import { ReactTyped } from 'react-typed';

const VerticleLine = () => {
  return (
    <div className="flex justify-center items-center  bg-violet-300 h-screen">
      <div className="relative w-10 h-4/5">
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-full rotate-90 whitespace-nowrap text-white animate-scroll">
        
        <ReactTyped
          strings={['Collection: Meta lives Welcome to my site! Enjoy your stay! Collection: Meta lives Welcome to my site! Enjoy your stay! Collection: Meta lives collection: Meta lives Collection: Meta lives collection: Meta lives '
          ]}
          
          typeSpeed={10}
          backSpeed={30}
          loop
          backDelay={2000} 
        
          className='text-gray-800 font-bold text-xl '
        />
      </div>
    </div>
    </div>
  );
}

export default VerticleLine;

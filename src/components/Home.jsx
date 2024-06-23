import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#041f27f5]'> 
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-white-600 text-[#8892b0]'>Hi, I'm</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          Graylin Chawanji
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
          Full-stack Developer.
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
         with a passion for crafting visually appealing and highly functional and interactive web applications. 
        </p>
        <div>
        </div>
      </div>
    </div>
  );
};

export default Home;

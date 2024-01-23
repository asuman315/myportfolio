import React from 'react';
import Intro from './Intro';
import Skills from './Skills';
import Zoom from 'react-reveal/Zoom';

const About = () => {
  return (
    <section name='About' className='max-w-6xl mx-auto mt-8'>
      <div className=''>
        <Zoom left>
          <h3 className='text-center mt-4 font-bold tracking-wide'>ABOUT</h3>
        </Zoom>
        <Zoom left>
          <h2 className='text-center font-bold text-3xl text-primary-2'>
            Personal Info
          </h2>
        </Zoom>
      </div>
      <div className='md:flex'>
        <Zoom left>
          <Intro />
        </Zoom>
        <Zoom left>
          <Skills />
        </Zoom>
      </div>
    </section>
  );
};

export default About;

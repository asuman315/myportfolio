import React from 'react';
import Intro from './Intro';
import Skills from './Skills';
import Zoom from 'react-reveal/Zoom';

import Slide from 'react-reveal/Slide';

const About = () => {
  return (
    <section name='About' className='max-w-6xl mx-auto mt-16'>
      <div className=''>
        <Slide right>
          <h3 className='text-center mt-4 font-bold tracking-wide'>ABOUT</h3>
        </Slide>
        <Slide left>
          <h2 className='text-center font-bold text-3xl text-primary-2'>
            Personal Info
          </h2>
        </Slide>
      </div>
      <div className='md:flex'>
        <Zoom left>
          <Intro />
        </Zoom>
        <Zoom right>
          <Skills />
        </Zoom>
      </div>
    </section>
  );
};

export default About;

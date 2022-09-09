import React from 'react';
import Image from './Image';
import Text from './Text';

const Hero = () => {
  return (
    <section name='Home' className='flex pt-24 max-w-7xl mx-auto'>
        <Text />
      <div className='absolute md:ml h-[80%] flex items-center'>
        <Image className='' />
      </div>
    </section>
  );
};

export default Hero;

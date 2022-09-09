import React from 'react';
import largeImage from '../../public/assets/laptop-large.jpg';
import webDevUndraw from '../../public/assets/web-dev-undraw.svg';
import Image from 'next/image';

const ImageComponent = () => {
  return (
    <div>
      <Image
        src={webDevUndraw}
        alt='laptop'
        width={500}
        height={500}
        className='lg:h-[350px] w-full mb-3'
      />
    </div>
    // <div className='absolute bg-[#1c1917]'>
    //   <div className='md:hidden h-screen w-screen object-cover mix-blend-overlay'>
    //     <Image src={smallImage} layout='fill' />
    //   </div>
    //   <div className='md:hidden h-screen w-screen object-cover mix-blend-overlay'>
    //     <Image
    //       src={largeImage}
    //       width={800}
    //       height={1000}
    //     />
    //   </div>
    // </div>
  );
};

export default ImageComponent;

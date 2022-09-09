import React from 'react';
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
  );
};

export default ImageComponent;

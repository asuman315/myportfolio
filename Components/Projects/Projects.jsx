import React from 'react';
import ProjectOne from './ProjectOne';
import ProjectTwo from './ProjectTwo';
import ProjectThree from './ProjectThree';
import Roll from 'react-reveal/Roll';
import nextJsImg from '../../public/assets/next.svg';
import Image from 'next/image';

const Projects = () => {
  return (
    <div name='Projects' className='mt-16 px-6 relative'>
      <Image src={nextJsImg} alt='nextjs' width={50} height={50} className='w-[250px] lg:w-[350px] absolute top-[-100px] lg:top-[-250px] right-[70px]' />
      <Roll left>
        <h2 className='text-center font-bold text-3xl text-primary-2'>
          Projects
        </h2>
      </Roll>
      <div className='md:grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12'>
        <ProjectTwo />
        <ProjectThree />
        <ProjectOne />
      </div>
    </div>
  );
};

export default Projects;

import React from 'react'

const Skills = () => {
 const technologies = ['HTML5', 'CSS3', 'javascript', 'react', 'nextjs', 'tailwind css', 'nodejs', 'mongodb']
  return (
    <div className='pt-2 px-6 text-primary-2 md:pt-10'>
      <p className='font-bold text-lg'>Technologies</p>
      <div>
        {technologies.map((technology, index) => {
          return (
            <button
              key={index}
              className='border-0 outline-none bg-primary-3 mr-4 my-2 px-3 py-2 uppercase tracking-wide font-bold rounded-md  cursor-none'>
              {technology}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Skills
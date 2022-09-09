import React from 'react'
import { Link } from 'react-scroll';

const DesktopNav = () => {
   const listItems = [
     {
       name: 'Home',
       offset: 0,
     },
     {
       name: 'About',
        offset: -80,
     },
     {
       name: 'Projects',
        offset: -80,
     },
     {
       name: 'Contact',
        offset: -80,
     },
   ];
  return (
    <div className='hidden md:flex justify-between px-8 py-3 items-center bg-primary-3'>
      <h3 className='font-extrabold text-6xl tracking-widest font-["Dancing_Script"] text-left'>
        A<span className='text-secondary-1'>S</span>
      </h3>
      <ul className='flex justify-between font-bold text-sm uppercase tracking-wide'>
        {listItems.map((listItem, index) => {
          const { name, offset } = listItem;
          return (
            <li
              key={index}
              className='lg:cursor-pointer lg:hover:text-primary-2 lg:hover:translate-x-1 duration-300 ease-in-out pr-8'>
              {' '}
              <Link
                to={name}
                smooth={true}
                offset={offset}
                duration={500}>
                {name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default DesktopNav
import React from 'react';
import Slide from 'react-reveal/Slide';

const Contacts = () => {
  return (
    <div
      name='Contact'
      className='bg-primary-1 p-4 w-autofill w-[fit-content] rounded-sm mx-auto mt-6 h-[fit-content]'>
      <Slide left>
        <div className='pt-2'>
          <p>Email</p>
          <p>asumanssendegeya@gmail.com</p>
        </div>
      </Slide>
    </div>
  );
};

export default Contacts;

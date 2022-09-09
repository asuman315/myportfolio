import React from 'react';
import Contacts from './Contacts';
import SocialMedia from './SocialMedia';
import Form from './Form';

const Footer = () => {
  return (
    <section className='absolute right-0 left-0 bg-primary-3 max-w-6xl mx-auto'>
      <h2 className='text-center font-bold text-3xl text-primary-2 pt-6'>
        Contact
      </h2>
      <div className='md:grid grid-cols-2 md:pr-6'>
        <Contacts />
        <Form />
      </div>
      <SocialMedia />
    </section>
  );
};

export default Footer;

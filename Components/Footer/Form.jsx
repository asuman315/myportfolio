import React, { useEffect, useState } from 'react';
import emailjs from 'emailjs-com';
import ClipLoader from 'react-spinners/ClipLoader';
import Zoom from 'react-reveal/Zoom';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [alert, setAlert] = useState({
    type: '',
    message: '',
    show: false,
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    const reg =
    //eslint-disable-next-line
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{3,}))$/;

    e.preventDefault();

    if (!reg.test(email)) {
      setAlert({
        type: 'error',
        message: 'Please enter a valid email address',
        show: true,
      });
      return;
    }

    try {
      setIsLoading(true);
      await emailjs.send(
        'service_4rawe9p',
        'template_enieoqd',
        { name, email, message },
        'RzFjFYE7PAdcGzw8E'
      );
      setIsLoading(false);
      setEmail('');
      setName('');
      setMessage('');
      setAlert({
        type: 'success',
        message: 'Message sent successfully!',
        show: true,
      });
    } catch (error) {
    
      setAlert({
        type: 'error',
        message: 'Error sending message',
        show: true,
      });
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Zoom left>
        <form
          onSubmit={handleSubmit}
          className=' px-4 py-6 flex flex-col justify-center bg-primary-1 text-white font-medium w-[80%] mx-auto mt-8 rounded md:w-full relative'>
          {alert.show && <Alert setAlert={setAlert} alert={alert} />}
          <input
            type='text'
            placeholder='Name'
            className='rounded-sm mb-4 py-2 px-2 bg-primary-4'
            autoComplete='on'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type='text'
            placeholder='Email'
            className='rounded-sm mb-4 py-2 px-2 bg-primary-4'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <textarea
            placeholder='Type your message here'
            className=' px-2 py-2 rounded-sm bg-primary-4'
            rows='5'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <div className='relative flex items-center mt-4'>
            <div className='absolute flex items-center left-6 sm:left-12 md:left-16 lg:left-24'>
              {isLoading && <ClipLoader size={25} color={'#0c4a6e'} />}
            </div>
            <button
              type='submit'
              className='text-center bg-primary-2 w-full py-2 rounded-sm font-bold text-primary-1'>
              {isLoading ? 'Sending message...' : 'Send Message'}
            </button>
          </div>
        </form>
      </Zoom>
    </div>
  );
};

const Alert = ({ setAlert, alert }) => {
  const { type, message } = alert;
  useEffect(() => {
    const alertTimeout = setTimeout(() => {
      setAlert({ show: false });
    }, 3000);
    return () => clearTimeout(alertTimeout);
  });

  return (
    <div
      className={`text-center tracking-widest font-bold absolute top-0 ${
        type === 'error' ? 'text-[red]' : 'text-[green]'
      }`}>
      {message}
    </div>
  );
};

export default Form;

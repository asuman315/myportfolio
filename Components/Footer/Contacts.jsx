import Zoom from 'react-reveal/Zoom';

const Contacts = () => {
  return (
    <div
      name='Contact'
      className='bg-primary-1 p-4 w-autofill w-full rounded-sm mx-auto mt-6 h-[fit-content]'>
      <Zoom >
        <div className='pt-2'>
          <p>Email</p>
          <p>asumanssendegeya@gmail.com</p>
        </div>
      </Zoom>
    </div>
  );
};

export default Contacts;

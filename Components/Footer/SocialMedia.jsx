import Flip from 'react-reveal/Flip';
import Link from 'next/link';
import { BsGithub } from 'react-icons/bs';
import { FaTwitterSquare, FaLinkedin } from 'react-icons/fa';


const SocialMedia = () => {
  return (
    <div className='flex mx-auto w-[fit-content] mt-20 mb-6'>
      <Flip left>
        <Link href='https://www.linkedin.com/in/ssendegeya-asuman'>
          <FaLinkedin className='w-7 cursor-pointer h-7 text-primary-2' />
        </Link>
      </Flip>
      <Flip top>
        <Link href='https://twitter.com/asumandeveloper'>
          <FaTwitterSquare className='mx-10 w-7 cursor-pointer h-7 text-primary-2' />
        </Link>
      </Flip>
      <Flip right>
        <Link href='https://github.com/asuman315'>
          <BsGithub className='w-7 cursor-pointer h-7 text-primary-2' />
        </Link>
      </Flip>
    </div>
  );
};

export default SocialMedia;
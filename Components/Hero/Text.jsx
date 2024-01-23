import React from 'react';
import { Link } from 'react-scroll';
import Zoom from 'react-reveal/Zoom';
import Rotate from 'react-reveal/Rotate';
import useDownloader from 'react-use-downloader';
// import resume from '../../assets/Software-dev-resume.pdf';

const Text = () => {
  //const {download} = useDownloader();
  
  const fileUrl =
    'https://res.cloudinary.com/dbsbevgcj/image/upload/v1662569922/Full_stack_dev_5bf103707c.pdf?updated_at=2022-09-07T16:58:42.859Z';
    const filename = 'resume';

  return (
    <div className='relative z-10 text[red] w-screen lg:w-[50%] lg:ml-[50%] h-screen flex flex-col items-center justify-center'>
      <Zoom>
        <div>
          <p className='text-1xl font-bold tracking-wide text-white'>
            Hello!
          </p>
          <h2 className='text-[28px] sm:text-4xl md:text-5xl lg:text-5xl font-bold tracking-wide text-white my-2 font-["Old_Standard_TT"]'>
            I am <span className='text-secondary-1'>Asuman Ssendegeya</span>
          </h2>
          <h1 className='text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-wide text-white font-["Old_Standard_TT"]'>
            I am a <span className='text-secondary-1'>Software Developer</span>
          </h1>
        </div>
      </Zoom>
      <div className='flex flex-col'>
        <Rotate top left>
          <Link to='Projects' smooth={true} offset={-80} duration={500}>
            <button className='bg-primary- mt-28 py-3 px-12 uppercase tracking-wide border-[1px] border-none bg-primary-2 text-primary-1 font-bold w-full'>
              my projects
            </button>
          </Link>
        </Rotate>
        <Rotate bottom left>
            <button
              className='bg-primary- mt-8 py-3 px-12 uppercase tracking-wide font-bold border-[1px] border-primary-2 text-primary-2'
              onClick={() => download(fileUrl, filename)}>
              Download Resume
            </button>
        </Rotate>
      </div>
    </div>
  );
};

export default Text;

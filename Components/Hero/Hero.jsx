import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-scroll";
import Zoom from "react-reveal/Zoom";
import Rotate from "react-reveal/Rotate";
import Slide from "react-reveal/Slide";
import useDownloader from "react-use-downloader";
//import resume from '../../public/assets/resume-asuman-with-rarekuge.pdf';

// List of words to display
const words = [
  "React JS",
  "Next JS",
  "TypeScript",
  "Tailwind CSS",
  "GraphQL",
  "Node JS",
  "Nest JS",
  "RESTful APIs",
];

const Hero = () => {
  //const {download} = useDownloader();

  const [currentWordIndex, setCurrentWordIndex] = useState(0); // Tracks the index of the current word
  const [displayText, setDisplayText] = useState(""); // Tracks the text being displayed (typed/deleted)
  const [isDeleting, setIsDeleting] = useState(false); // Tracks whether we are typing or deleting
  const [loopCompleted, setLoopCompleted] = useState(false); // Tracks whether we should move to the next word
  const [speed, setSpeed] = useState(150); // Typing/Deleting speed

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    const wordLength = currentWord.length;

    // Set typing/deleting speed to complete within 1 second
    const typingSpeed = 1000 / wordLength;
    const deletingSpeed = 1000 / wordLength;

    if (!isDeleting && displayText === currentWord) {
      setLoopCompleted(true);
      setTimeout(() => setIsDeleting(true), 600); // Pause before deleting starts
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setLoopCompleted(false);
      setCurrentWordIndex((prev) => (prev + 1) % words.length); // Move to next word
    }

    const handleTyping = () => {
      if (!isDeleting && !loopCompleted) {
        // Typing
        setDisplayText(currentWord.slice(0, displayText.length + 1));
        setSpeed(typingSpeed); // Adjust typing speed based on word length
      } else if (isDeleting && displayText !== "") {
        // Deleting
        setDisplayText(currentWord.slice(0, displayText.length - 1));
        setSpeed(deletingSpeed); // Adjust deleting speed based on word length
      }
    };

    const timeout = setTimeout(handleTyping, speed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, loopCompleted, currentWordIndex]);

  const fileUrl =
    "https://res.cloudinary.com/dbsbevgcj/image/upload/v1662569922/Full_stack_dev_5bf103707c.pdf?updated_at=2022-09-07T16:58:42.859Z";
  const filename = "resume";

  return (
    <section className="relative z-10 w-full h-screen pt-24 lg:pt-6 ">
      <section className="items-center w-full grid grid-cols-1 lg:grid-cols-2 lg:gap-12 px-4 md:px-6 lg:px-8 h-full">
        <section className="">
          <Zoom>
            <div className="max-w-[420px]">
              <p className="text-lg font-bold tracking-wide text-white">
                Hello!
              </p>
              <h2 className="text-lg md:text-xl font-medium tracking-wide text-white my-1 lg:my-2 ">
                I am Asuman Ssendegeya
              </h2>
              <h1 className="text-xl pt-2 text-[25px] sm:text-3xl 3xl:text-5xl font-bold tracking-wide text-white gap-3">
                A Software Engineer Specializing in{" "}
                <div className="pt-2 g:pt-4 inline-block">
                  <span className="text-secondary-1"> {displayText}</span>
                  <span className="animate-blink font-medium text-secondary-1">
                    |
                  </span>
                </div>
              </h1>
            </div>
          </Zoom>
          <div className="flex flex-col md:flex-row lg:flex-col mt-8 gap-4 lg:gap-6">
            <Slide top left>
              <Link to="Projects" smooth={true} offset={-80} duration={500}>
                <button className="  @g:mt-0 py-[14px] px-12 uppercase tracking-wide  rounded-md bg-secondary-1 text-gray-50 font-bold w-full">
                  my projects
                </button>
              </Link>
            </Slide>
            <Rotate bottom left>
              <button
                className=" py-3 px-12 uppercase tracking-wide font-bold border-[1px]  rounded-md"
                onClick={() => download(fileUrl, filename)}
              >
                Download Resume
              </button>
            </Rotate>
          </div>
        </section>
        <section className="flex items-center @lg:justify-end ">
          <div className=" h-full w-full rounded-2xl xl:mt-0">
            <video
              className="w-full h-full object-cover rounded-2xl max-w-xl mx-auto xl:max-w-none"
              src="https://res.cloudinary.com/dbsbevgcj/video/upload/v1726452993/website-coding-vid_ruhrbh.mp4"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        </section>
      </section>
    </section>
  );
};

export default Hero;

import React from "react";
import Zoom from "react-reveal/Zoom";
import Rotate from "react-reveal/Rotate";
import Image from "next/image";
import Link from "next/link";

const ProjectThree = () => {
  const appImage = require("../../public/assets/cafeteriase.gif");
  const technologies = [
    "Tailwind CSS",
    "React",
    "NextJs",
    "Typescript",
    "GraphQL",
    "Redux",
    "Strapi",
  ];

  // test deployment

  return (
    <div className="mt-10 bg-primary-3 px-5 pt-3 rounded-md shadow-md">
      <div className="relative mb-3">
        <Zoom left>
          <Link href="https://cafeteriase.com/" passHref>
            <h3 className="font-bold capitalize tracking-wider text-center text-primary-2 pb-3 lg:cursor-pointer">
              online ordering web application for a modern cafe
            </h3>
          </Link>
        </Zoom>
        <div className="bg-primary-2 h-[2px] w-[30%] ml-[35%]"></div>
      </div>
      <Zoom bottom>
        <Image
          src={appImage}
          width={650}
          height={380}
          alt="gif"
          className="lg:h-[315px] w-full mb-3 "
        />
      </Zoom>
      {/* <div className='leading-8 tracking-wide'>
        <Zoom bottom>
          <p className='mb-4'>
              This a web application allows a user to order food from a modern cafe.
              <br />
              The user can choose from a variety of meals and drinks that belong
              to a variety of categories. <br />
              Then the user can add the selected drink/meal to the cart. <br />A
              user can edit the quantity of the selected meal within the cart.
          </p>
        </Zoom>
      </div> */}
      <div className="flex flex-col lg:flex-row gap-4 mt-6">
        <Link href="https://cafeteriase.com/" passHref className="w-full">
          <button className="uppercase border-none outline-none py-3 mt-3 tracking-widest font-bold text-xs rounded bg-primary-2 w-full">
            live app
          </button>
        </Link>
        <Link
          href="https://github.com/asuman315/cafeterias"
          passHref
          className="w-full"
        >
          <button className="uppercase border-[1px] outline-none py-3 mt-3 tracking-widest font-bold text-xs rounded w-full">
            code repo
          </button>
        </Link>
      </div>
      <Zoom left>
        <div>
          <h3 className="text-center pt-5 pb-2 font-bold text-primary-2">
            Technologies used in the project
          </h3>
          <div>
            {technologies.map((tech, index) => (
              <button
                key={index}
                className="bg-primary-1 text-white text-sm font-bold mr-3 px-3 mb-3 rounded py-1 cursor-none"
              >
                {tech}
              </button>
            ))}
          </div>
        </div>
      </Zoom>
    </div>
  );
};

export default ProjectThree;

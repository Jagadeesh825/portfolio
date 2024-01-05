import React from 'react';
import Profile from '../assets/ppt.jpg';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-black to-indigo-950 mb-0">
      <div className="max-w-screen-lg mx-auto flex items-center justify-center h-full px-3 md:flex-row">
        <div className="md:w-2/3 md:pr-8">
          <h2 className="text-3xl sm:text-7xl font-bold text-white mb-2">I'm a Frontend <br />developer</h2>
          <p className="text-gray-500 mb-0 font-new font-bold text-2xl ">
  Hi, I'm Jagadeesh Kumar S, a passionate front-end developer with a strong foundation in web development. I have been dedicating the past two years to learning and mastering various front-end technologies. My goal is to create engaging and user-friendly web experiences.
</p>
          <div className="pt-5 place-content-center">
          <Link to="portfolio" smooth={true} duration={500} className=" text-white px-8 py-4 rounded-3xl font-new font-extrabold bg-gradient-to-t from-blue-700 to-blue-900 cursor-pointer">
            Portfolio 
            <span className="">
            <FaArrowRight className="inline-block ml-2 size-4 hover:rotate-90 duration-500" />
            </span>
          </Link>
          </div>
        </div>
        <div className="md:w-1/3 md:float-right md-ml-2">
          <img src={Profile} alt="myprofile" className="rounded-full mx-auto w-full px-5 py-4" />
        </div>
      </div>
    </div>
  );
}

export default Home;

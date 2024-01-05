import React from 'react';
import Html from '../assets/html.png';
import JS from '../assets/js.png';
import Python from '../assets/python.png';
import Github from '../assets/github.png';
import ReactImg from '../assets/react.jpg';
import Talwind from '../assets/talwind.png';

const Experience = () => {
  const tech = [
    {
      id: 1,
      src: Html,
      title: 'Html',
      style: 'shadow-orange-500',
    },
    {
      id: 2,
      src: Talwind,
      title: 'Talwind CSS',
      style: 'shadow-blue-500',
    },
    {
      id: 3,
      src: JS,
      title: 'JavaScript',
      style: 'shadow-yellow-500',
    },
    {
      id: 4,
      src: ReactImg,
      title: 'React',
      style: 'shadow-blue-500',
    },
    {
      id: 5,
      src: Python,
      title: 'Python',
      style: 'shadow-blue-800',
    },
    {
      id: 6,
      src: Github,
      title: 'GitHub',
      style: 'shadow-blue-500',
    },
  ];

  return (
    <div name="experience" className='w-full bg-gradient-to-t from-black to-indigo-950 md:min-h-screen pt-48 md:pt-64'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='mb-8'>
          <p className='text-4xl font-new text-white font-bold border-b-4 inline-block border-gray-600'>Experience</p>
          <p className="py-6 font-new font-bold text-white text-2xl">These are the Technologies I've worked with</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-16 text-center py-12 px-12 sm:px-0">
          {tech.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`flex flex-col items-center shadow-md hover:scale-110 duration-500 py-12 rounded-lg ${style}`}
            >
              <img src={src} alt="html" className="w-24 mx-auto" />
              <p className="mt-4 font-bold font-new text-white">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;

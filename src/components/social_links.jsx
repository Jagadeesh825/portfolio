import React, { useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const SocialLinks = () => {
  const [hoveredLink, setHoveredLink] = useState(null);

  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: 'https://www.linkedin.com/in/jagadeesh-kumar-s-98b232150/',
      style: 'rounded-tr-md',
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: 'https://github.com/Jagadeesh825/myportpolio',
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: 'mailto:jagadeesh12699@gmail.com/',
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: 'RESUME.pdf',
      style: 'rounded-br-md',
      download: true,
    },
  ];

  return (
    <div className='min-h-screen lg:flex flex-col fixed'>
      <ul className="flex lg:ml-[-100px]">
        {links.map((link) => (
          <li
            key={link.id}
            className={`flex justify-between items-center 
            w-48 h-16 px-4 rounded-2xl duration-300 
            bg-gradient-to-t from-transparent to-sky-800 text-white ${link.style}`}
            onMouseEnter={() => setHoveredLink(link.id)}
            onMouseLeave={() => setHoveredLink(null)}>
            <a
              href={link.href}
              className="flex justify-between items-center w-full">
              {hoveredLink === link.id && (
                <span className="absolute top-0 left-full p-2 bg-black text-white rounded-md">
                  {link.child}
                </span>
              )}
              {link.child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;

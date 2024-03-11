import React, { useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const SocialLinks = () => {
<<<<<<< HEAD
  const [showLinks, setShowLinks] = useState(false);
=======
  const [showLinks, setShowLinks] = useState(true);
>>>>>>> aae49350603456e1da9434b00ddcc90dc450d126

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
      {/* Desktop View */}
<<<<<<< HEAD
      <ul className="flex">
=======
      <ul className="flex lg:ml-[-100px]">
>>>>>>> aae49350603456e1da9434b00ddcc90dc450d126
        {links.map((link) => (
          <li
            key={link.id}
            className={`flex justify-between items-center 
<<<<<<< HEAD
              w-48 h-16 px-4 rounded-2xl duration-300 
              bg-gradient-to-t from-transparent to-sky-800 text-white ${link.style}`}
=======
            w-48 h-16 px-4 rounded-2xl duration-300 
            bg-gradient-to-t from-transparent to-sky-800 text-white ${link.style}`}
>>>>>>> aae49350603456e1da9434b00ddcc90dc450d126
          >
            <a
              href={link.href}
              className="flex justify-between items-center w-full"
            >
              {link.child}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile Button and Links */}
      <div className='lg:hidden fixed bottom-4 right-4 p-2 bg-gradient-to-t from-transparent to-sky-800 text-white rounded-full z-50'>
        <button onClick={() => setShowLinks(!showLinks)}>
          {showLinks ? 'Hide Links' : 'Show Links'}
        </button>
        {showLinks && (
<<<<<<< HEAD
          <ul className="flex flex-col fixed bottom-16 right-4 z-40">
=======
          <ul className="lg:flex flex-col fixed bottom-16 right-4 z-40">
>>>>>>> aae49350603456e1da9434b00ddcc90dc450d126
            {links.map((link) => (
              <li
                key={link.id}
                className={`flex justify-between items-center 
<<<<<<< HEAD
                    w-48 h-16 px-4 rounded-2xl duration-300 
                    bg-gradient-to-t from-transparent to-sky-800 text-white ${link.style}`}
=======
                  w-48 h-16 px-4 rounded-2xl duration-300 
                  bg-gradient-to-t from-transparent to-sky-800 text-white ${link.style}`}
>>>>>>> aae49350603456e1da9434b00ddcc90dc450d126
              >
                <a
                  href={link.href}
                  className="flex justify-between items-center w-full"
                >
                  {link.child}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SocialLinks;

import React from 'react';

import BurpSuite from '../assets/burpsuite.jpg';
import Kali from '../assets/kali.jpg';
import Metasploit from '../assets/metasploit.jpg';
import Nessus from '../assets/Nessus.png';
import Nmap from '../assets/nmap.jpg';
import Splunk from '../assets/splunk.jpg';
import Wireshark from '../assets/wireshark.jpg';

const Experience = () => {
  const tech = [
    {
      id: 1,
      src: Splunk,
      title: 'Splunk (SIEM)',
      style: 'shadow-orange-500',
    },
    {
      id: 2,
      src: Wireshark,
      title: 'Wireshark',
      style: 'shadow-blue-500',
    },
    {
      id: 3,
      src: Nmap,
      title: 'Nmap',
      style: 'shadow-green-500',
    },
    {
      id: 4,
      src: Nessus,
      title: 'Nessus',
      style: 'shadow-yellow-500',
    },
    {
      id: 5,
      src: BurpSuite,
      title: 'Burp Suite',
      style: 'shadow-red-500',
    },
    {
      id: 6,
      src: Metasploit,
      title: 'Metasploit',
      style: 'shadow-purple-500',
    },
    {
      id: 7,
      src: Kali,
      title: 'Kali Linux',
      style: 'shadow-blue-800',
    },
  ];

  return (
    <div
      name="experience"
      className="w-full bg-gradient-to-t from-black to-indigo-950 md:min-h-screen pt-48 md:pt-64"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="mb-8">
          <p className="text-4xl font-new text-white font-bold border-b-4 inline-block border-gray-600">
            Experience
          </p>
          <p className="py-6 font-new font-bold text-white text-2xl">
            Security Technologies I’ve Worked With
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-16 text-center py-12 px-12 sm:px-0">
          {tech.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`flex flex-col items-center shadow-md hover:scale-110 duration-500 py-12 rounded-lg ${style}`}
            >
              <img src={src} alt={title} className="w-24 mx-auto" />
              <p className="mt-4 font-bold font-new text-white">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;

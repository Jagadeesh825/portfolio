import React from 'react';
import companyProfile from '../assets/webpage.png';
import Portfolio from '../assets/portfolio.png';
import ToDo from '../assets/todolist.png';
import Quiz from '../assets/QUiz.png';
import Instavibe from '../assets/instavibe.png';
import AudioPlayer from '../assets/AudioPlayer.png';
import StarwarPlanet from '../assets/starwarplanet.png';

const Projects = () => {
    const tech = [
        {
            id: 1,
            src: Portfolio,
            title: 'Portfolio',
            link: "https://portfolio825.netlify.app",
            style: 'shadow-purple-500',
        },
        {
            id: 2,
            src: ToDo,
            title: 'TodoList',
            link: "https://todolist825.netlify.app",
            style: 'shadow-blue-500',
        },
        {
            id: 3,
            src: Quiz,
            title: 'Quiz App',
            link: "https://quiz825.netlify.app",
            style: 'shadow-pink-500',
        },
        {
            id: 4,
            src: Instavibe,
            title: 'Instavibe',
            link: "https://instavibe.netlify.app",
            style: 'shadow-green-500',
        },
        {
            id: 5,
            src: StarwarPlanet,
            title: 'StarWar Planet Directory',
            link: "https://starwarplanet.netlify.app",
            style: 'shadow-orange-500',
        },
        {
            id: 6,
            src: AudioPlayer,
            title: 'AudioPlayer',
            link: "https://audio-player825.netlify.app",
            style: 'shadow-blue-500',
        },
        {
            id: 7,
            src: companyProfile,
            title: 'Company Profile',
            link: "https://netart825.netlify.app",
            style: 'shadow-orange-500',
        },
    ];

    return (
        <div className='w-full bg-gradient-to-t from-indigo-950 to-black min-h-screen py-12 md:py-24'>
            <div className='max-w-screen-lg mx-auto p-4'>
                <div className='mb-8'>
                    <p className='text-4xl font-new text-white font-bold border-b-4 inline-block border-gray-600'>Projects</p>
                    <p className="py-6 font-new font-bold text-white text-2xl">These are the Projects I've worked on</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
                    {tech.map(({ id, src, title, link, style }) => (
                        <div
                            key={id}
                            className={`flex flex-col items-center shadow-md hover:scale-110 duration-500 py-8 rounded-lg ${style}`}
                        >
                            <img src={src} alt={title} className="w-32 h-32 mx-auto mb-4" />
                            <p className="font-bold font-new text-white mb-2">{title}</p>
                            <a href={link} className="text-green-500 underline hover:no-underline">Go to Website</a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;

import React from 'react'
import wedevlopmentImage from '../assets/webdevelopement.png'
import ReactImage from '../assets/ReactC.png'
import NodeImage from '../assets/nodejs.png'
import Github from '../assets/githubC.png'
import pythonImage from '../assets/pythonC.png'


const Portfolio = () => {
    const portfolios = [
        {
            id: 1,
            src: wedevlopmentImage,
            link: "https://www.coursera.org/verify/V4QJBYACNE9M",
            name:   "Web Development"
        },
        
        {
            id: 2,
            src: ReactImage,
            link: "https://coursera.org/verify/ZVQTQ8HJD67G",
            name:   "React"
        },
        {
            id: 3,
            src: Github,
            link: "https://www.coursera.org/verify/T4HWJNTDNMYZ",
            name:   "GitHub"
        },
        {
            id: 4,
            src: NodeImage,
            link: "https://www.coursera.org/verify/ZXEUWAYMHMWT",
            name:   "NodeJS"
        },
        {
            id: 5,
            src: pythonImage,
            link: "https://www.coursera.org/verify/W328DYJRC6S9",
            name:   "Python"
        },
    ]

    return (
        <div name="portfolio" className="w-full bg-gradient-to-t from-indigo-950 to-black text-white md:h-screen ">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="mt-8">
                    <p className=" text-4xl font-bold font-new inline border-b-4 border-gray-500 pt-5 mt-16">
                        Portfolio
                    </p>
                    <br />
                    <p className="text-2xl font-bold font-new py-10 ">
                        Here are some of my certificates.
                    </p>
                    <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                        {portfolios.map(({ id, src, link, name }) => (
                            <div key={id} className="shadow-md rounded-lg shadow-gray-700">
                                <img
                                    src={src}  
                                    alt={`Portfolio ${id}`}
                                    className="hover:scale-110 rounded-md duration-200"
                                />
                                <div className='flex items-center justify-center'>
                                    <button className='w-1/2 px-6 m-4 duration-200 '>{name}</button>
                                    <button className="w-1/2 px-6 m-4 duration-200 "><a href={link}>verify certificate</a></button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio
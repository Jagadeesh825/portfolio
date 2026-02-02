import React from 'react'
import webDevelopmentImage from '../assets/webdevelopement.png'
import reactImage from '../assets/ReactC.png'
import nodeImage from '../assets/nodejs.png'
import githubImage from '../assets/githubC.png'
import pythonImage from '../assets/pythonC.png'
import comptiaSecurityImage from '../assets/comptia.png'

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: webDevelopmentImage,
      link: 'https://www.coursera.org/verify/V4QJBYACNE9M',
      name: 'Web Development',
    },
    {
      id: 2,
      src: reactImage,
      link: 'https://coursera.org/verify/ZVQTQ8HJD67G',
      name: 'React',
    },
    {
      id: 3,
      src: githubImage,
      link: 'https://www.coursera.org/verify/T4HWJNTDNMYZ',
      name: 'GitHub',
    },
    {
      id: 4,
      src: nodeImage,
      link: 'https://www.coursera.org/verify/ZXEUWAYMHMWT',
      name: 'NodeJS',
    },
    {
      id: 5,
      src: pythonImage,
      link: 'https://www.coursera.org/verify/W328DYJRC6S9',
      name: 'Python',
    },
    {
      id: 6,
      src: comptiaSecurityImage,
      link: 'https://www.udemy.com/certificate/UC-b5aef2be-1f20-434e-87d7-a6d1aec3b9b6/',
      name: 'CompTIA Security+',
    },
  ]

  return (
    <div
      name="portfolio"
      className="w-full bg-gradient-to-t from-indigo-950 to-black text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="mt-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 pt-5 mt-16">
            Portfolio
          </p>

          <p className="text-2xl font-bold py-10">
            Here are some of my certificates.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
            {portfolios.map(({ id, src, link, name }) => (
              <div
                key={id}
                className="shadow-md shadow-gray-700 rounded-lg hover:shadow-indigo-500 transition"
              >
                <img
                  src={src}
                  alt={name}
                  className="rounded-md hover:scale-110 duration-200"
                />

                <div className="flex items-center justify-center">
                  <button className="w-1/2 px-6 m-4">
                    {name}
                  </button>

                  <a
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                    className="w-1/2"
                  >
                    <button className="w-full px-6 m-4">
                      Verify Certificate
                    </button>
                  </a>
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

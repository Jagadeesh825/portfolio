import React from 'react'

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-t flex from-black to-indigo-950 mb-0">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
          <div
               className='pb-8'>
            <p className='text-4xl font-extrabold inline border-b-4 border-gray-500 font-new text-white'>About</p>
          </div>
           <p className='text-xl mt-20 font-new  text-white'>

          

"I am a Computer Science graduate with a passion for front-end development. Throughout my academic journey, I have acquired proficiency in HTML, CSS, JavaScript, React, and Tailwind CSS. My practical experience comes from hands-on projects and coursework, where I've cultivated skills that enable me to create dynamic and visually appealing web applications.
           </p>
           <br/>
           <p className='text-xl font-new  text-white'>
           Eager to transition from student to professional, I am actively seeking opportunities to contribute my expertise to innovative and impactful projects. My dedication to front-end technologies and commitment to continuous learning make me a motivated and capable developer ready to tackle new challenges."           </p>
       </div>
    </div>
  )
}

export default About

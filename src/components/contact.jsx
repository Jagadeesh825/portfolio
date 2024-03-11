import React from 'react'

const contact = () => {
  return (
    <div name="contact" className='w-full h-screen bg-gradient-to-b from-indigo-950 to-black p-4 text-white'>
      
        <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
        <div className='pb-8'>
            <p className='font-new font-semibold text-4xl inline border-b-4 border-gray-500'>Contact</p>
            <p className='py-6'>Submit the Form below to get Touch with me</p>
        </div>
        <div className='flex justify-center items-start'>
            <form action="https://getform.io/f/3d8643a5-29cd-40f6-9304-7fe99947b7de" method ="POST"className='flex flex-col w-full md:w-1/2'>
                <input 
                type="text" name="name" placeholder='Enter Your Name' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>
                <input 
                type="text" name="email" placeholder='Enter Your Email' className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>
                <textarea name="message" rows="10" placeholder='type here .....'
                className='p-10 bg-transparent border-2 rounded-md text-white  font-new focus:outline-none'></textarea>
                <br/>
                <div className='flex justify-center items-center'>
                <button className='w-28  font-new font-bold p-4  text-white bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md'>Submit</button>

                </div>
            </form>
        </div>
      </div>
    </div>
  )
}

export default contact

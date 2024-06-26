import React from 'react'
import profilePic from '../assets/avatar.png'
import { TypeAnimation } from 'react-type-animation'

export default function Hero() {


  return (
    <div className=' grid md:grid-cols-2 place-items-center max-w-[1250px] mx-auto  mb-8 md:mb-32 mt-14'>
      <div className=' max-w-[800px]'>
        <p className=' text-gray-200 md:text-6xl text-3xl -tracking-tight'>
            HI! I AM <br />
            <span>NAYAMAT ULLAH CHOWDHURY</span> <br />
            <TypeAnimation 
                sequence={[
                    "Developer",
                    1000,
                    "UI/UX Designer",
                    1000,
                    "Problem Solver",
                    1000,
                    "Consultant",
                    1000
                ]}
                speed={50}
                repeat={Infinity}
                className=' font-bold italic'
            />
        </p>
        <h2 className=' text-gray-300'> With 3+ years of experience</h2>

        <div className=' flex flex-row gap-4 mb-4 md:mb-0'>
            <button className=' transform transition-transform hover:scale-110 hover:shadow-lg z-10 cursor-pointer font-bold text-gray-200 w-1/2 mt-6 p-2 bg-gradient-to-r from-[#50a7c7] via-[#1f7c8f] to-[#3d6ca4] rounded-xl'>Download CV</button>
            <a href='#portfolio' className=' w-1/2'>
              <button className=' transform transition-transform hover:scale-110 hover:shadow-lg z-10 cursor-pointer font-bold
               text-gray-200 w-full mt-6 p-2 border border-gray-400 rounded-xl'
              >
                View Work
              </button>
            </a>
        </div>
      </div>

      <img src={profilePic} className='w-[300px] md:w-[500px]' />
    </div>
  )
}

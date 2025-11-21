import React from 'react'
import profilePic from '../assets/avatar2.png'
import { TypeAnimation } from 'react-type-animation'
import CV from '../assets/Nayamat_Ullah_Chowdhury_CV.pdf'
import { FaFacebookSquare, FaGithubSquare, FaLinkedin, FaWhatsappSquare } from 'react-icons/fa'

export default function Hero() {
  return (
    <div className='flex flex-col-reverse md:grid md:grid-cols-2 place-items-center max-w-[1250px] mx-auto mb-8 md:mb-32 mt-14'>
      
      <div className='max-w-[800px] mx-4 md:mx-0'>
        <p className='text-gray-200 md:text-6xl text-3xl -tracking-tight'>
          HI! I AM <br />
          <span>NAYAMAT ULLAH CHOWDHURY</span> <br />
          <TypeAnimation 
            sequence={[
              "Fullstack Developer",
              1000,
              "UI/UX Designer",
              1000,
              "Problem Solver",
              1000,
            ]}
            speed={50}
            repeat={Infinity}
            className='font-bold italic'
          />
        </p>
        <h2 className='text-gray-300'>With 3+ years of experience</h2>

        <div className='flex flex-row gap-4 mb-4'>
          <a className=' w-1/2' href={CV} download={"Nayamat_Ullah_Chowdhury_CV.pdf"}>
            <button className='w-full transform transition-transform duration-500 hover:scale-105 hover:shadow-lg z-10 cursor-pointer font-bold
             text-gray-200 mt-6 p-2 bg-gradient-to-r from-[#50a7c7] via-[#1f7c8f] to-[#3d6ca4] rounded-xl'>
              Download CV
            </button>
          </a>
          <a href='#portfolio' className='w-1/2'>
            <button className='transform transition-transform duration-500 hover:scale-105 hover:shadow-lg z-10 cursor-pointer font-bold text-gray-200 w-full mt-6 p-2 border border-gray-400 rounded-xl'>
              View Work
            </button>
          </a>
        </div>
        <div className=' flex flex-row gap-6 text-gray-400 text-4xl'>
          <a href='https://www.linkedin.com/in/n0or-chowdhury/' className=' text-blue-500 transition-transform duration-300 hover:scale-110'>
            <FaLinkedin />
          </a>
          <a href='https://wa.me/8801621777924' target='_blank' rel='noopener noreferrer' className=' text-green-500 transition-transform duration-300 hover:scale-110'>
            <FaWhatsappSquare  />
          </a>
          <a href='https://github.com/Nur-Chowdhury' className=' transition-transform duration-300 hover:scale-110'>
            <FaGithubSquare className='text-white ' />
          </a>
          <a href='https://www.facebook.com/n0.or.chowdhury/' className=' text-blue-700 transition-transform duration-300 hover:scale-110'>
            <FaFacebookSquare />
          </a>
        </div>
      </div>

      <img src={profilePic} className='w-[300px] md:w-[500px]' />
    </div>
  )
}
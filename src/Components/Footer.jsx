import React from 'react'
import { FaFacebookSquare, FaGithubSquare, FaLinkedin, FaLinkedinIn } from 'react-icons/fa'

export default function Footer() {
  return (
    <div className=' max-w-[1300px] mx-auto flex justify-between p-6 md:p-20 text-sm md:text-lg mt-12'>
        
        <div className=' space-y-4'>
            <h3 className=' text-2xl text-gray-200 font-semibold'>
              <a href='/' className=' font-bold text-blue-600'>C.<span className=' text-pink-200'>Nur</span></a>
            </h3>
            <div className=' flex flex-row gap-6 text-gray-400 text-4xl'>
                <a href='https://github.com/Nur-Chowdhury'><FaGithubSquare /></a>
                <a href='https://www.facebook.com/n0.or.chowdhury/'><FaFacebookSquare /></a>
                <a href='https://www.linkedin.com/in/n0or-chowdhury/'><FaLinkedin /></a>
            </div>
        </div>

        <p className=' text-gray-400 space-y-2'>@ 2024 C.Nur</p>
    </div>
  )
}

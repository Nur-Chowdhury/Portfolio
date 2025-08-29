import React from 'react'

import { BsAwardFill, BsFillBriefcaseFill, BsGearFill } from "react-icons/bs";
import {
    DiJavascript1,
    DiReact,
    DiNodejsSmall,
    DiHtml5,
    DiCss3,
    DiSass,
    DiMongodb,
    DiPython,
} from 'react-icons/di';
import { BiLogoPostgresql } from "react-icons/bi";
import { SiExpress, SiCplusplus, SiTypescript,
    SiMysql, SiNextdotjs } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri"

export default function About() {
    return (
        <div className='  max-w-[1250px] mx-auto p-6 md:my-20 flex flex-col justify-center items-center' id='about'>
            <h1 className='w-full text-center text-gray-200 text-5xl my-8'>
                About Me
            </h1>
            <div className=' w-full flex flex-col md:flex-row justify-between gap-4'>
                <div className=' w-full md:w-[55%] flex flex-col justify-center items-center gap-4'>
                    <p className=' w-full text-gray-200 text-justify'>
                        Hi! I’m Nayamat Ullah Chowdhury Nur, a 4th-year CSE student at CUET, Bangladesh with a passion for building 
                        scalable web applications and exploring AI-driven solutions. Currently, I contribute as a Volunteer Developer 
                        at YouthNotion’s Dev Team, where I collaborate on impactful projects that enhance user experiences. Alongside 
                        development, I’m pursuing research in federated learning and human fall detection, aiming to publish in 
                        Q2-ranked journals. Beyond tech, I enjoy reading fictional, historical, and motivational books, which inspire 
                        creativity and broaden my perspective.
                    </p>
                    <p className=' w-full text-gray-200 text-justify'>
                        I’m always open to collaboration and new opportunities—whether in development, research, or innovative projects 
                        that push boundaries.
                    </p>  
                </div>
                <div className=' w-full md:w-[42%] flex flex-col gap-8'>
                    <div className=' w-full flex flex-wrap justify-between'>
                        
                        <div className='group w-[150px] flex flex-col justify-center items-center gap-1 py-4 border-2 border-gray-200 rounded-lg
                            hover:scale-105 cursor-pointer transition-all duration-700 hover:border-blue-500'
                        >
                            <BsAwardFill size={40} className='text-gray-200 transition-colors duration-700 group-hover:text-blue-300' />
                            <p className='text-gray-200 text-2xl font-medium transition-colors duration-700 group-hover:text-blue-300'>
                                Experience
                            </p>       
                            <p className='text-gray-300 text-base transition-colors duration-700 group-hover:text-blue-300'>
                                3+ Years
                            </p>
                        </div>
                        <div className='group w-[150px] flex flex-col justify-center items-center gap-1 py-4 border-2 border-gray-200 rounded-lg
                            hover:scale-105 cursor-pointer transition-all duration-700 hover:border-blue-500'
                        >
                            <BsFillBriefcaseFill size={40} className='text-gray-200 transition-colors duration-700 group-hover:text-blue-500' />
                            <p className='text-gray-200 text-2xl font-medium transition-colors duration-700 group-hover:text-blue-500'>
                                Completed
                            </p>       
                            <p className='text-gray-300 text-base transition-colors duration-700 group-hover:text-blue-300'>
                                15+ Projects
                            </p>
                        </div>
                        <div className='group w-[150px] flex flex-col justify-center items-center gap-1 py-4 border-2 border-gray-200 rounded-lg
                            hover:scale-105 cursor-pointer transition-all duration-700 hover:border-blue-500'
                        >
                            <BsGearFill size={40} className='text-gray-200 transition-colors duration-700 group-hover:text-blue-500' />
                            <p className='text-gray-200 text-2xl font-medium transition-colors duration-700 group-hover:text-blue-500'>
                                Skills
                            </p>       
                            <p className='text-gray-300 text-base transition-colors duration-700 group-hover:text-blue-300'>
                                15+ Tools
                            </p>
                        </div>
                    </div>
                    <div className=' w-full bg-white bg-opacity-5 hover:bg-opacity-10 backdrop-blur-lg rounded-lg p-6 flex flex-wrap gap-4 text-4xl justify-center'>
                        <SiCplusplus className=' text-blue-800'/>
                        <DiPython className=' text-blue-800'/>
                        <DiHtml5 className=' text-orange-600'/>
                        <DiCss3 className=' text-blue-600'/>
                        <RiTailwindCssFill className=' text-blue-800'/>
                        <DiJavascript1 className=' text-yello-500'/>
                        <SiTypescript className=' text-blue-500'/>
                        <DiReact className=' text-blue-400'/>
                        <SiExpress className=' text-black font-extrabold'/>
                        <DiNodejsSmall className=' text-green-500'/> 
                        <SiNextdotjs className=' text-black'/> 
                        <DiMongodb className=' text-green-600'/>
                        <SiMysql className=' text-blue-600 text-5xl'/> 
                        <BiLogoPostgresql className=' text-blue-800 text-4xl'/>   
                    </div>
                </div>
            </div>
        </div>
    )
}

import React from 'react'
import pr1 from '../assets/pokedex.png'
import pr2 from '../assets/spaceview.png'
import pr3 from '../assets/chatapp.png'
import pr4 from '../assets/cpf.png'

import {
    DiJavascript1,
    DiReact,
    DiNodejsSmall,
    DiHtml5,
    DiCss3,
    DiSass,
    DiBootstrap,
    DiMongodb,
    DiGithubBadge,
    DiMysql,
    DiPython,
    DiJava,
} from 'react-icons/di';
import { SiExpress, SiCplusplus, SiTypescript,
    SiFirebase, SiGoogleauthenticator, SiSpringboot,
    SiThymeleaf, SiMysql } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";

export default function About() {
  return (
    <div className=' max-w-[1300px] mx-auto p-6 grid md:grid-cols-2 gap-8 place-items-center' id='about'>
      <div className=' md:hidden  bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-6 flex flex-wrap gap-4 text-4xl justify-center'>
        <DiHtml5 className=' text-orange-600'/>
        <DiCss3 className=' text-blue-600'/>
        <RiTailwindCssFill className=' text-blue-800'/>
        <DiJavascript1 className=' text-yello-500'/>
        <SiTypescript className=' text-blue-500'/>

        <DiReact className=' text-blue-700'/>
        <SiExpress className=' text-orange-600'/>
        <DiNodejsSmall className=' text-green-500'/>
        <SiCplusplus className=' text-blue-800'/>
        <DiPython className=' text-blue-800'/>        
      </div>

      {/* 1st */}

      <div className=' relative group'>
        <div className=' w-full h-full absolute -inset-1 bg-gradient-to-r from-teal-100 to-teal-900 rounded
         blur opacity-25 group-hover:opacity-100 transition duration-300'></div>

        <div className=' relative w-full p-4 bg-white bg-opacity-10 backdrop-blur-bg rounded'>
          <img src={pr1} alt='project 1' className=' rounded md:max-w-[500px]' />
        </div>
      </div>

      <div className=' p-6'>
        <h2 className=' text-gray-200 text-3xl font-bold mb-4'>Illustration</h2>
        <p className=' text-gray-300 mb-4'>
          This is a fullstack <span className=' text-blue-500'>react</span>, <span className=' text-orange-300'>firebase</span> and
          <span className=' text-orange-300'>Google Authentication</span> based project inspired from one of the best anime, pokemon.
          This is a pokemon Encyclopedia where you can search, compare and add a pokemon to your list.
        </p>
        <div className=' md:flex flex-wrap gap-4 text-4xl justify-center hidden'>
          <DiJavascript1 className=' text-yello-500'/>
          <DiReact className=' text-blue-700'/>
          <DiSass className=' text-pink-600'/>
          <SiFirebase className=' text-orange-300'/>
          <SiGoogleauthenticator className=' text-orange-400'/>
        </div>
      </div>

      {/* 2nd */}

      <div className=' p-6'>
        <h2 className=' text-gray-200 text-3xl font-bold mb-4'>Illustration</h2>
        <p className=' text-gray-300 mb-4'>
          This is project was intended to build a responsive Frontend website with
          <span className=' text-blue-500'> React</span> and <span className=' text-blue-700'>Tailwind CSS</span>.
           AOS library was used to add scroll animation.
        </p>
        <div className=' md:flex flex-wrap gap-4 text-4xl justify-center hidden'>
          <DiJavascript1 className=' text-yello-500'/>
          <DiReact className=' text-blue-700'/>
          <RiTailwindCssFill className=' text-blue-800'/>
        </div>
      </div>

      <div className=' relative group'>
        <div className=' w-full h-full absolute -inset-1 bg-gradient-to-r from-teal-100 to-teal-900 rounded
         blur opacity-25 group-hover:opacity-100 transition duration-300'></div>

        <div className=' relative w-full p-4 bg-white bg-opacity-10 backdrop-blur-bg rounded'>
          <img src={pr2} alt='project 1' className=' rounded md:max-w-[500px]' />
        </div>
      </div>

      {/* 3rd */}

      <div className=' relative group'>
        <div className=' w-full h-full absolute -inset-1 bg-gradient-to-r from-teal-100 to-teal-900 rounded
         blur opacity-25 group-hover:opacity-100 transition duration-300'></div>

        <div className=' relative w-full p-4 bg-white bg-opacity-10 backdrop-blur-bg rounded'>
          <img src={pr3} alt='project 1' className=' rounded md:max-w-[500px]' />
        </div>
      </div>

      <div className=' p-6'>
        <h2 className=' text-gray-200 text-3xl font-bold mb-4'>Illustration</h2>
        <p className=' text-gray-300 mb-4'>
          This is a fullstack webapp developed bu using MERN stack. Registered user can message each other in this application.
        </p>
        <div className=' md:flex flex-wrap gap-4 text-4xl justify-center hidden'>
          <DiJavascript1 className=' text-yello-500'/>
          <DiReact className=' text-blue-700'/>
          <DiSass className=' text-pink-600'/>
          <DiNodejsSmall className=' text-green-500'/>
          <SiExpress className=' text-orange-600'/>
          <DiMongodb className=' text-green-700'/>
        </div>
      </div>

      {/* 4th */}

      <div className=' p-6'>
        <h2 className=' text-gray-200 text-3xl font-bold mb-4'>Illustration</h2>
        <p className=' text-gray-300 mb-4'>
          This fullstack <span className=' text-green-500'>springboot</span> project was inspired to make the life of the competitive programmers life easier.
          In this platform users can: find a contest, notify a contest, teach others or, find a mentor etc.
        </p>
        <div className=' md:flex flex-wrap gap-4 text-4xl justify-center hidden'>
          <DiHtml5 className=' text-orange-600'/>
          <DiCss3 className=' text-blue-600'/>
          <DiJava className=' text-blue-500'/>
          <SiSpringboot className=' text-green-500'/>
          <SiMysql className=' text-blue-600' size={45}/>
        </div>
      </div>

      <div className=' relative group'>
        <div className=' w-full h-full absolute -inset-1 bg-gradient-to-r from-teal-100 to-teal-900 rounded
         blur opacity-25 group-hover:opacity-100 transition duration-300'></div>

        <div className=' relative w-full p-4 bg-white bg-opacity-10 backdrop-blur-bg rounded'>
          <img src={pr4} alt='project 1' className=' rounded md:max-w-[500px]' />
        </div>
      </div>

      
    </div>
  )
}

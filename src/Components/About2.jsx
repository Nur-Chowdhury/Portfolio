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

export default function About2() {
  return (
    <div className=' max-w-[1300px] mx-auto p-6 grid md:grid-cols-2 gap-8 place-items-center' id='about'>
      <div className='  bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-6 flex flex-wrap gap-4 text-4xl justify-center'>
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

import React, { useEffect, useState } from 'react'

import fr1 from '../assets/resturant.png';
import fr2 from '../assets/airline.png';
import fr3 from '../assets/spaceview.png'
import fr4 from '../assets/office.png'
import fr5 from '../assets/frontpage.png'

import fs1 from '../assets/pokedex.png'
import fs2 from '../assets/chatapp.png'
import fs3 from '../assets/cpf.png'
import fs4 from '../assets/CUET_Community.png'

import {AiFillGithub} from 'react-icons/ai'


const fsproj = [
    {
        img: fs1,
        title: "Project #1",
        des: "Full stack Pokedex website using React, SCSS & Firebase.",
        links: {
            site: "https://pokedex-phi-eight-86.vercel.app/",
            github: "https://github.com/Nur-Chowdhury/pokedex"
        }
    },
    {
        img: fs2,
        title: "Project #2",
        des: "Full Stack Chat app MERN stack & SCSS",
        links: {
            site: "",
            github: "https://github.com/Nur-Chowdhury/chat-app-3.0"
        }
    },
    {
        img: fs3,
        title: "Project #3",
        des: "Full stack website for finding & Notifying Programming Contests & Finding Mentors using HTML, CSS & Springboot.",
        links: {
            site: "",
            github: "https://github.com/Nur-Chowdhury/cpf-mf"
        }
    },
    {
        img: fs4,
        title: "Project #4",
        des: "Full stack MERN Social Media appliction with features like Profile Update, Post blog, Liking & Commenting, Find Users using various info, Chat with Users etc.",
        links: {
            site: "",
            github: "https://github.com/Nur-Chowdhury/CUET-Community"
        }
    },
]

const frproj = [
    {
        img: fr1,
        title: "Project #1",
        des: "UI for a resturant using react and tailwind.",
        links: {
            site: "https://restaurant-lovat-mu.vercel.app/",
            github: "https://github.com/Nur-Chowdhury/Restaurant"
        }
    },
    {
        img: fr2,
        title: "Project #2",
        des: "UI for a airline using react and tailwind.",
        links: {
            site: "https://airline-hazel.vercel.app/",
            github: "https://github.com/Nur-Chowdhury/airline"
        }
    },
    {
        img: fr3,
        title: "Project #3",
        des: "UI for a Space website using react and tailwind.",
        links: {
            site: "https://space-view-sable.vercel.app/",
            github: "https://github.com/Nur-Chowdhury/SPACE-View"
        }
    },
    {
        img: fr4,
        title: "Project #4",
        des: "UI for a IT farm using react and tailwind.",
        links: {
            site: "https://dev101-nu.vercel.app/",
            github: "https://github.com/Nur-Chowdhury/dev101"
        }
    },
    {
        img: fr5,
        title: "Project #5",
        des: "Home Page for a website using react and tailwind.",
        links: {
            site: "https://homepage-blush-three.vercel.app/",
            github: "https://github.com/Nur-Chowdhury/homepage"
        }
    },
]



export default function Portfolio() {
  
    const [type, setType] = useState(1);

    const [currentProject, setCurrentProject] = useState(frproj[0]);

    useEffect(() => {
        if(type===1){
            setCurrentProject(frproj[0]);
        }
        else{
            setCurrentProject(fsproj[0]);
        }
    },[type])

    return (
    <div className='relative max-w-[800px] mx-auto p-6 md:my-20 ' id='portfolio'>
        <div className='w-full max-w-[600px] flex justify-center'>
            <h1 className=' text-gray-200 text-5xl my-4'>
                My Projects
            </h1>
        </div>

        <div className=' my-12 flex flex-col sm:flex-row justify-center gap-12 md:gap-40 w-full max-w-[600px]'>
            <h1 className={` text-gray-200 text-4xl 
                transition duration-300 cursor-pointer px-4
                 hover:text-blue-800 ${type===1 ? " border-b-4 border-blue-600":""}`}
                 onClick={() => setType(1)}
            >
                Frontend
            </h1>
            <h1 className={` text-gray-200 text-4xl 
                transition duration-300 cursor-pointer px-4
                 hover:text-blue-800 ${type===2 ? " border-b-4 border-blue-600":""}`}
                 onClick={() => setType(2)}
            >
                Full Stack
            </h1>
        </div>
        <div className='flex flex-col md:flex-row'>
            <div className=' glass p-6 w-full border-2 max-w-[600px]'>
                <div className=' w-full h-80'>
                    <img src={currentProject.img} alt='project 1' className=' w-full h-full object-cover rounded mb-4' />
                </div>

                <p className=' text-gray-200 my-4'>{currentProject.des}</p>
                <div className=' flex justify-between'>
                    {currentProject.links.site ? <a href={currentProject.links.site} className=' px-4 py-2 bg-slate-600 text-gray-200 rounded hover:bg-slate-700 transition duration-300'>View</a>: <></>}
                    <a href={currentProject.links.github} className=' px-4 py-2 bg-gray-800 text-gray-200 text-2xl rounded hover:bg-gray-600 transition duration-300'><AiFillGithub /></a>
                </div>
            </div>

            <ul className=' ml-6 flex flex-row md:flex-col gap-6 flex-wrap justify-center mt-4 md:gap-1'>
                {
                    type===1 ? (
                        frproj.map((proj, index) => (
                            <li key={index} onClick={() => setCurrentProject(proj)} className={` cursor-pointer
                                text-gray-300 bg-slate-700 rounded p-2 max-w-[100px] hover:bg-slate-800 transition 
                                duration-300 ${currentProject ===proj ? "bg-slate-900": ""}`}>
                                    {proj.title}
                                </li>
                        ))
                    ):(
                        fsproj.map((proj, index) => (
                                <li key={index} onClick={() => setCurrentProject(proj)} className={` cursor-pointer
                                    text-gray-300 bg-slate-700 rounded p-2 max-w-[100px] hover:bg-slate-800 transition 
                                    duration-300 ${currentProject===proj ? "bg-slate-900": ""}`}>
                                        {proj.title}
                                    </li>
                        ))
                    )
                }
            </ul>
        </div>
        <div className='w-full flex justify-center my-8'>
            <h1 className=' text-2xl text-gray-200'>
                Due to Deployment issues, some of my projects can't be viewed. Please, visit my Github Repositories to see the source code of these projects.
            </h1>
        </div>
    </div>
  )
}

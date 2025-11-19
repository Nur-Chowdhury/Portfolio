import React, { useEffect, useState } from 'react'

import fr1 from '../assets/resturant.png';
import fr2 from '../assets/airline.png';
import fr3 from '../assets/spaceview.png'
import fr4 from '../assets/office.png'
import fr5 from '../assets/co_proj.png'

import fs8 from '../assets/tmmern.png'
import fs7 from '../assets/portfolio.png'
import fs6 from '../assets/frontpage.png'
import fs5 from '../assets/realEstate.png'
import fs1 from '../assets/pokedex.png'
import fs2 from '../assets/chatapp.png'
import fs3 from '../assets/cpf.png'
import fs4 from '../assets/CUET_Community.png'
import fs9 from '../assets/offitrack.png'

import {AiFillGithub} from 'react-icons/ai'


const fsproj = [
    {
        img: fs9,
        title: "Project #1",
        des: "Full-stack Office Asset & Resource Management System using Next.js, Prisma, and PostgreSQL.",
        links: {
            site: "https://offitrack.vercel.app/",
            github: "https://github.com/Nur-Chowdhury/offitrack"
        }
    },
    {
        img: fs7,
        title: "Project #2",
        des: "Full stack Personal Branding Website using Next.js and Tailwind CSS.",
        links: {
            site: "https://portfolio-nine-blush-59.vercel.app/",
            github: "https://github.com/simanto-03/portfolio"
        }
    },
    {
        img: fs6,
        title: "Project #3",
        des: "Full stack Online Survey Portal using MERN and Tailwind CSS.",
        links: {
            site: "https://pro-ih0w.onrender.com",
            github: "https://github.com/Nur-Chowdhury/pro"
        }
    },
    {
        img: fs5,
        title: "Project #4",
        des: "Full stack Real Estate Listing & Vendor Platform using MERN and Tailwind CSS.",
        links: {
            site: "https://realestate-8xp3.onrender.com/",
            github: "https://github.com/Nur-Chowdhury/realEstate"
        }
    },
    {
        img: fs4,
        title: "Project #5",
        des: "Full stack MERN Social Media appliction with features like Profile Update, Post, Liking & Commenting, Find Users using various info, Chat with Users etc.",
        links: {
            site: "https://cuet-community.onrender.com/",
            github: "https://github.com/Nur-Chowdhury/CUET-Community"
        }
    },
    {
        img: fs8,
        title: "Project #6",
        des: "Full stack Smart Tuition Hub using MERN and Tailwind CSS.",
        links: {
            site: "https://tutor-management-dj33.onrender.com/",
            github: "https://github.com/Nur-Chowdhury/Tutor-Management/",
        }
    },
    {
        img: fs1,
        title: "Project #7",
        des: "Full stack Pokedex website using React, SCSS & Firebase.",
        links: {
            site: "https://pokedex-2fe9f.web.app/",
            github: "https://github.com/Nur-Chowdhury/pokedex"
        }
    },
    {
        img: fs3,
        title: "Project #8",
        des: "Full stack website for finding & Notifying Programming Contests & Finding Mentors using HTML, CSS & Springboot.",
        links: {
            site: "",
            github: "https://github.com/Nur-Chowdhury/cpf-mf"
        }
    },
    {
        img: fs2,
        title: "Project #9",
        des: "Full Stack Chat app MERN stack & SCSS",
        links: {
            site: "",
            github: "https://github.com/Nur-Chowdhury/chat-app-3.0"
        }
    },
]

const frproj = [
    {
        img: fr5,
        title: "Project #1",
        des: "UI for a Professional Accountancy Website using Next.js and Tailwind CSS.",
        links: {
            site: "https://co-project.vercel.app/",
            github: "https://github.com/Nur-Chowdhury/co_project"
        }
    },
    {
        img: fr1,
        title: "Project #2",
        des: "UI for a resturant using React and Tailwind CSS.",
        links: {
            site: "https://restaurant-lovat-mu.vercel.app/",
            github: "https://github.com/Nur-Chowdhury/Restaurant"
        }
    },
    {
        img: fr2,
        title: "Project #3",
        des: "UI for a airline using React and Tailwind.",
        links: {
            site: "https://airline-hazel.vercel.app/",
            github: "https://github.com/Nur-Chowdhury/airline"
        }
    },
    {
        img: fr3,
        title: "Project #4",
        des: "UI for a Space website using React and Tailwind.",
        links: {
            site: "https://space-view-sable.vercel.app/",
            github: "https://github.com/Nur-Chowdhury/SPACE-View"
        }
    },
    {
        img: fr4,
        title: "Project #5",
        des: "UI for a IT farm using React and Tailwind.",
        links: {
            site: "https://dev101-nu.vercel.app/",
            github: "https://github.com/Nur-Chowdhury/dev101"
        }
    },
]



export default function Portfolio() {
  
    const [type, setType] = useState(1);

    const [currentProject, setCurrentProject] = useState(fsproj[0]);

    useEffect(() => {
        if(type===1){
            setCurrentProject(fsproj[0]);
        }
        else{
            setCurrentProject(frproj[0]);
        }
    },[type])

    return (
    <div className=' w-full max-w-[1250px] flex flex-col justify-center items-center mx-auto p-6 md:my-20 ' id='portfolio'>
        <div className='w-full max-w-[600px] flex justify-center items-center'>
            <h1 className=' text-gray-200 text-5xl my-4'>
                My Projects
            </h1>
        </div>

        <div className='my-12 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-12 md:gap-40 w-full'>
            <h1 className={` text-gray-200 text-4xl 
                transition duration-300 cursor-pointer px-4
                 hover:text-blue-800 ${type===1 ? " px-20 border-b-4 border-blue-600":""}`}
                 onClick={() => setType(1)}
            >
                Full Stack
            </h1>
            <h1 className={` text-gray-200 text-4xl 
                transition duration-300 cursor-pointer px-4
                 hover:text-blue-800 ${type===2 ? " px-20 border-b-4 border-blue-600":""}`}
                 onClick={() => setType(2)}
            >
                Frontend
            </h1>
        </div>
        <div className='flex flex-col  sr850:flex-row items-center'>
            <div className=' glass p-6 w-full border-2  max-w-[700px] flex flex-col justify-between'>
                <div className=' w-full h-full flex flex-col'>
                    <img src={currentProject.img} alt='project 1' className=' w-full h-[250px] md:h-[500px] rounded' />
                    <p className=' text-gray-200 my-4'>{currentProject.des}</p>
                </div>

                <div className=' flex justify-between'>
                    {currentProject.links.site ? <a href={currentProject.links.site} className=' px-4 py-2 bg-slate-600 text-gray-200 rounded hover:bg-slate-700 transition duration-300'>View</a>: <></>}
                    <a href={currentProject.links.github} className=' px-4 py-2 bg-gray-800 text-gray-200 text-2xl rounded hover:bg-gray-600 transition duration-300'><AiFillGithub /></a>
                </div>
            </div>

            <ul className=' ml-6 flex flex-wrap sr850:flex-col gap-6 justify-center mt-4 md:gap-1'>
                {
                    type===2 ? (
                        frproj.map((proj, index) => (
                            <li key={index} onClick={() => setCurrentProject(proj)} className={` cursor-pointer
                                text-gray-300 bg-slate-700 rounded p-2 max-w-[100px] hover:bg-slate-800 transition-all 
                                duration-300 ${currentProject ===proj ? "bg-slate-900": ""}`}
                            >
                                {proj.title}
                            </li>
                        ))
                    ):(
                        fsproj.map((proj, index) => (
                                <li key={index} onClick={() => setCurrentProject(proj)} className={` cursor-pointer
                                    text-gray-300 bg-slate-700 rounded p-2 max-w-[100px] hover:bg-slate-800 transition 
                                    duration-300 ${currentProject===proj ? "bg-slate-900": ""}`}
                                >
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

import React from 'react'
import { MdOutlineRemoveRedEye } from "react-icons/md";


const ProjectCard = ({ project }) => {
    return (
        <div className='cursor-pointer group z-10'>
            <div className='relative rounded-xl overflow-hidden'>
                <img src={project.image} alt={project.title} className='w-full h-full object-cover aspect-video  transition-all duration-500 transform group-hover:scale-110' />
                <div className='absolute hidden top-0 left-0 w-full h-full group-hover:block bg-black opacity-30'></div>
                <div className='absolute hidden top-1/2 left-1/2 w-[50px] h-[50px] bg-ternary rounded-xl group-hover:flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300'>
                    <MdOutlineRemoveRedEye className='text-yellow-1 text-2xl' />
                </div>
            </div>
            <div className='mt-4 ml-3 text-[15px]'>
                <h3 className='text-white-1'>{project.title}</h3>
                <p className=' text-light-gray'>{project.type}</p>
            </div>
        </div>
    )
}

export default ProjectCard


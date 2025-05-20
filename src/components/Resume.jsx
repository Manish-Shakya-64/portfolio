import React from 'react'
import Timeline from './Timeline'
import { experiences, education } from '../data'
import { CgFileDocument } from "react-icons/cg";
import resume from '../assets/Manish_Shakya_FullStack_Developer_Resume.pdf'

const Resume = () => {
    return (
        <div className='w-full p-5 md:p-8 transition-all duration-1000 ease-in-out'>
            <div className="heading flex flex-col gap-1 md:gap-4 mb-6">
                <h1 className='text-2xl sm:text-3xl md:text-[33px] font-semibold text-white-1'>Resume</h1>
                <span className="underline w-[40px] h-[5px] bg-gradient rounded-md"></span>
            </div>


            <Timeline experiences={education} />
            <br />
            <br />
            <br />
            <Timeline experiences={experiences} />
            <div className='w-full flex justify-center md:justify-end mt-8'>
                <a
                    href={resume}
                    download="Manish_Shakya_FullStack_Developer_Resume.pdf"
                    className='w-full md:w-fit submit-btn px-6 py-4 flex items-center justify-center gap-2 rounded-2xl shadow-s2 focus:outline-none transition-all duration-100 text-yellow-1 text-sm md:text-base z-10'
                >
                    <CgFileDocument className='text-xl' /> Download CV
                </a>
            </div>
        </div>
    )
}

export default Resume
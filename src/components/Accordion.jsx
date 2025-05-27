import React, { useState } from 'react'
import img from '../assets/my-avatar.png'
import { HiOutlineMail } from "react-icons/hi";
import {
    IoPhonePortraitOutline,
    IoLocationOutline,
    IoLogoLinkedin,
    IoLogoInstagram,
    IoLogoGithub,
} from "react-icons/io5";
import { SocialLinks } from '../data';
import FadeBox from './animations/FadeBox';


const Accordion = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <FadeBox>
            <div className={`w-full  max-h-max flex flex-col items-center p-4 sm:p-8 xl:w-auto relative rounded-3xl bg-secondary shadow-s1 xl:pt-14 transition-all duration-300 border-1 border-ternary`} >
                <button
                    className={`absolute top-0 right-0 p-2 flex items-center justify-between transition-all duration-300 shadow-s2 rounded-bl-2xl rounded-tr-3xl z-[1] xl:hidden hover:bg-black-1 border-l border-ternary`}
                    onClick={toggleAccordion}
                    aria-expanded={isOpen}
                >
                    <svg
                        className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''} sm:hidden text-yellow-1`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                    <span className='hidden sm:block text-yellow-1 text-xs px-1 py-0'>
                        {isOpen ? 'Hide Contacts' : 'Show Contacts'}
                    </span>
                </button>
                <div className={`w-full flex items-center gap-6 xl:flex-col xl:border-ternary xl:pb-2`}>
                    <div className='bg-ternary rounded-3xl sm:rounded-4xl transition-transform duration-300 '>
                        <img src={img} alt="" className='w-22 sm:w-30 xl:w-38' />
                    </div>
                    <div className='flex flex-col items-start justify-center gap-2 sm:gap-4 text-white-1 xl:items-center xl:pb-6'>
                        <p className='text-xl sm:text-2xl md:text-[26px] font-semibold text-nowrap'>Manish Shakya</p>
                        <p className='bg-light-gray-2  text-[10px] sm:text-xs px-4 py-[6px] rounded-[8px] bg-[hsl(240, 1%, 17%)] transition-colors duration-300 hover:bg-[hsl(240, 1%, 25%)]'>
                            Fullstack Developer
                        </p>
                    </div>
                </div>
                <div
                    className={`w-full  transition-all duration-700 ease-in-out ${isOpen ? 'mt-6 max-h-[500px] opacity-100 border-t border-ternary' : 'max-h-0 opacity-0 border-transparent'} xl:max-h-[500px] xl:opacity-100 xl:border-t xl:border-ternary`}
                >
                    <div className='flex gap-6 mt-4 flex-col lg:gap-8 lg:flex-col lg:items-center lg:justify-start py-2'>
                        <ConttactCard title={"Email"} icon={<HiOutlineMail />} info={"mshkya.dev@gmail.com"} type={'email'} />
                        <ConttactCard title={"Phone"} icon={<IoPhonePortraitOutline />} info={"+91 915750****"} type={'contact'} />
                        <ConttactCard title={"Location"} icon={<IoLocationOutline />} info={"Ahmedabad"} type={'location'} url="https://maps.app.goo.gl/RbCvWGUss6NpJfmF8" />
                    </div>
                </div>
                <div className={`w-full  transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100 mt-4 xl:mt-0' : 'max-h-0 opacity-0'} xl:max-h-[500px] xl:opacity-100 border-t xl:border-t-0 border-ternary`}
                >
                    <ul className='flex items-center justify-center gap-4 mt-8 xl:mt-6'>
                        {SocialLinks.map((item, index) => (
                            <li key={index} className='text-xl text-light-gray hover:text-white-1 transition-colors duration-300'>
                                <a href={item.url} target="_blank" rel="noopener noreferrer">
                                    {<item.icon />}
                                </a>
                            </li>
                        ))}

                    </ul>
                </div>
            </div>
        </FadeBox>
    )
}

export default Accordion

const ConttactCard = ({ title, info, icon, type, url = null }) => {
    return (
        <li className='w-full sm:w-1/2 lg:w-full flex items-center gap-2 sm:gap-4 lg:gap-4 transition-transform duration-800'>
            <div className='icon-box flex items-center justify-center text-xl sm:text-2xl h-[46px] w-[46px] shadow-s2 text-yellow-1 bg-black-1 rounded-xl transition-colors duration-300'>
                {icon}
            </div>
            <a
                href={
                    type === 'email'
                        ? `mailto:${info}`
                        : type === 'contact'
                            ? `tel:${info}`
                            : type === 'location'
                                ? `(url)`
                                : '#'
                }
                target={type === 'location' ? '_blank' : '_self'} // open map in new tab
                className='flex flex-col items-start justify-center'
            >                <h1 className='text-xs font-medium text-light-gray'>{title.toUpperCase()}</h1>
                <p className='text-xs md:text-sm text-white-1 truncate max-w-[150px]'>{info}</p>
            </a>
        </li>
    )
}
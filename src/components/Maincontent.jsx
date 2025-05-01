import React, { useState } from 'react'
import Navbar from './Navbar'
import About from './About'

const Maincontent = () => {
    const [currentTab, setCurrentTab] = useState('about')
    console.log(currentTab)
    return (
        <section className='w-full h-[2000px] shadow-s1 bg-secondary rounded-3xl border border-ternary relative'>
            <Navbar currentTab={currentTab} setCurrentTab={setCurrentTab} />
            <div className='w-full h-full'>
                {currentTab === 'about' && <About />}
                {currentTab === 'resume' && <div className='text-2xl text-white'>Projects</div>}
                {currentTab === 'projects' && <div className='text-2xl text-white'>Contact</div>}
                {currentTab === 'contact' && <div className='text-2xl text-white'>Skills</div>}
            </div>
        </section>
    )
}

export default Maincontent
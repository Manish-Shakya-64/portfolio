import React, { useState } from 'react'
import Navbar from './Navbar'
import About from './About'
import { Skills } from '../data'
import ImageSlider from './ImageSlider'
import Contact from './Contact'

const Maincontent = () => {
    const [currentTab, setCurrentTab] = useState('about')
    return (
        <section className='w-full h-min shadow-s1 bg-secondary rounded-3xl border border-ternary relative'>
            <Navbar currentTab={currentTab} setCurrentTab={setCurrentTab} />
            <div className='w-full h-full'>
                {currentTab === 'about' && <About />}
                {currentTab === 'resume' && <div className='text-2xl text-white'>Projects</div>}
                {currentTab === 'projects' && <div className='text-2xl text-white'>Contact</div>}
                {currentTab === 'contact' && <Contact />}
            </div>
        </section>
    )
}

export default Maincontent
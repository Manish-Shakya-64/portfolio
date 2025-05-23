import React, { useState } from 'react'
import SectionHeader from './SectionHeader'
import DropDown from './DropDown'
import SelectList from './SelectList'
import ProjectCard from './ProjectCard'
import p1 from '../assets/p-1.png'
import p2 from '../assets/p-2.png'
import p3 from '../assets/dice-game.png'
const Projects = () => {
    const [selected, setSelected] = useState('All')
    const projects = [
        {
            image: p3,
            title: 'Dice Game',
            type: 'Web'
        },
    ]
    return (
        <div className='w-full p-5 md:p-8 transition-all duration-1000 ease-in-out'>
            <SectionHeader />
            <DropDown items={['All', 'Web', 'Mobile', 'Desktop']} selected={selected} setSelected={setSelected} classes='block md:hidden z-20' />
            <SelectList items={['All', 'Web', 'Mobile', 'Desktop']} selected={selected} setSelected={setSelected} classes='hidden md:block mt-2' />
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10'>
                {projects.map((project) => (
                    selected.toLowerCase() === 'all' || project.type.toLowerCase() === selected.toLowerCase() ? <ProjectCard key={project.id} project={project} /> : null
                ))}
            </div>
        </div>
    )
}

export default Projects
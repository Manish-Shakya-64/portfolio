import { Typography } from '@mui/material'
import React from 'react'
import "./About.css"
const About = () => {
  return (
    <div className='about'>
      <div className="aboutContainer">

        <Typography>This is simple quote</Typography>
      </div>
      <div className="aboutContainer2">
        <div>
            <img src="https://avatars.githubusercontent.com/u/100149882?s=400&u=7e19a0966c796ef4ad187846858ef1d779155ed1&v=4z" alt="Manish"
            className='aboutAvatar' />
            <Typography variant='h4' className='aboutName'>Manish</Typography>
            <Typography>Full Stack Developer</Typography>
        </div>
        <div>
        <Typography className='aboutdescription'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam perspiciatis inventore doloremque dolore voluptates officia aut, modi sequi aliquam cum eligendi vero autem labore tempore, voluptas minus corporis veritatis quia!</Typography>
        </div>
      </div>

    </div>
  )
}

export default About

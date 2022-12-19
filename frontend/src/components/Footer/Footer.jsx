import { Typography } from '@mui/material'
import {Link} from "react-router-dom"
import React from 'react'
import "./Footer.css"
import {BsGithub, BsInstagram, BsLinkedin, BsYoutube} from "react-icons/bs"

const Footer = () => {
  return (
    <div className='footer'>
      <div className='leftDiv'>
        <Typography variant='h5'>About Me</Typography>
        <Typography className='para'>
          Hey, My name is Manish Shakya. I am a Full-Stack Developer
        </Typography>

        <Link to="/contact" className='footerContactBtn'>
          <Typography>Contact Me</Typography>
        </Link>
      </div>
      <div className='rightDiv'>
        <Typography variant="h6">Social Media</Typography>
        <a href="https://github.com/Manish-Shakya-64" target="blank">
          <BsGithub />
        </a>
        <a href="https://www.instagram.com/manish_tech_hacker/" target="blank">
          <BsInstagram />
        </a>
        <a href="https://www.linkedin.com/in/manish-shakya-7a763a232" target="blank">
          <BsLinkedin />
        </a>
        <a href="https://github.com/Manish-Shakya-64" target="blank">
          <BsYoutube />
        </a>
      </div>

    </div>
  )
}

export default Footer

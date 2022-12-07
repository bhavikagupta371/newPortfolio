import { Typography } from '@mui/material';
import React from 'react'
import { Link } from "react-router-dom";
import'./Footer.css';
import { BsGithub,  BsInstagram, BsLinkedin, BsTelegram } from "react-icons/bs";
const Footer = () => {
  return (
    <div className='footer'>
        <div>
        <Typography variant="h5">About Me</Typography>
        <Typography>
          Hey, my name is Bhavika Gupta. I am a Full-Stack Developer and coding is my life
        </Typography>
        <Link to='/contact' className='footerContactBtn'>
        <Typography>Contact Us</Typography>
        </Link>
        </div>
        <div>
        <Typography variant="h6">Social Media</Typography>
        <a href="https://github.com/bhavikagupta371/" target="black">
          <BsGithub />
        </a>
        <a href="https://instagram.com/bhavika_gupta371/" target="black">
          <BsInstagram />
        </a>
        <a href="https://www.linkedin.com/in/bhavikagupta371" target="black">
          <BsLinkedin />
        </a>
        <a href="https://t.me/918115741650" target="black">
          <BsTelegram />
          </a>
        </div>
    </div>
  )
}

export default Footer
import { Typography } from '@mui/material'
import React from 'react'
import './About.css'
function About() {
  return (
    <div className='about'>

        <div className='aboutContainer'>
            <Typography> This is a sample quart</Typography>
        </div>
        <div className='aboutContainer2'>
            <div>
                <img  src='https://avatars.githubusercontent.com/u/109134030?v=4' alt='bhavi' className='aboutAvatar'/>
                <Typography variant='h4'
               style={{ margin: "1vmax 0", color: "black" }}>Bhavika</Typography>
                <Typography >Full Stack Developer</Typography>
                <Typography style={{ margin: "1vmax 0", textAlign: "center" }}>I am a Student </Typography>
            </div>
            <div>
                <Typography style={{
                     wordSpacing: "5px",
                     lineHeight: "50px",
                     letterSpacing: "5px",
                     textAlign: "right",
                }}>This is description Description is the pattern of narrative development that aims to make vivid a place, object, character, or group.Description is one of four rhetorical modes also known .</Typography>
            </div>
        </div>
    </div>
  )
}

export default About
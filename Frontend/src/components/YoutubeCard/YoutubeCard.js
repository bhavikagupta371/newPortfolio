import { Typography } from '@mui/material';
import React from 'react'
import './YoutubeCard.css';
const YoutubeCard = ({
    url = 'https://youtu.be/w7ejDZ8SWv8',
title = 'learn react',
image
}) => {

    
  return (
   
    <div className='youtubeCard'>
        <a href={url} target='blank'>
        <img src={image} alt='video'/>
        <Typography>{title}</Typography>
        </a>
    </div>
  )
}

export default YoutubeCard;
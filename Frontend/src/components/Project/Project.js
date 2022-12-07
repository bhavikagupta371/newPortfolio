import { Button, Typography } from '@mui/material'
import React from 'react'
import './Project.css'
import { AiOutlineProject } from "react-icons/ai";
import { Delete } from '@mui/icons-material';
import { FaRegSmileWink } from "react-icons/fa";
  export const ProjectCard =({
    url,
  projectImage,
  projectTitle,
  description,
  technologies,
  isAdmin = false,
  
 })=>{
    return(
        <>
        <a href={url} className="projectCard" target='black'>
            <div>
            <img src={projectImage} alt="Project" />
          <Typography variant="h5">{projectTitle}</Typography>
        </div>
        <div>
          <Typography variant="h4"> About Project</Typography>
          <Typography>{description}</Typography>
          <Typography variant="h6">Tech Stack: {technologies}</Typography>
      
            </div>
        </a>

        {isAdmin && (
        <Button
          style={{ color: "rgba(40,40,40,0.7)" }}
        >
          <Delete />
        </Button>
      )}
        </>
    )
 }
const Projects=() =>{
    const projects =[1,2,3];
  return (
    <div className='projects'>

<Typography variant="h3">
        Projects <AiOutlineProject />
      </Typography>

      <div className='projectsWrapper'>{projects.map((item) => (
          <ProjectCard
          url='https://github.com/bhavikagupta371/'
          projectImage='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe8IQrpci_lb0KcKSoTutxeFX25kDxHk2SfcDguEUp&s'
          projectTitle='sample project'
          description='this is my first sample project'
          technologies='js, node, mongo'
          />
        ))}</div>

<Typography variant="h3" style={{ font: "100 1.2rem 'Ubuntu Mono'" }}>
        All The Projects Shown Above Are Made By Me <FaRegSmileWink />
      </Typography>
    </div>
  )
}

export default Projects;
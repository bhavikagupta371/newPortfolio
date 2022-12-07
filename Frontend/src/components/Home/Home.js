import React, { useEffect } from 'react'
import"./Home.css"
import * as THREE from 'three';
import moonImage from '../../images/moon.jpg';
import earthImage from '../../images/earth.jpg'
import spaceImage from "../../images/space.jpg";
import { Typography } from '@mui/material';
import TimeLine from '../TimeLine/TimeLine';
import {
  SiCplusplus,
  SiReact,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiExpress,
  SiCss3,
  SiHtml5,
  SiThreedotjs,
} from "react-icons/si";
import YoutubeCard from '../YoutubeCard/YoutubeCard';
const Home = () => {

  useEffect(() => {

    const textureLoader = new THREE.TextureLoader();
    const moonTexture = textureLoader.load(moonImage);
    const venusTexture = textureLoader.load(earthImage);
    const spaceTexture = textureLoader.load(spaceImage);


    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    const canvas = document.querySelector(".homeCanvas");
    const renderer = new THREE.WebGLRenderer({ canvas});

const moonGeometry = new THREE.SphereGeometry(2, 64, 64);
const moonMaterial = new THREE.MeshStandardMaterial({map: moonTexture  });
const moon = new THREE.Mesh(moonGeometry,moonMaterial);

const venusGeometry = new THREE.SphereGeometry(3, 64, 64);
    const venusMaterial = new THREE.MeshBasicMaterial({ map: venusTexture });
    const venus = new THREE.Mesh(venusGeometry, venusMaterial);
    venus.position.set(8, 5, 5);

const pointLight = new THREE.PointLight(0xffffff, 1);
const pointLight2 = new THREE.PointLight(0xffffff, 0.1);

pointLight.position.set(8, 5, 5);
pointLight2.position.set(-8, -5, -5);


 scene.add(moon);
 scene.add(pointLight);
 scene.add(venus);
scene.add(pointLight2);
scene.background = spaceTexture;

const constSpeed = 0.01;
window.addEventListener("mousemove", (e) => {
  if (e.clientX <= window.innerWidth / 2) {
    moon.rotation.x -= constSpeed;
    moon.rotation.y += constSpeed;
    venus.rotation.x -= constSpeed;
    venus.rotation.y += constSpeed;
  }
  if (e.clientX > window.innerWidth / 2) {
    moon.rotation.x -= constSpeed;
    moon.rotation.y -= constSpeed;
    venus.rotation.x -= constSpeed;
    venus.rotation.y -= constSpeed;
  }

  if (e.clientY > window.innerHeight / 2) {
    moon.rotation.x -= constSpeed;
    moon.rotation.y += constSpeed;
    venus.rotation.x -= constSpeed;
    venus.rotation.y += constSpeed;
  }

  if (e.clientY <= window.innerHeight / 2) {
    moon.rotation.x -= constSpeed;
    moon.rotation.y -= constSpeed;
    venus.rotation.x -= constSpeed;
    venus.rotation.y -= constSpeed;
  }
})
 
 camera.position.set (4,4,8);
 const animate = () => {
  requestAnimationFrame(animate);
  moon.rotation.y += 0.001;
  venus.rotation.y += 0.001;
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.render(scene, camera);
 };
    
 animate();
  },[])
  return (
    <div className='home'>

<canvas className='homeCanvas'> </canvas>
<div className='homeContainer'>
  <Typography variant='h3'>
TIMELINE
  </Typography>
  <TimeLine timelines={[1,2,3,4]}/>
</div>

<div className='homeSkills'>
<Typography variant="h3">SKILLS</Typography>

<div className="homeCubeSkills">
<div className="homeCubeSkillsFaces homeCubeSkillsFace1">
<img src='https://heise.cloudimg.io/width/600/q75.png-lossy-75.webp-lossy-75.foil1/_www-heise-de_/tipps-tricks/imgs/96/2/4/4/6/1/2/8/Bildschirmfoto_2018-05-30_um_08-6aae3c7af906438d.png' alt='face1'/>
  </div>

  <div className="homeCubeSkillsFaces homeCubeSkillsFace2">
<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png' alt='face2'/>
  </div>

  <div className="homeCubeSkillsFaces homeCubeSkillsFace3">
<img src='https://static.javatpoint.com/images/javascript/javascript_logo.png' alt='face3'/>
  </div>

  <div className="homeCubeSkillsFaces homeCubeSkillsFace4">
<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png' alt='face4'/>
  </div>

  <div className="homeCubeSkillsFaces homeCubeSkillsFace5">
<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1200px-Bootstrap_logo.svg.png' alt='face5'/>
  </div>

  <div className="homeCubeSkillsFaces homeCubeSkillsFace6">
<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png' alt='face6'/>
  </div>
</div>

<div className="cubeShadow"></div>

<div className="homeskillsBox" id="homeskillsBox">
<SiCplusplus />
          <SiHtml5 />
          <SiCss3 />
          <SiJavascript />
          <SiMongodb />
          <SiExpress />
          <SiReact />
          <SiNodedotjs />
          <SiThreedotjs />
</div>
</div>

<div className='homeYoutube'>

  <Typography variant='h3'> YOUTUBE VIDEOS</Typography>
  <div className='homeYoutubeWrapper'>
    <YoutubeCard image='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png' title='react learn'/>
    <YoutubeCard image='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png' title='react learn'/>
    <YoutubeCard image='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png' title='react learn'/>
    <YoutubeCard image='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png' title='react learn'/>
    
  </div>
</div>
    </div>
  )
}

export default Home
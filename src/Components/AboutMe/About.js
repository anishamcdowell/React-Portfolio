import React, { useState, useEffect } from 'react';
import { ButtonGroup } from 'react-bootstrap';
import photo from '../../assets/profile.jpg';
import './about.css';

export const About = () => {
  const frontEndSkills = [
    'HTML',
    'CSS',
    'Javascript',
    'Sass',
    'jQuery',
    'Bootstrap',
    'React',
  ];
  const backEndSkills = [
    'Javascript',
    'Express',
    'Node.js',
    'MySQL',
    'MongoDB',
    'Insomnia',
  ];
  const generalSkills = [
    'Git',
    'Heroku',
    'JawsDB',
    'MongoDB Atlas',
    'Adobe Photoshop',
    'Adobe XD',
    'Figma',
  ];
  const bonus =
    "I find problem solving hugely rewarding and love to learn new concepts and gain new skills with each speed bump I encounter. I value and try to cultivate a growth mindset where any problems I face are valuable lessons waiting to be learned. I believe strongly in the power of 'yet'. If I don't know something, I just don't know it yet. If I haven't solved an issue, I just haven't solved it yet. I persist until I reach the other side my yets.";

  const [width, setWidth] = useState(window.innerWidth);
  const handleResize = () => {
    setWidth(window.innerWidth);
  };
  const breakpoint = 1000;

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [width]);

  console.log(width);

  return (
    <div id='about'>
      <div className='left-div'>
        <h2>Bio</h2>
        <div className='about-copy'>
          <p>
            Hi! My name's Anisha and I'm a full stack web developer based in
            Charlotte, NC. I have been coding on the front end on and off for
            fun since I was in middle school, but in mid-2020 I decided to
            tackle back end, and to pursue web development as a career.
          </p>
          <p>
            I have had a variety of jobs the past, from office admin, to
            teacher, to technician at an optometry practice. In these roles I
            learned a few things about myself that helped me realize web
            development was where I was meant to end up:
            <br />
            <br />
            <p>
              💭 I am an avid problem solver who stays persistent no matter what
              speed bumps I encounter.
            </p>
            <p>
              🧠 I am a knowledge junkie. Learning new concepts and mastering
              new skills is just plain fun for me!
            </p>
            <p>
              🌱 I value a growth mindset and believe strongly in the 'power of
              yet'.
            </p>
          </p>
          <p>
            When I'm not coding I can be found painting or drawing, reading,
            playing or preparing for D&D, or taking too many photos of my kids,
            Meatball
            <span id='meatball'>🐱</span> and Data
            <span id='data'>🐶</span>.
          </p>
        </div>
      </div>
      <div className='right-div'>
        {/* <img src={photo} id='bio-img' /> */}
        <h2>Skills</h2>

        <div className='skills-div' id='frontend-skills-div'>
          <h3>Front End</h3>
          {frontEndSkills.map((skill) => (
            <p className='skill-item'>{skill}</p>
          ))}
        </div>
        <div className='skills-div' id='backend-skills-div'>
          <h3>Back End</h3>
          {backEndSkills.map((skill) => (
            <p className='skill-item'>{skill}</p>
          ))}
        </div>
        <div className='skills-div' id='general-skills-div'>
          <h3>General</h3>
          {generalSkills.map((skill) => (
            <p className='skill-item'>{skill}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;

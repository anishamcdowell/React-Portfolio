import React, { useState, useEffect } from 'react';
import './about.css';
import './mobileabout.css';

export const About = () => {
  const frontEndSkills = [
    'HTML',
    'CSS',
    'Sass',
    'Javascript',
    'jQuery',
    'Bootstrap',
    'React',
  ];
  const backEndSkills = [
    'Javascript',
    'NodeJS',
    'ExpressJS',
    'MySQL',
    'MongoDB',
    'Insomnia',
  ];
  const generalSkills = ['Git', 'OOP', 'MVC'];

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
    <section id='about'>
      <section id='bio' className='about-sections'>
        <h3 className='about-sections-header'>Bio</h3>
        <div className='about-section-text' id='bio-text'>
          <p>
            Full stack web developer based in Charlotte, NC with 1 year of
            experience in backend development and 2 years experience with
            frontend development. July 2021 graduate of UNC Charlotte's Full
            Stack Web Development Coding Bootcamp.
          </p>
          <p>💡 I'm a tenacious problem solver who gives her all</p>
          <p>😍 I'm passionate about learning new concepts and skills</p>
          <p>
            🌱 I learn and work with a growth mindset the follows the 'power of
            yet'
          </p>
          <p>
            Outside of web development and design, I enjoy other creative
            activies like drawing, painting, and writing.
          </p>
        </div>
      </section>

      <div className='about-divider'></div>

      <section id='skills' className='about-sections'>
        <h3 className='about-sections-header'>Skills</h3>
        <div className='about-section-text' id='skills-text'>
          <div id='frontend-skills' className='skill-section'>
            <p className='skill-header'>Frontend</p>
            <div className='skill-pst'>
              {frontEndSkills.map((skill) => (
                <p className='skill-tag'>{skill}</p>
              ))}
            </div>
          </div>
          <div id='backend-skills' className='skill-section'>
            <p className='skill-header'>Backend</p>
            <div className='skill-pst'>
              {backEndSkills.map((skill) => (
                <p className='skill-tag'>{skill}</p>
              ))}
            </div>
          </div>
          <div id='general-skills' className='skill-section'>
            <p className='skill-header'>General</p>
            <div className='skill-pst'>
              {generalSkills.map((skill) => (
                <p className='skill-tag'>{skill}</p>
              ))}
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default About;

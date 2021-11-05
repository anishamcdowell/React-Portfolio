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
            Hey there! My name's Anisha and I'm a full stack web developer based
            out of Charlotte, NC.
          </p>
          <p>
            I've been building websites on and off for fun ever since my mom, a
            computer science degree holder and teacher of the same subject at my
            middle school, introduced me to HTML and CSS at age 11.
          </p>
          <p>
            I strayed away from coding for a few years but found my way back to
            it toward the end of 2020. Then, in the middle of the COVID-19
            pandemic, I realized what I was doing for fun was something I wanted
            to do for a living.
          </p>
          <p>
            To get my bearings in current industry technologies and trends, I
            enrolled in (and in July 2021 graduated from) a 6-month long full
            stack certification program. Since then I've levelled up my skills,
            become more passionate about web development than ever before, and
            I'm ready to get to work.
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

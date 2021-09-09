import React, { useState, useEffect } from 'react';
import './about.css';

export const About = () => {
  const frontEndSkills = [
    'HTML',
    'CSS',
    'Javascript',
    'jQuery',
    'Bootstrap',
    'React',
  ];
  const backEndSkills = [
    'Javascript',
    'Node.js',
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
    <div id='about'>
      <div className='left-div'>
        <h2>About Me</h2>
        <div className='about-copy'>
          <p>
            Hi! My name's Anisha and I'm a full stack web developer based in
            Charlotte, NC. I have been coding on and off for fun since I was in
            middle school, but in mid-2020 I decided to make the exciting leap
            into web development as a career.
          </p>
          <p>
            My education was based in fine arts and because of that I am highly
            interested in UI design and front end technologies. While I am
            heavily front end biased, I am highly motivated to be a skilled full
            stack developer and am experienced with back end technologies such
            as Node.js, MonogoDB, MySQL, and more. Check out more about my
            skills to your right.
          </p>
          <p>
            Outside of coding I am a lifelong artist; I paint, draw, weave, and
            dabble in writing. If I'm not pursuing one of my creative hobbies I
            can be found watching Star Trek (If you're a TOS, TNG, or VOY fan
            let's talk), playing D&D, or taking too many photos of my cat,
            Meatball.
          </p>
        </div>
      </div>
      <div className='right-div'></div>
    </div>
  );
};

export default About;

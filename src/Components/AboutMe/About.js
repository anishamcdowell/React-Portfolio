import React, { useState, useEffect } from "react";
import "./about.css";

export const About = () => {
  const frontEndSkills = [
    "HTML",
    "CSS",
    "Javascript",
    "jQuery",
    "Bootstrap",
    "React",
  ];
  const backEndSkills = [
    "Javascript",
    "Node.js",
    "MySQL",
    "MongoDB",
    "Insomnia",
  ];
  const generalSkills = ["Git", "OOP", "MVC"];

  const [width, setWidth] = useState(window.innerWidth);
  const handleResize = () => {
    setWidth(window.innerWidth);
  }
  const breakpoint = 1000;

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize)
  }, [width])

  console.log(width);

  return (
    <div id="about">

      <div id="bio" className="about-section">

        <div className="d-flex justify-content-center">
          <h3>Bio</h3>
        </div>

        <div className="bordered-content" id="bio-text">
        <p>
          Full stack web developer based in Charlotte, NC with 1 year of experience in backend development and 2 years experience with frontend development. July 2021 graduate of UNC Charlotte's Full Stack Web Development Coding Bootcamp. 
        </p>
        <p>
          Outside of web development and design, I enjoy other creative activies like drawing, painting, and writing.
        </p>
        </div>
      </div>
      {width <= breakpoint ? (
        <></>
      ) : (
        <div id="and"><p>&</p></div>
      )}    
      <div id="skills-container"  className="about-section">
      <div className="d-flex justify-content-center">
          <h3>Skills</h3>
          </div>
      <div id="skills" className="bordered-content">
        <div id="frontend-skills">
            <p className="skill-header">Frontend</p>
          <div className="skill-pst">
            {frontEndSkills.map((skill) => (
              <p className="skill-tag">{skill}</p>
            ))}
          </div>
        </div>
        <div id="backend-skills">
            <p className="skill-header">Backend</p>
          <div className="skill-pst">
            {backEndSkills.map((skill) => (
              <p className="skill-tag">{skill}</p>
            ))}
          </div>
        </div>
        <div id="general-skills">
            <p className="skill-header">General</p>
          <div className="skill-pst">
            {generalSkills.map((skill) => (
              <p className="skill-tag">{skill}</p>
            ))}
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default About;

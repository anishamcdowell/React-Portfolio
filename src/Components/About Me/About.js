import React from "react";
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

  return (
    <div id="about">
      <div id="bio" className="about-section">
          <h3>Bio</h3>
          <div className="bordered-content">
        <p>
          Full stack web developer and designer from Charlotte, NC with 1 year
          of experience. July 2021 gradaute of UNC Charlotte's Full Stack Web
          Development Coding Bootcamp. UNC Pembroke alumni with a Bachelor of
          Arts in Art, May 2017.
        </p>
        <p>
          Outside of web development and design, I enjoy other creative activies
          pke drawing, painting, and writing. I also love to stay active with
          dance and strength training. In between creative or active interests,
          I can be found reading or taking too many pictures of my cat.
        </p>
        </div>
      </div>
      <div id="and"><p>&</p></div>
      <div id="skills-container"  className="about-section">
      <h3>Skills</h3>
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

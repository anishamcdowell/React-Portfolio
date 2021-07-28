import React from "react";
import "./project.css";
import Connect from "../../images/work/connect-img.png";
import Media from "../../images/work/media-img.png";
import Notes from "../../images/work/notes-img.png";

const Project = () => {
  const projects = [
    {
      title: ".connect( )",
      description: "MERN stack dating web app for remote tech sector workers.",
      deployedLink: "https://connect-dating-app.herokuapp.com/",
      githubLink: "https://github.com/tmgorogers/Connect-Dating-App",
      img: Connect,
    },
    {
      title: "MEDIA-fi",
      description: "Song recommendation web app using Giphy and Spotify APIs.",
      deployedLink: "https://polar-atoll-49785.herokuapp.com/index.html",
      githubLink: "https://github.com/anishamcdowell/Media-fi",
      img: Media,
    },
    {
      title: "Note Taker",
      description: "Express note taking app utilizing CRUD operations.",
      deployedLink: "https://arcane-gorge-39623.herokuapp.com/",
      githubLink: "https://github.com/anishamcdowell/Note-Taker",
      img: Notes,
    },
  ];

  return (
      <div id="portfolio" className="p-3 bg-warning border-0 rounded-0 d-flex flex-column justify-items-center align-items-center">
        <div id="project-map-container">
        {projects.map((project) => {
          return (
            <div class="project-div">
                <div className="text">
                <div className="">
                  <h4>{project.title}</h4>
                  <p>{project.description}</p>
                </div>
                <div className="links">
                  <a href={project.deployedLink} className="link">
                    Deployed Project
                  </a>
                  <a href={project.githubLink} className="link">
                    GitHub Codebase
                  </a>
                </div>
              </div>
              <div
                className="image"
                style={{
                  backgroundImage: `url(${project.img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
            </div>
          );
        })}
        </div>
      </div>

  );
};

export default Project;

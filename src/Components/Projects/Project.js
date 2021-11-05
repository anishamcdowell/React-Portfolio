import React, { useState, useEffect } from 'react';
import './project.css';
import MobileProjects from '../Mobile Components/Project Card/MobileProjects';
import Connect from '../../images/work/connect-img.png';
import Media from '../../images/work/media-img.png';
import Notes from '../../images/work/notes-img.png';

const Project = (props) => {
  const [width, setWidth] = useState(window.innerWidth);
  const handleResize = () => {
    setWidth(window.innerWidth);
  };
  const breakpoint = 980;

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [width]);

  const projects = [
    {
      title: '.connect( )',
      description: 'MERN stack dating web app for remote tech sector workers.',
      deployedLink: 'https://connect-dating-app.herokuapp.com/',
      githubLink: 'https://github.com/tmgorogers/Connect-Dating-App',
      img: Connect,
    },
    {
      title: 'MEDIA-fi',
      description: 'Song recommendation web app using Giphy and Spotify APIs.',
      deployedLink: 'https://polar-atoll-49785.herokuapp.com/index.html',
      githubLink: 'https://github.com/anishamcdowell/Media-fi',
      img: Media,
    },
    {
      title: 'Note Taker',
      description: 'Express note taking app utilizing CRUD operations.',
      deployedLink: 'https://arcane-gorge-39623.herokuapp.com/',
      githubLink: 'https://github.com/anishamcdowell/Note-Taker',
      img: Notes,
    },
  ];

  return (
    <div
      id='portfolio'
      className='p-3 border-0 rounded-0 d-flex flex-column justify-items-center align-items-center'>
      {width <= breakpoint ? (
        projects.map((project) => {
          return (
            <MobileProjects
              title={project.title}
              description={project.description}
              deployedLink={project.deployedLink}
              githubLink={project.githubLink}
              img={project.img}
            />
          );
        })
      ) : (
        <div id='project-map-container'>
          {projects.map((project) => {
            return (
              <div className='project-container'>
                <div className='project-image-container'>
                  <img src={project.img} />
                </div>
                <div className='project-text'>
                  <p className='project-title'>{project.title}</p>
                  <p className='project-description'>{project.description}</p>
                  <span>
                    <a href={project.deployedLink}>Live Project</a>
                    <a href={project.githubLink}>Repository</a>
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Project;

import React from "react";
import Project from "./Project";
import Card from 'react-bootstrap/Card';
import projectData from "../projectData.js";

function ProjectCard() {
  return (
    <Card>
      <Card.Body>
          {projectData.map(project => (
            <Project 
              key={project.id}
              title={project.title}
              subtitle={project.subtitle}
              description={project.descrption}/>
          ))}
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;

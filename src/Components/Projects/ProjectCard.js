import React from "react";
import Project from "./Project";
import Card from 'react-bootstrap/Card';
import TextCard from "../TextCard";
import projectData from "../../projectData.js";
import "./project.css"

function ProjectCard({project}) {
  console.log("project data log", projectData);
  const test = projectData.map(project => {
    console.log("test 2", project)
  })
  return (
            <>  
            {projectData.map(project => (
                <Card className="p-3 bg-warning border-0 rounded-0" id="project-card">
                  <Card.Body
                    key={project.id}
                  >
                  <Project>
                      <TextCard
                      title={project.title}
                      subtitle={project.subtitle}
                      description={project.descrption}
                    />
                  </Project>
                  </Card.Body>
                  </Card>
              ))}
          </>
  );

}

export default ProjectCard;

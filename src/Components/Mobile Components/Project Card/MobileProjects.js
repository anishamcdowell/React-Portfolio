import React from "react";
import "./mobileproject.css";
import "../../Projects/project.css";

const MobileProjects = ({
  title,
  description,
  deployedLink,
  githubLink,
  img,
}) => {
  return (
    <div class="mobile-project-div"
    style={{
      backgroundImage: `url(${img})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}>
        <div className="mobile-text-div bg-gradient">
          <div className="mobile-project-text">
            <p className="project-title mobile-project-title">{title}</p>
            <p className="project-description">{description}</p>
            <span>
            <a href={deployedLink} className="project-links mobile-project-links">
              Live Project
            </a>
            <a href={githubLink} className="project-links mobile-project-links">
              Repository
            </a>
          </span>
          </div>
        </div>
    </div>
  );
};

export default MobileProjects;

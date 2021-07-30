import React from "react";
import "./mobileproject.css";

const MobileProjects = ({title, description, deployedLink, githubLink, img}) => {
  return (
    <div class="mobile-project-div">
      <div
        className="mobile-project-image"
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
                <div className="mobile-text-div bg-gradient">
        <div className="project-text">
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
        <div className="links">
          <a href={deployedLink} className="link">
            Deployed Project
          </a>
          <a href={githubLink} className="link">
            GitHub Codebase
          </a>
        </div>
      </div>
      </div>
    </div>
  );
};

export default MobileProjects;

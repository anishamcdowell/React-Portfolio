import React from "react";

function CardLinks() {
  return (
    <div className="position-absolute bottom-0 start-0 p-3">
      <ul>
        <li>
          <a href="#" className="card-link">
            Deployed Project
          </a>
        </li>
        <li>
          <a href="#" className="card-link">
            GitHub Repository
          </a>
        </li>
      </ul>
    </div>
  );
}

export default CardLinks;

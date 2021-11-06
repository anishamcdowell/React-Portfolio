import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./footer.css";

function Footer() {
    return(
        <footer className="footer mb-auto py-4 d-flex flex-column justify-content-evenly align-items-center" id="contact">
            <p>Currently seeking work and open to good conversation.</p>
          <div id="icons-container">
      <ul id="socials-list">
          <li className="social-li">
              <a href="mailto: anishamcdowell@gmail.com"><FontAwesomeIcon icon="envelope" size="3x"/></a>
          </li>
          <li className="social-li">
              <a href="https://www.linkedin.com/in/anishamcdowell/" target="blank"><FontAwesomeIcon icon={["fab", "linkedin"]} size="3x"/></a>
          </li>
          <li className="social-li">
              <a href="https://github.com/anishamcdowell" target="blank"><FontAwesomeIcon icon={["fab", "github"]} size="3x"/></a>
          </li>
      </ul>

    </div>
          <span className="text-muted">&#169; 2021 Anisha McDowell</span>
      </footer>
    )
}

export default Footer;
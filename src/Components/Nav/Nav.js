import React from "react";
import "./nav.css";

function Nav() {
    return (
        <nav className="nav">
            <a className="navlink" href="#header">Home</a>
            <a className="navlink" href="#about">About Me</a>
            <a className="navlink" href="#portfolio">Portfolio</a>
            <a className="navlink" href="#contact">Contact</a>
            <a className="navlink" href="">Resume</a>
        </nav>
    )   
}

export default Nav;
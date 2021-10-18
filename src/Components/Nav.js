import React from "react";
import "./Nav/nav.css";

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg bg-dark px-4 py-3" style={{position: 'fixed', width: '100%', zIndex: '99'}}>
            <a className="navlink" href="#header">Home</a>
            <a className="navlink" href="#about">About Me</a>
            <a className="navlink" href="#portfolio">Portfolio</a>
            <a className="navlink" href="#contact">Contact</a>
            {/* <a className="navlink" href="">Resume</a> */}
        </nav>
    )   
}

export default Nav;
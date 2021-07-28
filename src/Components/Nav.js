import React from "react";

function Nav() {
    const gold = {color: "#ffc107"}
    return (
        <nav className="navbar navbar-expand-lg bg-dark bg-gradient text-white px-4 py-3" style={{position: 'fixed', width: '100%', zIndex: '99'}}>
            <a className="nav-link" href="#header" style={gold}>Home</a>
            <a className="nav-link" href="#about" style={gold}>About Me</a>
            <a className="nav-link" href="#portfolio" style={gold}>Portfolio</a>
            <a className="nav-link" href="#contact" style={gold}>Contact</a>
            {/* <a className="nav-link" href="" style={gold}>Resume</a> */}
        </nav>
    )   
}

export default Nav;
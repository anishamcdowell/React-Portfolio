import React from "react";

function Nav() {
    const gold = {color: "#ffc107"}
    return (
        <nav className="navbar navbar-expand-lg bg-dark bg-gradient text-white px-4 py-3">
            <a className="nav-link" href="" style={gold}>Home</a>
            <a className="nav-link" href="" style={gold}>About Me</a>
            <a className="nav-link" href="" style={gold}>Portfolio</a>
            <a className="nav-link" href="" style={gold}>Resume</a>
        </nav>
    )   
}

export default Nav;
import React from "react";
import ProfilePic from "../ProfilePic/ProfilePic";
import SmallBtn from "../SmallBtn";
import "./header.css";
import "../ProfilePic/profilepic.css";
import Logo from "../Logo/Logo";

function Header() {
    return(
        <header id="header">
            <div className="header-font">
            <Logo id="logo"/>
            <div className="col-md-6 text-white lh-sm align-self-center justify-content-center" id="header-text-container">
            <h1 className="h1">nisha McDowell</h1>
            </div>
            </div>
            <div id="img-div">
            <ProfilePic />
            </div>
        </header>
    )
}

export default Header;
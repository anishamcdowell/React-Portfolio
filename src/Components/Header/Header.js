import React from "react";
import Paragraph from "../Paragraph";
import ProfilePic from "../ProfilePic/ProfilePic";
import SmallBtn from "../SmallBtn";
import "./header.css";
import "../ProfilePic/profilepic.css";

function Header() {
    return(
        <header className="row d-flex justify-content-evenly bg-gradient" id="header">
            <div className="col-md-5 text-white lh-sm align-self-center" id="header-text-container">
                <h1>Anisha McDowell</h1>
                <Paragraph>
                    Fullstack developer based in Charlotte, NC.
                </Paragraph>
                <div id="small-header-btn">
                <SmallBtn>More About Me</SmallBtn>
                </div>
            </div>
            <div className="col-md-3 profile-pic" id="profile-pic-container">
                <ProfilePic/>
            </div>
        </header>
    )
}

export default Header;
import React from "react";
import Paragraph from "../Paragraph";
import ProfilePic from "../ProfilePic/ProfilePic";
import SmallBtn from "../SmallBtn";
import "./header.css";
import "../ProfilePic/profilepic.css";

function Header() {
    return(
        <header className="row d-flex justify-content-around bg-gradient p-5" id="header">
            <div className="col-md-6 text-white lh-sm align-self-center justify-content-center" id="header-text-container">
                <h1>Anisha McDowell</h1>
                <Paragraph>
                    Fullstack developer based in Charlotte, NC.
                </Paragraph>
                <div id="small-header-btn">
                <SmallBtn>More About Me</SmallBtn>
                </div>
            </div>
            <div className="col-md-4 profile-pic d-flex justify-content-center" id="profile-pic-container">
                <ProfilePic/>
            </div>
        </header>
    )
}

export default Header;
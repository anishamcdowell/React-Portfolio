import React from "react";
import ProfilePic from "../ProfilePic/ProfilePic";
import SmallBtn from "../SmallBtn";
import "./header.css";
import "../ProfilePic/profilepic.css";
// import Logo from "../Logo/Logo";
import BrandHeading from "../Brand Heading/BrandHeading";

function Header() {
    return(
        <header id="header">
            <div className="header-font">
            <BrandHeading />
            </div>
            <div className="img-div">
            <ProfilePic />
            </div>
        </header>
    )
}

export default Header;
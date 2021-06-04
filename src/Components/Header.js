import React from "react";
import Paragraph from "./Paragraph";
import ProfilePic from "./ProfilePic";
import SmallBtn from "./SmallBtn";

function Header() {
    return(
        <header className="row bg-primary bg-gradient p-5 d-flex justify-content-evenly">
            <div className="col-md-5 text-white lh-sm align-self-center">
                <h1>Anisha McDowell</h1>
                <Paragraph>
                    Fullstack developer based in Charlotte, NC.
                </Paragraph>
                <SmallBtn>More About Me</SmallBtn>
            </div>
            <div className="col-md-3">
                <ProfilePic/>
            </div>
        </header>
    )
}

export default Header;
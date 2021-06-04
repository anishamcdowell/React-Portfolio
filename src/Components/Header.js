import React from "react";
import Paragraph from "../Components/Paragraph";
import ProfilePic from "../Components/ProfilePic";
import SmallBtn from "../Components/SmallBtn";

function Header() {
    return(
        <header class="row bg-primary bg-gradient p-5 d-flex justify-content-evenly">
            <div class="col-md-5 text-white lh-sm align-self-center">
                <h1>Anisha McDowell</h1>
                <Paragraph>
                    Fullstack developer based in Charlotte, NC.
                </Paragraph>
                <SmallBtn>More About Me</SmallBtn>
            </div>
            <div class="col-md-3">
                <ProfilePic/>
            </div>
        </header>
    )
}

export default Header;
import React from "react";
import Paragraph from "../Components/Paragraph";
import ProfilePic from "../Components/ProfilePic";

function Header() {
    return(
        <header class="row bg-primary bg-gradient p-5 d-flex justify-content-evenly">
            <div class="col-md-5 text-white lh-sm align-self-center">
                <h1>Anisha McDowell</h1>
                <Paragraph>
                    <p>Fullstack developer based in Charlotte, NC</p>
                </Paragraph>
            </div>
            <div class="col-md-3">
                <ProfilePic/>
            </div>
        </header>
    )
}

export default Header;
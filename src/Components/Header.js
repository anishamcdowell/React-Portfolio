import React from "react";
import Paragraph from "../Components/Paragraph";
import RoundedImage from "../Components/RoundedImage";
import ProfilePic from "../Components/ProfilePic";
import profilePic from "../assets/profile.jpg";


function Header() {
    return(
        <header class="row bg-primary p-5 d-flex justify-content-evenly">
            <div class="col-md-5 text-white lh-sm">
                <h1>Anisha McDowell</h1>
                <Paragraph>
                    <p>Testing line height, testing line height, testing line height. Testing line height, testing line height, testing line height. Testing line height, testing line height, testing line height. </p>
                </Paragraph>
            </div>
            <div class="col-md-3">
                <RoundedImage />
            </div>
        </header>
    )
}

export default Header;
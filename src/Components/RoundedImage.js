import React from "react";
import profilePic from "../assets/profile.jpg";

function RoundedImage() {
    return (
        <img class="image rounded-circle" width="200px" src={profilePic} alt="Anisha McDowell"/>
    )
}

export default RoundedImage;
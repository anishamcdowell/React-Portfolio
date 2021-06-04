import React from "react";
import profilePic from "../assets/profile.jpg";

function ProfilePic() {
    return (
        <img className="image rounded-circle" src={profilePic} width="250px" alt="Anisha McDowell"/>
    )
}

export default ProfilePic;
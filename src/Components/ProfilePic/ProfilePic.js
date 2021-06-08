import React from "react";
import profilePic from "../../assets/profile.jpg";
import "./profilepic.css";

function ProfilePic() {
    return (
        <img className="image rounded-circle profile-pic" id="profile-pic" src={profilePic} alt="Anisha McDowell"/>
    )
}

export default ProfilePic;
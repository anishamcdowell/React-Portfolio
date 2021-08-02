import React from 'react';
import Logo from '../../Logo/Logo';
import ProfilePic from '../../ProfilePic/ProfilePic';
import "./mheader.css";

const MHeader = () => {
    return (
        <div id="mheader-div">
            <Logo id="mobile-logo"/>
            <div className="col-md-6 text-white lh-sm align-self-center justify-content-center" id="header-text-container">
            <h1 className="name" style={{fontSize: '90px', fontWeight: 'bold'}}>nisha McDowell</h1>
            </div>
        </div>
    )
}

export default MHeader;

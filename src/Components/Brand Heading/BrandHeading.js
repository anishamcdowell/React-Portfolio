import React from 'react';
import Logo from '../Logo/Logo';
import "./brandheading.css";

const BrandHeading = () => {
    return (
        <div id="brand-heading-div">
            <Logo />
            <div id="text-container">
            <h1 className="name" id="nisha">nisha</h1>
            <h1 className="name" id="mcdowell">McDowell</h1>
            </div>
        </div>
    )
}

export default BrandHeading;

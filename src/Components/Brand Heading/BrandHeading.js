import React from 'react';
import Logo from '../Logo/Logo';
import './brandheading.css';

const BrandHeading = () => {
  return (
    <div id='brand-heading-div'>
      <div class='branding-grid'>
        <div className='logo-div'>
          <Logo />
        </div>
        <div className='text-container'>
          <h1 className='name' id='nisha'>
            nisha
          </h1>
          <h1 className='name' id='mcdowell'>
            McDowell
          </h1>
          <h2 id='description'>Full Stack Web Developer</h2>
        </div>
      </div>
    </div>
  );
};

export default BrandHeading;

import React, { useState, useEffect } from 'react';
import logoimg from '../../images/black-logo.png';
import './logo.css';

const Logo = () => {
  return (
    <div
      id='logo-div'
      // style={{ width: `${logowidth}`, height: `${logoheight}` }}
    >
      <img
        id='logo'
        src={logoimg}
        // style={{ width: `${logowidth}`, height: `${logoheight}` }}
      />
    </div>
  );
};

export default Logo;

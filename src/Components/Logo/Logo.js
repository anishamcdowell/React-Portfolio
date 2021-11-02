import React, { useState, useEffect } from 'react';
import logoimg from '../../images/black-logo.png';
import './logo.css';

const Logo = () => {
  // const [width, setWidth] = useState(window.innerWidth);
  // const handleResize = () => {
  //   setWidth(window.innerWidth);
  // };
  // const largebreakpoint = 680;
  // const smallbreakpoint = 400;

  // useEffect(() => {
  //   window.addEventListener('resize', handleResize);
  //   return () => window.removeEventListener('resize', handleResize);
  // }, [width]);

  // let logowidth;
  // let logoheight;

  // if (width <= largebreakpoint) {
  //   logowidth = '80%';
  //   logoheight = '80%';
  // } else {
  //   logowidth = '80%';
  //   logoheight = '80%';
  // }

  // if (width <= smallbreakpoint) {
  //   logowidth = '60%';
  //   logoheight = '60%';
  // }

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

import React, { useState, useEffect } from 'react';
import logoimg from "../../images/white-logo.png";

const Logo = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const handleResize = () => {
      setWidth(window.innerWidth);
    }
    const breakpoint = 680;
  
    useEffect(() => {
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize)
    }, [width])

    let logowidth;
    let logoheight;

    if (width <= breakpoint) {
        logowidth="200px";
        logoheight="200px";
    } else {
        logowidth="300px";
        logoheight="300px";
    }

    return (
        <div id="logo-div">
            <img src={logoimg} style={{width: `${logowidth}`, height: `${logoheight}`}}/>
            </div>
    )
}

export default Logo;

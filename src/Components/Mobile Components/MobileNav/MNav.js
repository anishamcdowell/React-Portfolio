import React from 'react';
import './mnav.css';

const MNav = () => {
  return (
    <nav className='mobile-nav-div'>
      <div className='mobile-navlinks'>
        <a className='mobile-navlink' href='#about'>
          About
        </a>
        <a className='mobile-navlink' href='#work'>
          Work
        </a>
        <a className='mobile-navlink' href='#contact'>
          Contact
        </a>
        <a className='mobile-navlink' href='#resume'>
          Resume
        </a>
      </div>
      {/* <a className="navlink" href="">Resume</a> */}
    </nav>
  );
};

export default MNav;

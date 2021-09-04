import React from 'react';
import './nav.css';

function Nav() {
  const gold = { color: '#ffc107' };
  return (
    <nav className='nav'>
      <div className='navlinks'>
        <a className='navlink' href='#header'>
          Home
        </a>
        <a className='navlink' href='#about'>
          About Me
        </a>
        <a className='navlink' href='#portfolio'>
          Portfolio
        </a>
        <a className='navlink' href='#contact'>
          Contact
        </a>
      </div>
      {/* <a className="navlink" href="">Resume</a> */}
    </nav>
  );
}

export default Nav;

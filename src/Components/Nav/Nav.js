import React from 'react';
import './nav.css';

function Nav() {
  const gold = { color: '#ffc107' };
  return (
    <nav className='nav-div'>
      <div className='navlinks'>
        <a className='navlink' href='#about'>
          About
        </a>
        <a className='navlink' href='#work'>
          Work
        </a>
        <a className='navlink' href='#contact'>
          Contact
        </a>
        <a className='navlink' href='#resume'>
          Resume
        </a>
      </div>
      {/* <a className="navlink" href="">Resume</a> */}
    </nav>
  );
}

export default Nav;

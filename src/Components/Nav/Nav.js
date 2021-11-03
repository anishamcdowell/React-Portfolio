import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './nav.css';
import './mobilenav.css';

function Nav() {
  const [width, setWidth] = useState(window.innerWidth);
  const handleResize = () => {
    setWidth(window.innerWidth);
  };
  const breakpoint = 530;

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [width]);

  const showMobileNav = () => {
    document.getElementById('mobile-nav').classList.toggle('hide');
    document.getElementById('mobile-nav').classList.toggle('show');
  };

  if (width >= breakpoint) {
    return (
      <nav className='nav' id='nav' style={{ justifyContent: 'center' }}>
        <a className='navlink' href='#'>
          Top
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
        <a className='navlink' href='../../assets/resume.pdf' download>
          Resume
        </a>
      </nav>
    );
  } else {
    return (
      <div className='mobile-bg'>
        <nav className='nav mobile-nav' style={{ justifyContent: 'flex-end' }}>
          <div id='mobile-nav' className='hide topnav'>
            <a className='navlink' href='#' onClick={showMobileNav}>
              Top
            </a>
            <a className='navlink' href='#about' onClick={showMobileNav}>
              About Me
            </a>
            <a className='navlink' href='#portfolio' onClick={showMobileNav}>
              Portfolio
            </a>
            <a className='navlink' href='#contact' onClick={showMobileNav}>
              Contact
            </a>
            <a
              className='navlink'
              href='../../assets/resume.pdf'
              onClick={showMobileNav}
              download>
              Resume
            </a>
          </div>

          <a
            href='javascript:void(0);'
            className='icon'
            onClick={showMobileNav}>
            <FontAwesomeIcon icon='bars' size='2x' />
          </a>
        </nav>
      </div>
    );
  }
}

export default Nav;

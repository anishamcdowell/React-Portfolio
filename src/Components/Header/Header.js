import React from 'react';
import './header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Neon from '../../images/neon-sign.png';
import Logo from '../Logo/Logo';

function Header() {
  return (
    <header id='header'>
      <div className='header-banner'>
        <Logo />
      </div>
      <div className='header-text'>
        <h1>Anisha McDowell</h1>
        <p>Full Stack Web Developer</p>
      </div>
    </header>
  );
}

export default Header;

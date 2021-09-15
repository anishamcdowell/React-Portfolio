import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './footer.css';

function Footer() {
  return (
    <footer id='contact'>
      <div id='icons-container'>
        <a href='mailto: anishamcdowell@gmail.com' className='contact-icon'>
          <FontAwesomeIcon icon='envelope' size='10x' color='white' />
        </a>
        <a
          href='https://www.linkedin.com/in/anishamcdowell/'
          target='blank'
          className='contact-icon'>
          <FontAwesomeIcon
            icon={['fab', 'linkedin']}
            size='10x'
            color='white'
          />
        </a>
        <a
          href='https://github.com/anishamcdowell'
          target='blank'
          className='contact-icon'>
          <FontAwesomeIcon icon={['fab', 'github']} size='10x' color='white' />
        </a>
      </div>
      <span className='copyright'>&#169; 2021 Anisha McDowell</span>
    </footer>
  );
}

export default Footer;

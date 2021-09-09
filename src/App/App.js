import React, { useState, useEffect } from 'react';
import './app.css';
import Nav from '../Components/Nav/Nav';
import About from '../Components/AboutMe/About';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import Project from '../Components/Projects/Project';
import MobileHeader from '../Components/Mobile/Header/MHeader';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  fab,
  faLinkedin,
  faGithub,
  faHtml5,
  faCss3,
  faJsSquare,
  faNodeJs,
  faReact,
  faBootstrap,
  faGitSquare,
  faSass,
  faNpm,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLaptopCode } from '@fortawesome/free-solid-svg-icons';

library.add(
  fab,
  faLinkedin,
  faGithub,
  faEnvelope,
  faLaptopCode,
  faHtml5,
  faCss3,
  faJsSquare,
  faNodeJs,
  faReact,
  faBootstrap,
  faGitSquare,
  faSass,
  faNpm
);

function App() {
  const [width, setWidth] = useState(window.innerWidth);
  const handleResize = () => {
    setWidth(window.innerWidth);
  };
  const breakpoint = 1020;

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [width]);

  return (
    <div id='app' style={{ backgroundColor: 'skyblue' }}>
      {width <= breakpoint ? (
        <>
          <Nav />
          <MobileHeader />
          <About />
          <Project />
          <Footer />
        </>
      ) : (
        <>
          <Nav />
          <Header />
          <About />
          <Project />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;

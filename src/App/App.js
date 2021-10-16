// import React, { useState, useEffect} from "react";
import "./app.css";
import Nav from "../Components/Nav";
import About from "../Components/About Me/About";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import Project from "../Components/Projects/Project";
// import MobileHeader from "../Components/Mobile/Header/MHeader";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
//Bootstrap components
// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

library.add(fab, faLinkedin, faGithub, faEnvelope);

function App() {
  // const [width, setWidth] = useState(window.innerWidth);
  // const handleResize = () => {
  //   setWidth(window.innerWidth);
  // }
  // const breakpoint = 1020;

  // useEffect(() => {
  //   window.addEventListener('resize', handleResize);
  //   return () => window.removeEventListener('resize', handleResize)
  // }, [width])
  
  return (
    <div id="app">
      {/* {width <= breakpoint ? (
        <>
        <Nav />
        <MobileHeader />
     <About />
     <Project />
     <Footer />
     </>
      ) : (
        <> */}
      <Nav />
     <Header />
     <About />
     <Project />
     <Footer />
     {/* </>
      )} */}
     
    </div>
  );
}

export default App;

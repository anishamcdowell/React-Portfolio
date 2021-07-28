import React from "react";
import "./app.css";
import Nav from "../Components/Nav";
import About from "../Components/About Me/About";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import Project from "../Components/Projects/Project";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faLinkedin, faGithub, faEnvelope);

function App() {

  

  return (
    <div className="App">
     <Nav />
     <Header />
     <About />
     <Project />
     <Footer />
    </div>
  );
}

export default App;

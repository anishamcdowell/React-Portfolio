import React, { useState } from "react";
import "./app.css";
import { ProjectContext } from "../context";
import Nav from "../Components/Nav";
import Header from "../Components/Header/Header";
import Portfolio from "../Components/Portfolio/Portfolio"
import Footer from "../Components/Footer";

function App() {
  const [projects, setProject] = useState([]);

  

  return (
    <div className="App">
     <Nav />
     <Header />
     <Portfolio />
     <Footer />
    </div>
  );
}

export default App;

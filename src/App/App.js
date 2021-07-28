import React from "react";
import "./app.css";
import Nav from "../Components/Nav";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer";
import Project from "../Components/Projects/Project";

function App() {

  

  return (
    <div className="App">
     <Nav />
     <Header />
     <Project />
     <Footer />
    </div>
  );
}

export default App;

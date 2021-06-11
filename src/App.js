import React from "react";
import "./App.css";
//import About from "./components/About";
import Portfolio from "./components/Portfolio";

import Nav from "./components/Nav";
//import Portfolio from "./components/Portfolio";
import "@fontsource/roboto";
//<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <Portfolio></Portfolio>
      </main>
    </div>
  );
}

export default App;

import React from "react";
import "./App.css";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Header from "./components/Header";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Home from "./components/Home";

import "@fontsource/roboto";
//<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
import { HashRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route path="/myportfolio">
            <Portfolio />
          </Route>
          <Route path="/resume">
            <Resume />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
/* 
function About() {
  return <h2>About</h2>;
}

function Portfolio() {
  return <h2>My work</h2>;
}

function Resume() {
  return <h2>Resume</h2>;
}
 
/* 
function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <Portfolio></Portfolio>
      </main>
    </div>
  );
} */

export default App;

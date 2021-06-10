import React, { useState } from "react";
import "./App.css";
import About from "./components/About";
import Nav from "./components/Nav";
import Portfolio from "./components/Portfolio";
import "@fontsource/roboto";
//<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
function App() {
  const [categories] = useState([
    { name: "about" },
    { name: "portfolio" },
    { name: "contact" },
    { name: "resume" },
  ]);
  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Nav>
      <main>
        <Portfolio></Portfolio>
        <About></About>
      </main>
    </div>
  );
}

export default App;

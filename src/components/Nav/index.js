import React from "react";
const categories = [
  { name: "about" },
  { name: "portfolio" },
  { name: "contact" },
  { name: "resume" },
];

function categorySelected() {
  console.log("hello");
}

function Nav() {
  return (
    <header>
      <h2>
        <a href="/">Merriam Massey</a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a href="#about">About me</a>
          </li>
          <li>
            <span>Contact</span>
          </li>
          {categories.map((category) => (
            <li className="mx-1" key={category.name}>
              <span onClick={categorySelected}>{category.name}</span>{" "}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;

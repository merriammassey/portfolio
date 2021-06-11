//import React, { useEffect } from "react";
import React from "react";

function Nav() {
  //change title of browser tab
  /* useEffect(() => {
    document.title = currentCategory.name;
  }, [currentCategory]);
 */
  return (
    <header className="flex-row px-1">
      <h2>
        <a a data-testid="link" href="/">
          Merriam Massey
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a data-testid="about" href="#about">
              About me
            </a>
          </li>
          <li>
            <a data-testid="about" href="#contact">
              Contact
            </a>
          </li>
          <li>
            <a data-testid="about" href="#portfolio">
              My Work
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;

import React from "react";
//import "./App.css";
import li from "../../assets/images/li.png";
import gh from "../../assets/images/gh.png";
import ig from "../../assets/images/ig.png";
import "./style.css";

function Footer() {
  return (
    <footer id="footer">
      <div>
        <a href="https://linkedin.com/in/merriammassey">
          <img alt="linkedin logo" src={li}></img>
        </a>
        <a href="https://github.com/merriammassey">
          <img alt="github logo" src={gh}></img>
        </a>
        <a href="https://www.instagram.com/merriammm/">
          <img alt="instagram logo" src={ig}></img>
        </a>
      </div>
      <div>
        <p className="MuiTypography-body1">© Merriam Massey 2021</p>
      </div>
    </footer>
  );
}

export default Footer;

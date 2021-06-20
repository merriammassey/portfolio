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
          <img id="logo" alt="linkedin logo" src={li}></img>
        </a>
        <a href="https://github.com/merriammassey">
          <img id="logo" alt="github logo" src={gh}></img>
        </a>
        <a href="https://www.instagram.com/merriammm/">
          <img id="logo" alt="instagram logo" src={ig}></img>
        </a>
      </div>
      <div className="MuiTypography-body1 !important">
        <p className="MuiTypography-body1 !important">© Merriam Massey 2021</p>
      </div>
    </footer>
  );
}

export default Footer;

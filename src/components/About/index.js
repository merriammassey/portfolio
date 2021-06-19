import React from "react";
//import headshot from "../../assets/headshot.png";
import "./style.css";
import Aboutphotos from "../Aboutphotos";
import image from "../../assets/headshot.png";
import Footer from "../Footer";

function About() {
  return (
    <div>
      <div id="title">
        <h3>About me</h3>
        <hr></hr>
      </div>
      <div className="flex-row">
        <img src={image} style={{ maxWidth: "50vh" }} alt=""></img>
        <div id="bio">
          <h2></h2>
          <p className="MuiTypography-body1">Lorem ipsum </p>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default About;

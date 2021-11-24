import React from "react";
//import headshot from "../../assets/headshot.png";
import "./style.css";
import image from "../../assets/headshot2021.jpg";
import Footer from "../Footer";
import Button from "@material-ui/core/Button";
import PDF from "../../assets/MasseyCV.pdf";
function About() {
  return (
    <div>
      <div id="title">
        <h3>About me</h3>
        <hr></hr>
      </div>
      <div id="about" className="flex-row">
        <div>
          <img src={image} id="headshot" alt=""></img>
        </div>
        <div id="bio">
          <article
            style={{ fontSize: "20px" }}
            className="MuiTypography-h6 !important"
          >
            Hi! My name is Merriam Massey, and I'm a fullstack developer living
            in the Phoenix area. <br />
            <br />
            I am a lifelong learner and skilled communicator, and I am
            passionate about learning and applying new tools to solve complex
            issues.
            <br />
            <br />
            In July 2021, I earned my certificate in fullstack development,
            transitioning from a career in educational leadership, policy and
            advocacy, and non-profit administration. <br />
            <br />
            I excel at making complex topics easy to understand and have
            extensive experience teaching adult learners from diverse
            backgrounds and designing and delivering professional development.
            <br />
            <div id="br">
              <Button variant="contained" a href={PDF} target="_blank" id="rb">
                View my resume
              </Button>
            </div>
          </article>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default About;

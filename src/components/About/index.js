import React from "react";
//import headshot from "../../assets/headshot.png";
import "./style.css";
import image from "../../assets/headshot.png";
import Footer from "../Footer";

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
          <article className="MuiTypography-body1 !important">
            Hi! My name is Merriam Massey, and I'm a fullstack developer living
            in the Phoenix area. <br />
            <br />
            I am a lifelong learner and skilled communicator, and I am
            passionate about learning and applying new tools to solve complex
            issues.
            <br />
            <br />
            I have extensive experience teaching adult learners from diverse
            backgrounds and excel at making complex topics easy to understand.
            <br />
            <br />
            In July 2021, I will earn my certificate in fullstack development,
            transitioning from a career in educational leadership, policy and
            advocacy, and non-profit administration. <br />
            <br />
            Most recently, as State Director of a federally funded program that
            prepares at-risk students in Arizona to reach challenging academic
            standards, I directed professional development, technical
            assistance, and consultant services to school districts and other
            stakeholders throughout the state.
            <br />
            <br />
          </article>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default About;

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
            I am a lifelong learner and skilled communicator with a background
            in educational leadership, policy and advocacy, and non-profit
            administration.
            <br />
            <br />
            In July 2021, I will earn my certificate in fullstack development
            and focus on growing my career in tech. I will be transitioning from
            the role of State Director of a federally funded program that
            prepares at-risk students in Arizona to reach challenging academic
            standards and graduate high school prepared for responsible
            citizenship, further learning, and productive employment. In this
            role, I directed professional development, technical assitance, and
            consultant services to school districts and other stakeholders
            throughout the state.
            <br />
            <br />I have extensive experience designing and delivering learning
            experiences to adult learners from diverse backgrounds.
          </article>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default About;

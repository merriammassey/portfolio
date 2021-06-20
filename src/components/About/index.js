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
            In early 2021, I transitioned to tech from my role as State Director
            of a federally funded program that ensures that children of
            migratory agricultural workers in Arizona reach challenging academic
            standards and graduate high school prepared for responsible
            citizenship, further learning, and productive employment. In this
            role, I directed the provision of quality technical assistance,
            professional development, and consultant services to school
            districts throughout the state.
            <br />
          </article>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default About;

import React from "react";
//import headshot from "../../assets/headshot.png";
import "./style.css";

function About() {
  return (
    <section>
      <div id="homephoto">
        <p>MY NAME IS</p>
        <h1>Merriam Massey</h1>
        <p>I am a fullstack developer based in Phoenix, Arizona.</p>
        {/* <img
          src={headshot}
          className="my-2"
          style={{ width: "100%" }}
          alt="cover"
        /> */}
      </div>
    </section>
  );
}

export default About;

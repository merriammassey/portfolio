import React from "react";
import headshot from "../../assets/h.jpg";

function About() {
  return (
    <section>
      <h1 id="about">Full Stack Developer</h1>
      <img
        src={headshot}
        className="my-2"
        style={{ width: "100%" }}
        alt="cover"
      />
    </section>
  );
}

export default About;

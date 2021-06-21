import React from "react";
import Card from "../Card";
import safersale from "../../assets/images/safersale.jpg";
import jobless from "../../assets/images/jobless.jpg";
import weather from "../../assets/images/weather.jpg";
import pg from "../../assets/images/pg.jpg";
import ecommerce from "../../assets/images/ecommerce.jpg";
import techblog from "../../assets/images/techblog.jpg";
import "./style.css";
import Footer from "../Footer";
import { useSpring, animated, set, config, flip } from "react-spring";

function Portfolio(props) {
  const projects = [
    {
      name: "Jobless",
      description: "Lorem ipsum",
      image: jobless,
      repo: "https://github.com/merriammassey/job-search",
      deployment: "https://merriammassey.github.io/job-search/",
    },
    {
      name: "Safer Sale",
      description: "Lorem ipsum",
      image: safersale,
      repo: "https://github.com/merriammassey/Safer-Sale",
      deployment: "https://safersale.herokuapp.com/",
    },
    {
      name: "Weather Dashboard",
      description: "Lorem ipsum",
      image: weather,
      repo: "https://github.com/merriammassey/weather-dashboard",
      deployment: "https://merriammassey.github.io/weather-dashboard/",
    },
    {
      name: "Password Generator",
      description: "Lorem ipsum",
      image: pg,
      repo: "https://github.com/merriammassey/password-generator",
      deployment: "https://merriammassey.github.io/password-generator/",
    },
    {
      name: "Tech Blog",
      description: "Lorem ipsum",
      image: techblog,
      repo: "https://github.com/merriammassey/tech-blog",
      deployment: "https://serene-peak-86703.herokuapp.com//",
    },
    {
      name: "E-Commerce Backend",
      description: "Lorem ipsum",
      image: ecommerce,
      repo: "https://github.com/merriammassey/ecommerce-backend",
      deployment:
        "https://www.youtube.com/watch?v=f-dBNa0Y9k0&feature=youtu.be",
    },
  ];

  const iaa = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: true,
    reverse: flip,
    delay: 200,
    duration: 400,
    config: config.molasses,
    onRest: () => set(!flip),
  });

  return (
    <div>
      <div id="title">
        <h3>My work</h3>
        <hr></hr>
      </div>
      <animated.div style={iaa}>
        <div className="flex-row">
          {projects.map((project) => (
            <Card project={project}></Card>
          ))}
        </div>
      </animated.div>
      <Footer></Footer>
    </div>
  );
}

export default Portfolio;

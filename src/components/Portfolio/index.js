import React from "react";
import Card from "../Card";
import safersale from "../../assets/images/safersale.jpg";
import jobless from "../../assets/images/jobless.jpg";
import weather from "../../assets/images/weather.jpg";
import pg from "../../assets/images/pg.jpg";
import ecommerce from "../../assets/images/ecommerce.jpg";
import techblog from "../../assets/images/techblog.jpg";
import tastebuds from "../../assets/images/tastebuds.jpg";
import books from "../../assets/images/books.jpg";
import "./style.css";
import Footer from "../Footer";
import { useSpring, animated, config, flip } from "react-spring";

function Portfolio(props) {
  const projects = [
    {
      name: "TasteBuds",
      description:
        "Work in progress: A full stack MERN app that enables users to create a custom poll populated with restaurant data from the Yelp Fusion API so that they can conveniently choose a place to eat with friends or coworkers.",
      image: tastebuds,
      repo: "https://github.com/merriammassey/tastebuds",
      deployment: "https://whereyouwannaeat.herokuapp.com/",
    },
    {
      name: "Jobless",
      description:
        "A web app that uses APIs from the Bureau of Labor Statistics and Google to display job listings alongside career outlook and median salary data. Built with HTML, Foundation CSS, custom CSS, Javascript, and JQuery.",
      image: jobless,
      repo: "https://github.com/merriammassey/jobsearch",
      deployment: "https://merriammassey.github.io/jobsearch/",
    },
    {
      name: "Book Search Refactor",
      description:
        "Refactor of a functioning Google Books API search engine built with a RESTful API to use GraphQL and Apollo. Built using the MERN stack, with a React front end, MongoDB database, and Node.js.",
      image: books,
      repo: "https://github.com/merriammassey/book-search",
      deployment: "https://github.com/merriammassey/book-search",
    },
    {
      name: "Safer Sale",
      description:
        "A web app designed to connect buyers and sellers of used goods and identify safe locations for the transaction. Built with HTML, CSS, Javascript, Handlebars, bycryptjs, mysql, SW3, and the Google Places API",
      image: safersale,
      repo: "https://github.com/merriammassey/Safer-Sale",
      deployment: "https://safersale.herokuapp.com/",
    },
    {
      name: "Weather Dashboard",
      description:
        "A web app that uses the Open Weather API to display current and future weather conditions of various locations and displays recent searches.",
      image: weather,
      repo: "https://github.com/merriammassey/weather-dashboard",
      deployment: "https://merriammassey.github.io/weather-dashboard/",
    },
    {
      name: "Password Generator",
      description:
        "A web app that generates a random password based on user-selected criteria. Features dynamically updated HTML and CSS powered by JavaScript.",
      image: pg,
      repo: "https://github.com/merriammassey/password-generator",
      deployment: "https://merriammassey.github.io/password-generator/",
    },
    {
      name: "Tech Blog",
      description:
        "A CMS-style blog built in the MVC paradigm using Handlebars.js as the templating language, Sequelize as the ORM, express-session for authentication, and deployed to Heroku.",
      image: techblog,
      repo: "https://github.com/merriammassey/tech-blog",
      deployment: "https://serene-peak-86703.herokuapp.com//",
    },
    {
      name: "E-Commerce Backend",
      description:
        "The backend for an e-commerce site. A working Express.js API configured to use Sequelize to interact with a MySQL database.",
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
            <div key={project.name}>
              <Card project={project}></Card>
            </div>
          ))}
        </div>
      </animated.div>
      <Footer></Footer>
    </div>
  );
}

export default Portfolio;

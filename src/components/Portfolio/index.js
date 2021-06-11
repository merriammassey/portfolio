import React from "react";
import Card from "../Card";
import safersale from "../../assets/images/safersale.jpg";
import jobless from "../../assets/images/jobless.jpg";

function Portfolio() {
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
      repo: "https://github.com/merriammassey/job-search",
      deployment: "https://merriammassey.github.io/job-search/",
    },
    {
      name: "Jobless",
      description: "Lorem ipsum",
      image: "../../assets/images/jobless.jpg",
      repo: "https://github.com/merriammassey/job-search",
      deployment: "https://merriammassey.github.io/job-search/",
    },
  ];

  return (
    <div>
      <div className="flex-row">
        {projects.map((project) => (
          <Card project={project}></Card>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;

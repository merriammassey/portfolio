import React from "react";
import photo from "../../assets/jobless.jpg";

function Portfolio(props) {
  const currentProject = {
    name: "name of project",
    description: "tools used",
  };
  return (
    <section>
      <h1>{currentProject.name}</h1>
      <p>{currentProject.name}</p>
      <div>
        <img
          src={photo}
          alt="Jobless screeshot"
          className="img-thumbnail mx-1"
        />
      </div>
    </section>
  );
}

export default Portfolio;

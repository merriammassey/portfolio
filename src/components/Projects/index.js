import React from "react";
//import photo from ;

const ProjectList = ({ category }) => {
  const [projects] = [
    {
      name: "Jobless",
      description: "Lorem ipsum",
    },
    {
      name: "Safer Sale",
      category: "Projects",
      description: "Lorem ipsum",
    },
    {
      name: "Jobless",
      category: "Projects",
      description: "Lorem ipsum",
    },
    {
      name: "Jobless",
      category: "Projects",
      description: "Lorem ipsum",
    },
    {
      name: "Jobless",
      category: "Projects",
      description: "Lorem ipsum",
    },
    {
      name: "Jobless",
      category: "Projects",
      description: "Lorem ipsum",
    },
  ];
  //filter so only photos in selected category appear
  //go through each photo in the photos array, use those with category that matches chosen category in Gallery
  const currentProjects = projects.filter(
    (project) => project.category === category
  );

  return (
    <div>
      <div className="flex-row">
        {currentProjects.map((image, i) => (
          <img
            src={require(`../../assets/${category}/${i}.jpg`)}
            alt={image.name}
            className="img-thumbnail mx-1"
            key={image.name}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;

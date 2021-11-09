import React from "react";
import Metadecoration from "../components/Metadecoration";
import Title from "../components/Title";

function Projects() {
  const title = "Projects";

  const query = `*[_type == "project"]{
    description,
    link, 
    title,
  }`;

  return (
    <div className="projects">
      <Metadecoration title={title} description="lfashoifahoiheioahfih" />
      <div className="wrapper"></div>
    </div>
  );
}

export default Projects;

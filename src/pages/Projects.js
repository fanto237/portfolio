import React from "react";
import Card from "../components/Card";
import Metadecoration from "../components/Metadecoration";
import Title from "../components/Title";

function Projects() {
  const title = "Projects";

  return (
    <div className="projects">
      <Metadecoration title={title} description="lfashoifahoiheioahfih" />
      <div className="wrapper">
        <Title title={title} span={title} myColor="black" />
        <div className="card-container">
          <Card />
        </div>
      </div>
    </div>
  );
}

export default Projects;

import React from "react";
import Metadecoration from "../components/Metadecoration";
import Title from "../components/Title";

function Projects() {
  const title = "Projects";
  return (
    <div>
      <Metadecoration title={title} description="lfashoifahoiheioahfih" />
      <Title title={title} span={title} myColor="black" />

      <h1>Projects</h1>
    </div>
  );
}

export default Projects;

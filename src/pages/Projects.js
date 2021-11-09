import React from "react";
import Card from "../components/Card";
import Metadecoration from "../components/Metadecoration";
import Title from "../components/Title";
import sanityClient from "../client";

function Projects() {
  const title = "Projects";
  const [project, setProject] = useState(null);

  const query = `*[_type == "project"]{
    description,
    link, 
    title,
  }`;

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

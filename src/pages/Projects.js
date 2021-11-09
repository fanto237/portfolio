import React from "react";
import Card from "../components/Card";
import Metadecoration from "../components/Metadecoration";
import Title from "../components/Title";
import sanityClient from "../client";
import { useEffect, useState } from "react";

function Projects() {
  const title = "Projects";
  const [projects, setProjects] = useState(null);
  const query = `*[_type == "project"]{
    description,
    link, 
    title,
    image{
      asset->{
        _id,
        url
      }
    }
  }`;

  useEffect(() => {
    sanityClient
      .fetch(query)
      .then((data) => {
        setProjects(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [query]);

  return (
    <div className="projects">
      <Metadecoration title={title} description="lfashoifahoiheioahfih" />
      <div className="wrapper">
        <Title title={title} span={title} myColor="black" />
        <div className="card-container">
          {projects && projects.map((project) => <Card toPrint={project} />)}
        </div>
      </div>
    </div>
  );
}

export default Projects;

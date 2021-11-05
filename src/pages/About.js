import React from "react";
import Title from "../components/Title";
import Metadecoration from "../components/Metadecoration";
import ImageSection from "../components/ImageSection";
import SkillSection from "../components/SkillSection";
import { useEffect, useState } from "react";
import sanityClient from "../client";
import imageUrlBuilder from "@sanity/image-url";
import Contact from "../components/Contact";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

function About() {
  const title = "About Me";
  const query = `*[_type == "author"]{
    name,
    bio,
    "authorImage": image.asset->url,
}`;

  const [me, setMe] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(query)
      .then((data) => {
        setMe(data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [query]);

  if (!me) return <div>Loading...</div>;

  return (
    <>
      <div className="wrapper">
        <Metadecoration title={title} description="lfashoifahoiheioahfih" />
        <Title title={title} span={title} myColor="black" />
        <ImageSection
          name={me.name}
          content={me.bio}
          image={urlFor(me.authorImage).url()}
        />
      </div>
      <div className="wrapper2">
        <Title title="My Skills" span="My Skills" />
        <div className="skill-wrapper">
          <SkillSection skill="Javascript" progression="99%" />
          <SkillSection skill="React Js" progression="86%" />
          <SkillSection skill="Java" progression="80%" />
          <SkillSection skill="C++" progression="85%" />
          <SkillSection skill="Python" progression="67%" />
          <SkillSection skill="UML" progression="80%" />
          <SkillSection skill="Flutter" progression="60%" />
          <SkillSection skill="Shell" progression="75%" />
        </div>
      </div>

      <div className="wrapper3">
        <Title title="Contact Me" span="Contact Me" />
        <Contact />
      </div>
    </>
  );
}

export default About;

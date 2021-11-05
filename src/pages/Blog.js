import React from "react";
import Metadecoration from "../components/Metadecoration";
import Title from "../components/Title";

function Blog() {
  const title = "Blog Post";
  return (
    <div>
      <Metadecoration title={title} description="lfashoifahoiheioahfih" />
      <Title title={title} span={title} myColor="black" />
      <h1>Blogs</h1>
    </div>
  );
}

export default Blog;

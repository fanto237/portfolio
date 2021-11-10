import React from "react";
import Metadecoration from "../components/Metadecoration";
import Title from "../components/Title";
import sanityClient from "../client";
import { useEffect, useState } from "react";
import Card from "../components/Card";

function Blog() {
  const title = "Blog Post";
  const [blogs, setBlogs] = useState(null);
  const query = `*[_type == "post"]{
    title, 
    slug,
    description,
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
        setBlogs(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [query]);

  return (
    <div className="blogs">
      <Metadecoration title={title} description="lfashoifahoiheioahfih" />
      <div className="wrapper">
        <Title title={title} span={title} myColor="black" />
        <div className="post-container">
          {blogs && blogs.map((blog) => <Card toPrint={blog} />)}
        </div>
      </div>
    </div>
  );
}

export default Blog;

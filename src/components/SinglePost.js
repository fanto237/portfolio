import React from "react";
import { useParams } from "react-router";

function SinglePost() {
  const slug = useParams();
  return <div>{slug}</div>;
}

export default SinglePost;

import React from "react";
import { Link } from "react-router-dom";
import bg from "../assets/images/sample.jpg";

function card() {
  return (
    <div className="card" style={{ "background-image": `url(${bg})` }}>
      <div className="card-content">
        <h2 className="card-title">Journey with sanity</h2>
        <p className="card-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
          quaerat.
        </p>
        <Link className="button" to="#">
          Learn More
        </Link>
      </div>
    </div>
  );
}

export default card;

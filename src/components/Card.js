import React from "react";
import { Link } from "react-router-dom";

function card({ toPrint }) {
  console.log(toPrint);
  return (
    <div
      className="card"
      style={{ "background-image": `url(${toPrint.image.asset.url})` }}
    >
      <div className="card-content">
        <h2 className="card-title">{toPrint.title}</h2>
        <p className="card-description">{toPrint.description}</p>
        {toPrint.link != null ? (
          <a className="button" href={toPrint.link} target="null">
            Learn More
          </a>
        ) : (
          <Link className="button" to="#">
            Learn More
          </Link>
        )}
      </div>
    </div>
  );
}

export default card;

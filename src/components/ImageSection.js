import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import BlockContent from "@sanity/block-content-to-react";
import { Link } from "react-router-dom";

function ImageSection({ name, content, image }) {
  return (
    <div className="about-content">
      <div className="image-content">
        <img src={image} alt="logo" className="image" />
      </div>
      <div className="about-text">
        <h4>
          Hey, I am <span>{name}</span> !
        </h4>
        <p>
          <BlockContent
            blocks={content}
            projectId="p4q6t2bs"
            dataset="production"
          />
        </p>
        <button>
          <Link to="/files/Lebenslauf.pdf" target="_blank" download>
            Download CV
            <FontAwesomeIcon icon={faDownload} />
          </Link>
        </button>
      </div>
    </div>
  );
}

export default ImageSection;

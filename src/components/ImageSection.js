import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

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
        <p>{content}</p>
        <button>
          <a href="Lebenslauf.pdf">
            Download CV
            <FontAwesomeIcon icon={faDownload} />
          </a>
        </button>
      </div>
    </div>
  );
}

export default ImageSection;

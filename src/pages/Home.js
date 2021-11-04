import React from "react";
import videoLink from "../assets/videos/video.mp4";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Home() {
  return (
    <div className="home">
      <video className="videoTag" autoPlay loop muted>
        <source src={videoLink} type="video/mp4" />
      </video>
      <div className="content">
        <div className="content_wrapper">
          <h1>Hey, Welcome to my Page !</h1>
          <h2>
            My Name is <span>Siani Lucien</span>, I live in Bremen
          </h2>
          <p>
            Feel free to click to the button down below, to know more about me
          </p>
          <button>
            Learn More <FontAwesomeIcon icon={faArrowCircleRight} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;

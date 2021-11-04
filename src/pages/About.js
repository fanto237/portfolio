import React from "react";
import Title from "../components/Title";
import profile from "../assets/images/SW.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import cv from "../assets/Lebenslauf.pdf";
// import { Link } from "react-router-dom";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

function About() {
  const title = "About Me";

  return (
    <>
      <div className="wrapper">
        <div className="about-title">
          <Title title={title} span={title} myColor="black" />
        </div>
        <div className="about-content">
          <div className="image-content">
            <img src={profile} alt="logo" className="image" />
          </div>
          <div className="about-text">
            <h4>
              Hey, I am <span>Siani Lucien Leroy</span> !
            </h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              eos laboriosam rem eius ex minima ipsam quae libero reiciendis
              laborum, tempore cumque, sunt magni similique, eveniet optio.
              Distinctio veniam necessitatibus, itaque ratione quos cum commodi
              dolor molestias vero mollitia eveniet voluptatem aperiam deserunt!
              Similique cum, voluptates debitis odit impedit quos!
            </p>
            <button>
              <a href="../assets/Lebenslauf.pdf">
                Download CV
                <FontAwesomeIcon icon={faDownload} />
              </a>
            </button>
          </div>
        </div>
      </div>
      <div className="wrapper2">
        <div className="about-title2">
          <Title title="My Skills" span="My Skills" />
        </div>
        <div className="skill-content">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam expedita
          eaque molestiae illum autem unde nihil possimus cupiditate! Nam
          sapiente ex error temporibus repellendus odit optio eligendi, illum
          deleniti? Natus debitis temporibus exercitationem eius quasi sunt nemo
          numquam quidem delectus iste. Expedita sed qui eaque doloremque omnis
          tempore fugit laboriosam reiciendis similique perspiciatis mollitia
          ullam dolore veniam, corrupti recusandae distinctio, non quasi
          voluptas molestiae quibusdam labore harum? Vitae inventore
          necessitatibus cum impedit provident, ab in distinctio! Doloribus
          veniam ducimus nesciunt.
        </div>
      </div>

      <div className="wrapper3">
        <h1>3. wrapper</h1>
      </div>
    </>
  );
}

export default About;

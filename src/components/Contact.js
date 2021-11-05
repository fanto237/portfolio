import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
function Contact() {
  return (
    <div className="contact">
      <p className="content">
        you can contact me at the email address{" "}
        <a href="mailto:luciensiani@gmail.com" className="mail">
          luciensiani@gmail.com
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
        , I am also on discord with the tag <span>FantoSama#1231</span>
      </p>
      <p className="content2">
        You can also find me in the social network with the name{" "}
        <span>@fantosama</span>.{" "}
      </p>
    </div>
  );
}

export default Contact;

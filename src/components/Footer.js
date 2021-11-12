import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className="sub_footer">
      <div className="social">
        <a href="https://github.com/fantosama" target="null">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          href="https://www.linkedin.com/in/siani-lucien-leroy-7443a7205/"
          target="null"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://twitter.com/fantosama" target="null">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </div>
      <p className="copyright">
        &copy; 2021 Siani Lucien, Germany All Rights reserved. The site's source
        code can be found on{" "}
        <a href="https://github.com/fantoSama/portfolio" target="null">
          Github.
        </a>
      </p>
    </div>
  );
}

export default Footer;

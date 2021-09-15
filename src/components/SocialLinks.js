import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialLinks = () => {
  return (
    <div id="socialLinks" className="flex-center">
      <div className="social-link">
        <a href="https://github.com/jcrowley89" target="_blank">
          <FontAwesomeIcon icon={["fab", "github"]} />
        </a>
      </div>
      <div className="social-link">
        <a href="https://www.linkedin.com/in/johncrowleydev/" target="_blank">
          <FontAwesomeIcon icon={["fab", "linkedin"]} />
        </a>
      </div>
      <div className="social-link">
        <a href="mailto:johncrowleydev@gmail.com">
          <FontAwesomeIcon icon="envelope" />
        </a>
      </div>
    </div>
  );
};

export default SocialLinks;

import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

function Socials() {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/sidar-ozbek-73a838216/"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/sidaroz" target="_blank">
        <FaGithub />
      </a>
    </div>
  );
}

export default Socials;

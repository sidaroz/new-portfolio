import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer>
      <a
        href="https://github.com/sidaroz/"
        className="footer__logo"
        target="_blank"
      >
        sidaroz
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">.home()</a>
        </li>
        <li>
          <a href="#about">.about()</a>
        </li>
        <li>
          <a href="#experience">.experience()</a>
        </li>
        <li>
          <a href="#portfolio">.portfolio()</a>
        </li>
        <li>
          <a href="#contact">.contact()</a>
        </li>
      </ul>
      <div className="footer__copyright">
        <small>&copy; Sidar's Portfolio. All rights reserved.</small>
      </div>
    </footer>
  );
}

export default Footer;

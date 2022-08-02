import React, { useEffect, useState } from "react";
import "./header.scss";
import CTA from "./CTA";
import Socials from "./Socials";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
import Logo from "./Logo/Logo";

function Header({ innerRef }) {
  const [letterClass, setLetterClass] = useState("text-animate");
  const hiArray = "Hello I'm".split("");
  const nameArray = ["S", "i", "d", "a", "r", " ", "O", "z", "b", "e", "k"];
  const jobArray = "Fullstack Developer".split("");

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass("text-animate-hover");
    }, 5500);
  }, []);

  return (
    <header ref={innerRef}>
      <div className="container header__container container__scss">
        <h5>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={hiArray}
            idx={11}
          />
        </h5>
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={20}
          />
        </h1>
        <h5 className="text-light subtitle">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={jobArray}
            idx={31}
          />
        </h5>
        <Logo />
        <CTA />
        <Socials />
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
}

export default Header;

import React, { useEffect } from "react";
import "./nav.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { IoMdCodeWorking } from "react-icons/io";
import { useState } from "react";
import gsap, { Power3 } from "gsap";

function Nav({ activeSection }) {
  const [activeNav, setActiveNav] = useState("#");
  const [completedAnimation, setCompletedAnimation] = useState(false);
  useEffect(() => {
    setActiveNav(activeSection);
  });

  const t2 = new gsap.timeline({
    delay: 5,
    repeat: 0,
    autoRemoveChildren: true,
    paused: true,
  });

  useEffect(() => {
    t2.play();
    t2.fromTo(
      "nav",
      {
        y: 40,
        opacity: 0,
      },
      { y: 0, opacity: 1, ease: Power3.easeIn }
    );
    setCompletedAnimation(true);
  }, []);

  return (
    <div className="nav__container">
      <nav>
        <a
          href="#"
          onClick={() => setActiveNav("#")}
          className={`${activeNav === "#" ? "active" : ""}`}
        >
          <AiOutlineHome />
        </a>
        <a
          href="#about"
          onClick={() => setActiveNav("about")}
          className={`${activeNav === "about" ? "active" : ""}`}
        >
          <AiOutlineUser />
        </a>
        <a
          href="#experience"
          onClick={() => setActiveNav("experience")}
          className={`${activeNav === "experience" ? "active" : ""}`}
        >
          <BiBook />
        </a>
        <a
          href="#portfolio"
          onClick={() => setActiveNav("portfolio")}
          className={`${activeNav === "portfolio" ? "active" : ""}`}
        >
          <IoMdCodeWorking />
        </a>
        <a
          href="#contact"
          onClick={() => setActiveNav("contact")}
          className={`${activeNav === "contact" ? "active" : ""}`}
        >
          <BiMessageSquareDetail />
        </a>
      </nav>
    </div>
  );
}

export default Nav;

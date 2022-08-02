import React, { useEffect } from "react";
import "./about.css";
import ME2 from "../../assets/sidar-image.png";
import { FaAward } from "react-icons/fa";
import { TbArrowFork } from "react-icons/tb";
import { VscFolderLibrary } from "react-icons/vsc";
import gsap from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function About({ innerRef }) {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    // gsap.from("#about", {
    //   duration: 1,
    //   y: "100",
    //   opacity: 0,
    //   ease: "ease-in",
    //   scrollTrigger: {
    //     trigger: "#about",
    //     start: "top 85%",
    //     end: "bottom 20%",
    //     toggleActions: "restart complete complete reset",
    //   },
    // });

    gsap.set(".about__info", { y: 100, opacity: 0 });
    ScrollTrigger.batch("#about", {
      start: "top 70%",
      end: "bottom 20%",
      onEnter: () =>
        gsap.to(".about__info", {
          opacity: 1,
          autoAlpha: 1,
          y: 0,
          ease: "ease-in",
          overwrite: true,
        }),
      onLeaveBack: () =>
        gsap.to(".about__info", {
          opacity: 0,
          autoAlpha: 1,
          y: 100,
          overwrite: true,
        }),
    });

    if (window.innerWidth < 2000) {
      gsap.from("p", {
        duration: 1,
        y: "100",
        opacity: 0,
        ease: "ease-in",
        scrollTrigger: {
          trigger: "#about",
          start: "top 30%",
          end: "bottom 20%",
          toggleActions: "restart complete complete reset",
        },
      });
    }
  }, []);
  return (
    <section id="about" ref={innerRef}>
      <section className="about__info">
        <h5>Get To Know Me</h5>
        <h2>.about()</h2>

        <div className="container about__container">
          <div className="about__me">
            <div className="me__about">
              <img src={ME2} alt="me" />
            </div>
          </div>
          <div className="about__content">
            <div className="about__cards">
              <article className="about__card">
                <FaAward className="about__icon" />
                <h5>Experience</h5>
                <small>5+ Months</small>
              </article>
              <article className="about__card">
                <TbArrowFork className="about__icon" />
                <h5>Contributions</h5>
                <small>200+ (so far)</small>
              </article>
              <article className="about__card">
                <VscFolderLibrary className="about__icon" />
                <h5>Projects</h5>
                <small>5 Completed</small>
              </article>
            </div>

            <p>
              A Mechanical Engineer MSc graduate who decided to dive straight
              into coding and grew a passion for creating tech.
            </p>

            <a href="#contact" className="btn btn-primary">
              Let's Talk
            </a>
          </div>
        </div>
      </section>
    </section>
  );
}

export default About;

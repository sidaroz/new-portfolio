import React, { useEffect } from "react";
import "./experience.css";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiBootstrap,
  SiReact,
  SiDocker,
  SiNodedotjs,
  SiMongodb,
  SiPostgresql,
  SiPython,
  SiDjango,
  SiFlask,
} from "react-icons/si";
import gsap from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Experience({ innerRef }) {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    gsap.from("#experience", {
      duration: 1,
      y: "100",
      opacity: 0,
      ease: "ease-in",
      scrollTrigger: {
        trigger: "#experience",
        start: "top 90%",
        end: "bottom 20%",
        toggleActions: "restart complete complete reset",
      },
    });
  }, []);
  return (
    <section id="experience" ref={innerRef}>
      <h5>What Skills I Have</h5>
      <h2>.techStack()</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <SiHtml5 className="experience__details-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <SiCss3 className="experience__details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <SiJavascript className="experience__details-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <SiBootstrap className="experience__details-icon" />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className="experience__details">
              <SiReact className="experience__details-icon" />
              <div>
                <h4>React</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <SiDocker className="experience__details-icon" />
              <div>
                <h4>Docker</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <SiNodedotjs className="experience__details-icon" />
              <div>
                <h4>Node JS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <SiMongodb className="experience__details-icon" />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <SiPostgresql className="experience__details-icon" />
              <div>
                <h4>PostgreSQL</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <SiPython className="experience__details-icon" />
              <div>
                <h4>Python</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className="experience__details">
              <SiDjango className="experience__details-icon" />
              <div>
                <h4>Django</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <SiFlask className="experience__details-icon" />
              <div>
                <h4>Flask</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;

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
  SiSass,
  SiExpress,
  SiRedux,
} from "react-icons/si";
import gsap from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Experience({ innerRef }) {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    gsap.set(".experience__info", { y: 100, opacity: 0 });
    ScrollTrigger.batch("#experience", {
      start: "top 70%",
      end: "bottom 20%",
      onEnter: () =>
        gsap.to(".experience__info", {
          opacity: 1,
          autoAlpha: 1,
          y: 0,
          ease: "ease-in",
          overwrite: true,
        }),
      onLeaveBack: () =>
        gsap.to(".experience__info", {
          opacity: 0,
          autoAlpha: 1,
          y: 100,
          overwrite: true,
        }),
    });
  }, []);
  return (
    <section id="experience" ref={innerRef}>
      <section className="experience__info">
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
                </div>
              </article>
              <article className="experience__details">
                <SiCss3 className="experience__details-icon" />
                <div>
                  <h4>CSS</h4>
                </div>
              </article>
              <article className="experience__details">
                <SiJavascript className="experience__details-icon" />
                <div>
                  <h4>JavaScript</h4>
                </div>
              </article>
              <article className="experience__details">
                <SiBootstrap className="experience__details-icon" />
                <div>
                  <h4>Bootstrap</h4>
                </div>
              </article>
              <article className="experience__details">
                <SiReact className="experience__details-icon" />
                <div>
                  <h4>React</h4>
                </div>
              </article>
              <article className="experience__details">
                <SiDocker className="experience__details-icon" />
                <div>
                  <h4>Docker</h4>
                </div>
              </article>
              <article className="experience__details">
                <SiRedux className="experience__details-icon" />
                <div>
                  <h4>Redux</h4>
                </div>
              </article>
              <article className="experience__details">
                <SiSass className="experience__details-icon" />
                <div>
                  <h4>Sass</h4>
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
                  <h4>Node.js</h4>
                </div>
              </article>
              <article className="experience__details">
                <SiMongodb className="experience__details-icon" />
                <div>
                  <h4>MongoDB</h4>
                </div>
              </article>
              <article className="experience__details">
                <SiPostgresql className="experience__details-icon" />
                <div>
                  <h4>PostgreSQL</h4>
                </div>
              </article>
              <article className="experience__details">
                <SiPython className="experience__details-icon" />
                <div>
                  <h4>Python</h4>
                </div>
              </article>
              <article className="experience__details">
                <SiDjango className="experience__details-icon" />
                <div>
                  <h4>Django</h4>
                </div>
              </article>
              <article className="experience__details">
                <SiFlask className="experience__details-icon" />
                <div>
                  <h4>Flask</h4>
                </div>
              </article>
              <article className="experience__details">
                <SiExpress className="experience__details-icon" />
                <div>
                  <h4>Express</h4>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Experience;

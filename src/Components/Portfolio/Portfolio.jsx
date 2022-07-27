import React, { useEffect } from "react";
import "./portfolio.scss";
import Factopia from "../../assets/factopia.png";
import Players from "../../assets/players.png";
import Zoomies from "../../assets/zoomies.png";
import Libits from "../../assets/libits.png";
import PortfolioImg from "../../assets/portfolio.png";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiBootstrap,
  SiReact,
  SiDocker,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiDjango,
  SiExpress,
  SiNetlify,
  SiHeroku,
  SiJsonwebtokens,
  SiRedux,
  SiSocketdotio,
  SiSqlite,
  SiFirebase,
  SiSass,
  SiGreensock,
} from "react-icons/si";
import { ToastContainer, toast } from "react-toastify";
import gsap from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Portfolio({ innerRef }) {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    gsap.from("#portfolio", {
      duration: 1,
      y: "100",
      opacity: 0,
      ease: "ease-in",
      scrollTrigger: {
        trigger: "#portfolio",
        start: "top 85%",
        end: "bottom 20%",
        toggleActions: "restart complete complete reset",
      },
    });
  }, []);

  const onCurrentWebsite = () =>
    toast.dark("🐢 Well thats awkward...", {
      className: "toast__styling",
      progressClassName: "toast__progress-bar",
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const data = [
    {
      id: 1,
      image: Factopia,
      title: "Factopia - Anonymous Journaling Website",
      github: "https://github.com/sidaroz/journaling-project",
      demo: "https://factopia.netlify.app/",
      technologies: [
        { techTitle: "HTML", icon: <SiHtml5 /> },
        { techTitle: "CSS", icon: <SiCss3 /> },
        {
          techTitle: "JS",
          icon: <SiJavascript />,
        },
        { techTitle: "Node.js", icon: <SiNodedotjs /> },
        { techTitle: "Express", icon: <SiExpress /> },
        { techTitle: "Netlify", icon: <SiNetlify /> },
        { techTitle: "Heroku", icon: <SiHeroku /> },
      ],
    },
    {
      id: 2,
      image: Libits,
      title: "Libits - Habit Tracking App",
      github: "https://github.com/sidaroz/libits",
      demo: "https://libits.netlify.app/",
      technologies: [
        { techTitle: "HTML", icon: <SiHtml5 /> },
        { techTitle: "CSS", icon: <SiCss3 /> },
        { techTitle: "Bootstrap", icon: <SiBootstrap /> },
        {
          techTitle: "JS",
          icon: <SiJavascript />,
        },
        { techTitle: "Node.js", icon: <SiNodedotjs /> },
        { techTitle: "JWT", icon: <SiJsonwebtokens /> },
        { techTitle: "PostgreSQL", icon: <SiPostgresql /> },
        { techTitle: "Express", icon: <SiExpress /> },
        { techTitle: "Docker", icon: <SiDocker /> },
        { techTitle: "Netlify", icon: <SiNetlify /> },
        { techTitle: "Heroku", icon: <SiHeroku /> },
      ],
    },
    {
      id: 3,
      image: Zoomies,
      title: "Zoomies - Trivia Quiz Website",
      github: "https://github.com/sidaroz/ReactQuiz",
      demo: "https://zoomies.netlify.app/",
      technologies: [
        { techTitle: "React", icon: <SiReact /> },
        { techTitle: "Redux", icon: <SiRedux /> },
        { techTitle: "CSS", icon: <SiCss3 /> },
        { techTitle: "Node.js", icon: <SiNodedotjs /> },
        { techTitle: "PostgreSQL", icon: <SiPostgresql /> },
        { techTitle: "Express", icon: <SiExpress /> },
        { techTitle: "WebSockets", icon: <SiSocketdotio /> },
        { techTitle: "Docker", icon: <SiDocker /> },
        { techTitle: "Netlify", icon: <SiNetlify /> },
        { techTitle: "Heroku", icon: <SiHeroku /> },
      ],
    },
    {
      id: 4,
      image: Players,
      title: "Players - Football Player Searching App",
      github: "https://github.com/sidaroz/ballers",
      demo: "https://players-site.netlify.app/",
      technologies: [
        { techTitle: "React", icon: <SiReact /> },
        { techTitle: "CSS", icon: <SiCss3 /> },
        { techTitle: "Python", icon: <SiPython /> },
        { techTitle: "Django", icon: <SiDjango /> },
        { techTitle: "SQLite", icon: <SiSqlite /> },
        { techTitle: "Firebase", icon: <SiFirebase /> },
        { techTitle: "Netlify", icon: <SiNetlify /> },
        { techTitle: "Heroku", icon: <SiHeroku /> },
      ],
    },
    {
      id: 5,
      image: PortfolioImg,
      title: "Sidar's Page - My Portfolio Website",
      github: "https://github.com/sidaroz/new-portfolio",
      demo: onCurrentWebsite,
      technologies: [
        { techTitle: "React", icon: <SiReact /> },
        { techTitle: "CSS", icon: <SiCss3 /> },
        { techTitle: "Sass", icon: <SiSass /> },
        { techTitle: "GreenSock", icon: <SiGreensock /> },
        { techTitle: "Netlify", icon: <SiNetlify /> },
      ],
    },
  ];

  return (
    <section id="portfolio" ref={innerRef}>
      <h5>My Recent Work</h5>
      <h2 className="portfolio__header">.portfolio()</h2>
      <small className="text-light portfolio__disclaimer">
        Disclaimer: Apps are hosted on free Heroku server. Please allow 10-15s
        to spin up.
      </small>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo, technologies }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <div className="project__technologies">
                  <p className="technologies__header">Technologies</p>
                  {technologies.map(({ techTitle, icon }, i) => {
                    return (
                      <li className="single__technologies" key={i}>
                        {icon} {techTitle}
                      </li>
                    );
                  })}
                </div>
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                  onClick={typeof demo === "string" ? null : onCurrentWebsite}
                >
                  Live Website
                </a>
              </div>
            </article>
          );
        })}
      </div>
      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </section>
  );
}

export default Portfolio;

import React from "react";
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
} from "react-icons/si";

function Portfolio({ innerRef }) {
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
      github: "https://github.com/sidaroz/journaling-project",
      demo: "https://sidaroz.netlify.app/",
      technologies: [
        { techTitle: "React", icon: <SiReact /> },
        { techTitle: "CSS", icon: <SiCss3 /> },
        { techTitle: "Sass", icon: <SiSass /> },
        { techTitle: "Netlify", icon: <SiNetlify /> },
      ],
    },
  ];

  return (
    <section id="portfolio" ref={innerRef}>
      <h5>My Recent Work</h5>
      <h2>.portfolio()</h2>
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
                >
                  Live Website
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Portfolio;

import React from 'react';
import Project from '../components/Project';
import authImage from '../images/auth.png';
import avocadoBanner from '../images/avocado-banner.png';

const projects = [
    {
        imgSrc: authImage,
        title: "Node auth template",
        repo: "https://github.com/HubertKuch/auth-api",
        page: "https://github.com/HubertKuch/auth-api",
        duration: 1,
    },
    {
        imgSrc: avocadoBanner,
        title: "Avocado: framework for PHP",
        repo: "https://github.com/HubertKuch/Avocado",
        page: "https://avocadoframework.com",
        duration: 1,
    },
]


export default function Projects() {
  return (
    <section id="projects-page">
      <span className="section-header">
        My <span className="purple-color">projects</span>
      </span>
      <main className="projects-container">
          {
              projects.map(({imgSrc, page, repo, duration, title}) => {
                 return <Project
                    title={title}
                    duration={duration}
                    img={imgSrc}
                    repo={repo}
                    pageLink={page}
                 />
              })
          }
      </main>
    </section>
  );
}

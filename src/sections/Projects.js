import React from 'react';
import Project from '../components/Project';
import authImage from '../images/auth.png';

export default function Projects() {
  return (
    <section id="projects-page">
      <span className="section-header">
        My <span className="purple-color">projects</span>
      </span>
      <main className="projects-container">
        <Project
          img={authImage}
          title="Node auth template"
          repo="https://github.com/HubertKuch/auth-api"
          pageLink="https://github.com/HubertKuch/auth-api"
          duration={1}
        />
      </main>
    </section>
  );
}

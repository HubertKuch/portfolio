import React from 'react';
import Project from '../components/Project';

export default function Projects() {
  return (
    <section className="projects-page">
      <span className="section-header">
        My <span className="purple-color">projects</span>
      </span>
      <main className="projects-container">
        <Project
          img="https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014_960_720.jpg"
          title="Chat app"
          repo="https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014_960_720.jpg"
          pageLink="http://localhost:3000/"
          duration={1}
        />
        <Project
          img="https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014_960_720.jpg"
          title="Pilio"
          repo="https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014_960_720.jpg"
          pageLink="http://localhost:3000/"
          duration={2}
        />
      </main>
    </section>
  );
}

import React from 'react';

export default function Project({ img, title, repo, pageLink, duration }) {
  return (
    <div className="project fade" style={{ transitionDuration: `${duration}s` }}>
      <a rel="noreferrer" target="_blank" href={pageLink}>
        <img src={img} alt="project" />
      </a>
      <div className="project-title">{title}</div>
      <div className="repository">
        <a
          className="repository-link"
          href={repo}
          rel="noreferrer"
          target="_blank"
        >
          Repository
        </a>
      </div>
    </div>
  );
}

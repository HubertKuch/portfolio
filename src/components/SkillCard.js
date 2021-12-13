import React from 'react';

export default function SkillsComponent({ title, languages, titleColor }) {
  const languagesMap = languages.map((language) => (
    <div className="skill fade" key={language.id}>
      <img
        src={language.img}
        alt={`${language.name}`}
        className="skill-image"
      />
      <span className="skill-name">{language.name} - </span>
      <span className="skill-desc">{language.desc}</span>
      <div className="bar">
        <div
          className="bar-content"
          style={{ width: `${language.percent}%` }}
        />
      </div>
    </div>
  ));

  return (
    <div className="skill-card">
      <div className="skill-title" style={{ color: titleColor }}>
        {title}
      </div>
      <div>{languagesMap}</div>
    </div>
  );
}

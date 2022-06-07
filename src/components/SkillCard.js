import React from 'react';
import checkSVG from '../icons/circle-check.svg';

export default function SkillsComponent({ title, languages, titleColor }) {
  const languagesMap = languages.map((language) => (
    <div className="skill fade" key={language.id}>
      <span className="skill-name">
          <img className={"skill__icon--check icon"} src={checkSVG} alt=""/>
          {language.name}</span>
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

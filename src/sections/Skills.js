import React from 'react';

import SkillCard from '../components/SkillCard';

const skills = [
  {
    id: 1,
    title: 'Front end',
    color: '#1877F2',
    languages: [
      {
        id: 1,
        name: 'JavaScript',
      },
      {
        id: 2,
        name: 'CSS3',
      },
      {
        id: 3,
        name: 'HTML5',
      },
      {
        id: 4,
        name: 'React',
      },
      {
        id: 5,
        name: 'Tailwind',
      },
      {
        id: 6,
        name: 'SASS',
      },
    ],
  },
  {
    id: 2,
    title: 'Back end',
    color: '#F8126A',
    languages: [
      {
        id: 1,
        name: 'NodeJS',
      },
      {
        id: 2,
        name: 'PHP',
      },
      {
        id: 3,
        name: 'Express',
      },
      {
        id: 4,
        name: "TypeScript"
      },
      {
        id: 5,
        name: "SpringBoot"
      }
    ],
  },
  {
    id: 3,
    title: 'Databases',
    color: '#FE672C',
    languages: [
      {
        id: 1,
        name: 'MySQL',
      },
      {
        id: 2,
        name: 'MongoDB',
      },
      {
        id: 3,
        name: 'PostgresSQL',
      }
    ],
  },
];

const skillsMap = skills.map((skill) => (
  <SkillCard
    key={skill.id}
    titleColor={skill.color}
    title={skill.title}
    languages={skill.languages}
  />
));

export default function Skills() {
  return <section id="skills-page">{skillsMap}</section>;
}

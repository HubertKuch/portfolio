import React from 'react';

import SkillCard from '../components/SkillCard';

// images
import js from '../images/js.png';
import css from '../images/css3.png';
import html5 from '../images/html5.png';
import react from '../images/react.png';
import tailwind from '../images/tailwind.png';
import sass from '../images/sass.png';

import node from '../images/node.png';
import php from '../images/php.png';
import express from '../images/express.png';

import mongo from '../images/mongo.png';
import mysql from '../images/mysql.png';

const skills = [
  {
    id: 1,
    title: 'Front end',
    color: '#1877F2',
    languages: [
      {
        id: 1,
        name: 'JavaScript',
        desc: 'lorem ipsum dolar set',
        img: js,
        percent: 70,
      },
      {
        id: 2,
        name: 'CSS3',
        desc: 'lorem ipsum dolar set',
        img: css,
        percent: 85,
      },
      {
        id: 3,
        name: 'HTML5',
        desc: 'lorem ipsum dolar set',
        img: html5,
        percent: 90,
      },
      {
        id: 4,
        name: 'React',
        desc: 'lorem ipsum dolar set',
        img: react,
        percent: 20,
      },
      {
        id: 5,
        name: 'Tailwind',
        desc: 'lorem ipsum dolar set',
        img: tailwind,
        percent: 60,
      },
      {
        id: 6,
        name: 'SASS',
        desc: 'lorem ipsum dolar set',
        img: sass,
        percent: 50,
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
        desc: 'lorem ipsum dolar set',
        img: node,
        percent: 65,
      },
      {
        id: 2,
        name: 'PHP',
        desc: 'lorem ipsum dolar set',
        img: php,
        percent: 30,
      },
      {
        id: 3,
        name: 'Express',
        desc: 'lorem ipsum dolar set',
        img: express,
        percent: 80,
      },
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
        desc: 'lorem ipsum dolar set',
        img: mysql,
        percent: 70,
      },
      {
        id: 2,
        name: 'MongoDB',
        desc: 'lorem ipsum dolar set',
        img: mongo,
        percent: 50,
      },
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
  return <section className="skills-page">{skillsMap}</section>;
}

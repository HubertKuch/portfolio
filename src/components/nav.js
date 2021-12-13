import React from 'react';

const $ = _ => document.querySelector(_);

const items = [
  {
    id: 1,
    name: 'Home',
    elem: "#",
  },
  {
    id: 2,
    name: 'About me',
    elem: "#",
  },
  {
    id: 3,
    name: 'Skills',
    elem: "#skills-page",
  },
  {
    id: 4,
    name: 'Projects',
    elem: "#projects-page",
  },
  {
    id: 5,
    name: 'Contact',
    elem: "#contact-page",
  },
];
const navItems = items.map(({id, name, elem}) => (
  <li key={id}>
    {/* eslint-disable-next-line */}
    <a href={elem}>{name}</a>
  </li>
));

export default function Nav() {
  return (
    <nav>
      <ul>{navItems}</ul>
    </nav>
  );
}

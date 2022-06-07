import React from 'react';

const items = [
  {
    id: 1,
    name: 'Home',
    elem: "#",
  },
  {
    id: 2,
    name: 'About me',
    elem: "#about-me-page",
  },
  {
    id: 3,
    name: 'Experience',
    elem: "#about-me-page",
  },
  {
    id: 4,
    name: 'Skills',
    elem: "#skills-page",
  },
  {
    id: 5,
    name: 'Projects',
    elem: "#projects-page",
  },
  {
    id: 6,
    name: 'Contact',
    elem: "#contact-page",
  },
];
const navItems = items.map(({id, name, elem}) => (
  <li key={id}>
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

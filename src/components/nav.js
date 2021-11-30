import React from 'react';

const items = [
  {
    id: 1,
    name: 'Home',
  },
  {
    id: 2,
    name: 'About me',
  },
  {
    id: 3,
    name: 'Skills',
  },
  {
    id: 4,
    name: 'Projects',
  },
  {
    id: 5,
    name: 'Contact',
  },
];
const navItems = items.map((item) => (
  <li key={item.id}>
    {/* eslint-disable-next-line */}
    <a href="#">{item.name}</a>
  </li>
));

export default function Nav() {
  return (
    <nav>
      <ul>{navItems}</ul>
    </nav>
  );
}

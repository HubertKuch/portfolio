import React from 'react';

const items = ['Home', 'About me', 'Skills', 'Projects', 'Contact'];
const navItems = items.map((item) => (
  <li>
    {/* eslint-disable-next-line */}
    <a href="#">{item}</a>
  </li>
));

export default function Nav() {
  return (
    <nav>
      <ul>{navItems}</ul>
    </nav>
  );
}

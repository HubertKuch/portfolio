import React from 'react';

import Info from '../components/Info';
import Email from '../components/Email';

export default function Contact() {
  return (
    <section id="contact-page" className={"page-section"}>
      <header>
        <span className="section-header">
          <span className="pink-color">Contact</span> with me
        </span>
      </header>
      <Info />
      <Email />
    </section>
  );
}

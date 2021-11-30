import React from 'react';

import Info from '../components/Info';
import Email from '../components/Email';

export default function Contact() {
  return (
    <section className="contact-page">
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

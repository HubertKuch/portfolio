import React from 'react';

export default function Info() {
  return (
    <div className="contact-info fade">
      <ul>
        <li className="contact-property">Name: </li>
        <li className="contact-value">Hubert</li>
        <li className="contact-property">Last name: </li>
        <li className="contact-value">Kuch</li>
        <li className="contact-property">Phone: </li>
        <li className="contact-value">
          <a
            href="tel:+48 730-071-565"
            rel="noreferrer"
            target="_blank"
            aria-label="call to me"
          >
            +48 730 071 565
          </a>
        </li>
        <li className="contact-property">E-mail:</li>
        <li className="contact-value">
          <a
            href="mailto:kuchhubert@gmail.com"
            rel="noreferrer"
            target="_blank"
            aria-label="mail to me"
          >
            kuchhubert@gmail.com
          </a>
        </li>
      </ul>
    </div>
  );
}

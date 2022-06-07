import React from 'react';
import githubSVGIcon from '../icons/github.svg';
import facebookSVGIcon from '../icons/facebook.svg';

export default function Icons() {
  return (
    <div className="icons">
      <a
        href="https://github.com/HubertKuch"
        rel="noreferrer"
        target="_blank"
        aria-label="github link"
      >
          <img src={githubSVGIcon} alt="github account" className={"icons__icon icon"}/>
      </a>
      <a
        href="https://www.facebook.com/monia.dawid/"
        rel="noreferrer"
        target="_blank"
        aria-label="facebook link"
      >
          <img src={facebookSVGIcon} alt="facebook account" className={"icons__icon"}/>
      </a>
    </div>
  );
}

import React from 'react';
import ReactDOM from 'react-dom';
import './_main.scss';
// COMPONENTS
import Nav from './components/nav';

// SECTIONS
import Landing from './sections/Landing';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

export default function App() {
  return (
    <>
      <Nav />
      <Landing />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}

ReactDOM.render(<App />, document.querySelector('#root'));

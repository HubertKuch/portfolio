import React from 'react';
import ReactDOM from 'react-dom';
import './_main.scss';

// COMPONENTS
import Nav from './components/nav';
import GoToTop from "./components/GoToTop";

// SECTIONS
import Landing from './sections/Landing';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Nav />
      <GoToTop />
      <Landing />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

ReactDOM.render(<App />, document.querySelector('#root'));

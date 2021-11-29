import React from 'react';
import ReactDOM from 'react-dom';
import './_main.scss';
// COMPONENTS
import Nav from './components/nav';

// SECTIONS
import Landing from './sections/Landing';
import Skills from './sections/Skills';

export default function App() {
  return (
    <>
      <Nav />
      <Landing />
      <Skills />
    </>
  );
}

ReactDOM.render(<App />, document.querySelector('#root'));

import React from 'react';
import ReactDOM from 'react-dom';
import './_main.scss';

// COMPONENTS
import Nav from './components/nav';
import Username from './components/Username';
import Desc from './components/Desc';
import Icons from './components/Icons';

export default function App() {
  return (
    <>
      <Nav />
      <Username />
      <Desc />
      <Icons />
    </>
  );
}

ReactDOM.render(<App />, document.querySelector('#root'));

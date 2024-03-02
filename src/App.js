import * as stylex from '@stylexjs/stylex';
import logo from './logo.svg';
import './App.css';
import React from 'react';

const styles = stylex.create({
  link: {
    textDecoration: {
      default: 'none',
      ':hover': 'underline'
    },
    zIndex: 0
  }
});

function App() {
  return (
    <div className="App" {...stylex.props(styles.link)}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

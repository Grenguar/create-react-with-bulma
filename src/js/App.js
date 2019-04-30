import React from 'react';
import logo from '../img/logo.svg';
import '../style/App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
      </header>
      <section className="section">
        <div className="container">
          <h1 className="title">Hello Bulma</h1>
          <p className="subtitle">
            My website uses <strong>Bulma</strong>!
          </p>
          <div>
            <a
              className="button is-success"
              href="https://bulma.io/documentation/">
              Learn Bulma
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;

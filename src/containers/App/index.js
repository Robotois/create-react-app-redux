import React from 'react';
import { Route, Link } from 'react-router-dom'

import Home from '../Home';
import About from '../About';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <header>
          <Link to="/">Home</Link>
          &nbsp;
          <Link to="/about-us">About</Link>
        </header>

        <main>
          <Route exact path="/" component={Home} />
          <Route exact path="/about-us" component={About} />
        </main>
      </div>
    );
  }
}

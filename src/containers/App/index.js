import React from 'react';
import { Route, Link } from 'react-router-dom';

import Home from '../Home';
import About from '../About';
import People from '../People';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <header>
          <Link to="/">Home</Link>
          &nbsp;
          <Link to="/about-us">About</Link>
          &nbsp;
          <Link to="/people">People</Link>
        </header>

        <main>
          <Route exact path="/" component={Home} />
          <Route exact path="/about-us" component={About} />
          <Route exact path="/people" component={People} />
        </main>
      </div>
    );
  }
}

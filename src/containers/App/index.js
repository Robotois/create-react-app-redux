import React from 'react';
import { Route, Link } from 'react-router-dom';

import Home from '../Home';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <main>
          <Route exact path="/" component={Home} />
          {/*<Route exact path="/pokemon/:id" component={Pokemon} />*/}
        </main>
      </div>
    );
  }
}

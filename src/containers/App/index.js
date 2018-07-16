import React from 'react';
import { Route } from 'react-router-dom';

import Pokemons from '../Pokemons';
import Pokemon from '../Pokemons/item';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <main>
          <Route exact path="/" component={Pokemons} />
          <Route exact path="/pokemon/:id" component={Pokemon} />
        </main>
      </div>
    );
  }
}

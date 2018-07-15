import React from 'react';
import { connect } from 'react-redux';
// import { push } from 'connected-react-router';

import {
  getPokemons,
  isLoading as loading,
  hasLoadingError as loadingError,
} from '../../selectors/pokedex';
import { loadPokemons } from '../../modules/pokedex';

class Home extends React.Component {
  componentDidMount() {
    this.props.loadPokemons();
  }

  render() {
    const { pokemons, isLoading, hasLoadingError } = this.props;

    return (
      <div>
        <h1>Pokemons</h1>
        <div>{JSON.stringify(pokemons)}</div>
        <p>
          <button>Go to about page via redux</button>
        </p>
      </div>
    );
  }
}

export default connect(
  state => ({
    pokemons: getPokemons(state),
    isLoading: loading(state),
    hasLoadingError: loadingError(state),
  }),
  {
    loadPokemons,
  },
)(Home);

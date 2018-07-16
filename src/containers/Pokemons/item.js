import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { getPokemon, isLoading as loading } from '../../selectors/pokedex';
import { loadPokemon } from '../../modules/pokedex';
import Card from '../../components/Card';

class Pokemon extends React.Component {
  componentDidMount() {
    const { match } = this.props;
    const { params } = match;
    if (params.id) {
      this.props.loadPokemon(params.id);
    }
  }

  render() {
    const { pokemon, isLoading } = this.props;
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }}>
        <Card item={pokemon} isLoading={isLoading} />
        <Link to="/">Back</Link>
      </div>
    );
  }
}

export default connect(
  state => ({
    isLoading: loading(state),
    pokemon: getPokemon(state),
  }),
  {
    loadPokemon,
  },
)(Pokemon);

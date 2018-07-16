import React from 'react';
import { connect } from 'react-redux';

import { getPokemons, isLoading as loading, getNextPage } from '../../selectors/pokedex';
import { loadPokemons } from '../../modules/pokedex';
import List from '../../components/List';

class Pokemons extends React.Component {
  componentDidMount() {
    if (!this.props.pokemons.length) {
      this.props.loadPokemons();
    }
  }

  onLoadMore = () => {
    const { hasNextPageUrl, nextPageUrl } = this.props;
    if (hasNextPageUrl) {
      this.props.loadPokemons(nextPageUrl);
    }
  };

  render() {
    const { pokemons, isLoading, hasNextPageUrl } = this.props;
    return (
      <div>
        <h1>Pokemons</h1>
        <div style={{ margin: 50 }}>
          <List
            data={pokemons}
            loading={isLoading}
            showLoadingMore={hasNextPageUrl}
            loadingMore={isLoading}
            onLoadMore={this.onLoadMore}
          />
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    pokemons: getPokemons(state),
    isLoading: loading(state),
    hasNextPageUrl: !!getNextPage(state),
    nextPageUrl: getNextPage(state),
  }),
  {
    loadPokemons,
  },
)(Pokemons);

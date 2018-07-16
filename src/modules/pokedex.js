import api from '../config/api';

export const GET_POKEMONS = 'POKEMONS/GET_POKEMONS';
export const GET_POKEMONS_SUCCESS = 'POKEMONS/GET_POKEMONS_SUCCESS';
export const GET_POKEMONS_FAIL = 'POKEMONS/GET_POKEMONS_FAIL';

export const GET_POKEMON = 'POKEMONS/GET_POKEMON';
export const GET_POKEMON_SUCCESS = 'POKEMONS/GET_POKEMON_SUCCESS';
export const GET_POKEMON_FAIL = 'POKEMONS/GET_POKEMON_FAIL';

export const STATUS = {
  idle: 'idle',
  isLoading: 'isLoading',
  loadingError: 'loadingError',
};

const initialState = {
  response: {
    count: 0,
    previous: null,
    results: [],
    next: null,
  },
  responsePokemon: {},
  status: STATUS.idle,
};

function parseReponse(response, state) {
  return {
    ...response,
    results: [...state.response.results, ...response.results],
  };
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_POKEMONS:
    case GET_POKEMON:
      return {
        ...state,
        status: STATUS.isLoading,
      };

    case GET_POKEMONS_SUCCESS:
      return {
        ...state,
        response: parseReponse(action.result, state),
        status: STATUS.idle,
      };

    case GET_POKEMON_SUCCESS:
      return {
        ...state,
        responsePokemon: action.result,
        status: STATUS.idle,
      };

    case GET_POKEMONS_FAIL:
    case GET_POKEMON_FAIL:
      return {
        ...state,
        status: STATUS.loadingError,
      };
    default:
      return state;
  }
};

export const loadPokemons = nextPageUrl => {
  return dispatch => {
    return dispatch({
      types: [GET_POKEMONS, GET_POKEMONS_SUCCESS, GET_POKEMONS_FAIL],
      promise: client => client.get(nextPageUrl || `${api.pokemon}`),
    });
  };
};

export const loadPokemon = id => {
  return dispatch => {
    return dispatch({
      types: [GET_POKEMON, GET_POKEMON_SUCCESS, GET_POKEMON_FAIL],
      promise: client => client.get(`${api.pokemon}${id}/`),
    });
  };
};

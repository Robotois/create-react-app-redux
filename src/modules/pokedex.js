import api from '../config/api';

export const GET_POKEMONS = 'POKEMONS/GET_POKEMONS';
export const GET_POKEMONS_SUCCESS = 'POKEMONS/GET_POKEMONS_SUCCESS';
export const GET_POKEMONS_FAIL = 'POKEMONS/GET_POKEMONS_FAIL';

export const STATUS = {
  idle: 'idle',
  isLoading: 'isLoading',
  loadingError: 'loadingError',
};

const initialState = {
  response: [],
  status: STATUS.idle,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_POKEMONS:
      return {
        ...state,
        status: STATUS.isLoading,
      };

    case GET_POKEMONS_SUCCESS:
      return {
        ...state,
        response: action.result,
        status: STATUS.idle,
      };

    case GET_POKEMONS_FAIL:
      return {
        ...state,
        status: STATUS.loadingError,
      };
    default:
      return state;
  }
};

export const loadPokemons = () => {
  return dispatch => {
    return dispatch({
      types: [GET_POKEMONS, GET_POKEMONS_SUCCESS, GET_POKEMONS_FAIL],
      promise: client => client.get(`${api.pokemon}`),
    });
  };
};

import pokedex from './pokedex';

export default {
  pokedex,
};

export const rootReducer = appReducer => (state, action) => {
  return appReducer(state, action);
};

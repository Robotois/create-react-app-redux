import { createSelector } from 'reselect';
import { STATUS } from '../modules/pokedex';

export const getPokedex = state => state.pokedex;

export const getResponse = createSelector(getPokedex, pokedex => pokedex.response);

export const getCount = createSelector(getResponse, response => response.count);

export const getPokemons = createSelector(getResponse, response => response.results);

export const getNextPage = createSelector(getResponse, response => response.next);

export const getStatus = createSelector(getPokedex, pokedex => pokedex.status);

export const isLoading = createSelector(getStatus, status => status === STATUS.isLoading);

export const isIdle = createSelector(getStatus, status => status === STATUS.idle);

export const hasLoadingError = createSelector(getStatus, status => status === STATUS.loadingError);

export const getPokemon = createSelector(getPokedex, pokedex => pokedex.responsePokemon);

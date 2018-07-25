import { createSelector } from 'reselect';
import { STATUS } from '../modules/people';

export const getPeople = state => state.people;

export const getResponse = createSelector(getPeople, people => people.response);

export const getCount = createSelector(getResponse, response => response.count);

export const getPersons = createSelector(getResponse, response => response.results);

export const getStatus = createSelector(getPeople, people => people.status);

export const isLoading = createSelector(getStatus, status => status === STATUS.isLoading);

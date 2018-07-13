import { createSelector } from 'reselect';
import { STATUS } from '../modules/counter';
export const getCounter = state => state.counter;

export const getStatus = createSelector(getCounter, counter => counter.status);

export const getCount = createSelector(getCounter, counter => counter.count);

export const isIncrementing = createSelector(getStatus, status => status === STATUS.isIncrementing);

export const isDecrementing = createSelector(getStatus, status => status === STATUS.isDecrementing);

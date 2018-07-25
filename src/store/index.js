import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import appReducer, { rootReducer } from '../modules/rootReducer';

export const history = createHistory();
const enhancers = [];

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const store = createStore(
  connectRouter(history)(rootReducer(combineReducers(appReducer))),
  compose(
    applyMiddleware(routerMiddleware(history), thunk),
    ...enhancers,
  ),
);

/**
 * Register async loaded reducers in store and replace
 * current state-reducer with the a new reducer
 *
 * @export
 * @param {Object} store - the store object
 * @param {Object} asyncReducer - async reducer modules
 */
store.asyncReducers = {};

function replaceReducers(defaultReducers) {
  const merged = Object.assign({}, defaultReducers, store.asyncReducers);
  const combined = rootReducer(combineReducers(merged));
  store.replaceReducer(combined);
}

export function injectAsyncReducers(asyncReducers) {
  const injectReducers = Object.keys(asyncReducers).reduce((toAdd, reducer) => {
    // do not replace already existing reducer unless it was (potentially) hot-reloaded
    if (store.asyncReducers[reducer] && !module.hot) {
      delete toAdd[reducer];
    }

    return toAdd;
  }, asyncReducers);

  store.asyncReducers = Object.assign({}, store.asyncReducers, injectReducers);
  replaceReducers(appReducer);
}

/* istanbul ignore next */
if (module.hot) {
  module.hot.accept('../modules/rootReducer', () => {
    const nextReducer = require('../modules/rootReducer').default; // eslint-disable-line global-require

    store.replaceReducer(nextReducer);
  });
}

export default store;

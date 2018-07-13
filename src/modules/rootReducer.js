import counter from './counter';

export default {
  counter,
};

export const rootReducer = appReducer => (state, action) => {
  return appReducer(state, action);
};

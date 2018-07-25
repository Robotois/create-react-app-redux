import counter from './counter';
import people from './people';

export default {
  counter,
  people,
};

export const rootReducer = appReducer => (state, action) => {
  return appReducer(state, action);
};

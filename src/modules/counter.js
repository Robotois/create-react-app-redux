export const INCREMENT_REQUESTED = 'counter/INCREMENT_REQUESTED';
export const INCREMENT = 'counter/INCREMENT';
export const DECREMENT_REQUESTED = 'counter/DECREMENT_REQUESTED';
export const DECREMENT = 'counter/DECREMENT';

export const STATUS = {
  idle: 'idle',
  isIncrementing: 'isIncrementing',
  isDecrementing: 'isDecrementing',
};

const initialState = {
  count: 0,
  status: STATUS.idle,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_REQUESTED:
      return {
        ...state,
        status: STATUS.isIncrementing,
      };

    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
        status: STATUS.idle,
      };

    case DECREMENT_REQUESTED:
      return {
        ...state,
        status: STATUS.isDecrementing,
      };

    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
        status: STATUS.idle,
      };

    default:
      return state;
  }
};

export const increment = () => {
  return dispatch => {
    dispatch({
      type: INCREMENT_REQUESTED,
    });

    dispatch({
      type: INCREMENT,
    });
  };
};

export const incrementAsync = () => {
  return dispatch => {
    dispatch({
      type: INCREMENT_REQUESTED,
    });

    return setTimeout(() => {
      dispatch({
        type: INCREMENT,
      });
    }, 3000);
  };
};

export const decrement = () => {
  return dispatch => {
    dispatch({
      type: DECREMENT_REQUESTED,
    });

    dispatch({
      type: DECREMENT,
    });
  };
};

export const decrementAsync = () => {
  return dispatch => {
    dispatch({
      type: DECREMENT_REQUESTED,
    });

    return setTimeout(() => {
      dispatch({
        type: DECREMENT,
      });
    }, 3000);
  };
};

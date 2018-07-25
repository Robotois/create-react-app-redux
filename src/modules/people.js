import api from '../config/api';

export const GET_PEOPLE = 'SWAPI/GET_PEOPLE';
export const GET_PEOPLE_SUCCESS = 'SWAPI/GET_PEOPLE_SUCCESS';
export const GET_PEOPLE_FAIL = 'SWAPI/GET_PEOPLE_FAIL';

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
  status: STATUS.idle,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PEOPLE:
      return {
        ...state,
        status: STATUS.isLoading,
      };

    case GET_PEOPLE_SUCCESS:
      return {
        ...state,
        response: action.result,
        status: STATUS.idle,
      };

    case GET_PEOPLE_FAIL:
      return {
        ...state,
        status: STATUS.loadingError,
      };
    default:
      return state;
  }
};

export const loadPeople = () => {
  return dispatch => {
    return dispatch({
      types: [GET_PEOPLE, GET_PEOPLE_SUCCESS, GET_PEOPLE_FAIL],
      promise: client => client.get(`${api.people}`),
    });
  };
};

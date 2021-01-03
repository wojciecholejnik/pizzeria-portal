import Axios from 'axios';
import { api } from '../settings';

const changeStatus = (statePart, table) => {
  statePart.data.map( findtable => {
    if (findtable.id === table.id) {
      if(findtable.status === 'free'){
        findtable.status = 'thinking';
      } else if (findtable.status === 'thinking') {
        findtable.status = 'ordered';
      } else if (findtable.status === 'ordered') {
        findtable.status = 'prepared';
      } else if (findtable.status === 'prepared') {
        findtable.status = 'delivered';
      } else if (findtable.status === 'delivered') {
        findtable.status = 'paid';
      } else if (findtable.status === 'paid') {
        findtable.status = 'free';
      }
    }
    return findtable;
  });
  // postToApi(statePart.data);
  return statePart;
};


/* selectors */
export const getAll = ({tables}) => tables.data;
export const getLoadingState = ({tables}) => tables.loading;

/* action name creator */
const reducerName = 'tables';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const FETCH_START = createActionName('FETCH_START');
const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
const FETCH_ERROR = createActionName('FETCH_ERROR');
const STATUS_TOGGLE = createActionName('STATUS_TOGGLE');

/* action creators */
export const fetchStarted = payload => ({ payload, type: FETCH_START });
export const fetchSuccess = payload => ({ payload, type: FETCH_SUCCESS });
export const fetchError = payload => ({ payload, type: FETCH_ERROR });
export const statusToggled = payload => ({payload, type: STATUS_TOGGLE});


/* thunk creators */
export const fetchFromAPI = () => {
  return (dispatch) => {
    dispatch(fetchStarted());

    Axios
      .get(`${api.url}/api/${api.tables}`)
      .then(res => {
        dispatch(fetchSuccess(res.data));
      })
      .catch(err => {
        dispatch(fetchError(err.message || true));
      });
  };
};

export const postToApi = (data) => {
  const options = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };

  fetch(`${api.url}/api/${api.tables}`, options);

};

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case FETCH_START: {
      return {
        ...statePart,
        loading: {
          active: true,
          error: false,
        },
      };
    }
    case FETCH_SUCCESS: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
        data: action.payload,
      };
    }
    case FETCH_ERROR: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: action.payload,
        },
      };
    } case STATUS_TOGGLE: {
      const status = changeStatus(statePart, action.payload);
      return status;
    }
    default:
      return statePart;
  }
}

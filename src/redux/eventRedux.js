import Axios from 'axios';
import { api } from '../settings';

/* selectors */
export const getAllEvent = ({event}) => event.data;
export const getLoadingStateEvent = ({event}) => event.loading;

/* action name creator */
const reducerName = 'event';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const EVENT_FETCH_START = createActionName('EVENT_FETCH_START');
const EVENT_FETCH_SUCCESS = createActionName('EVENT_FETCH_SUCCESS');
const EVENT_FETCH_ERROR = createActionName('EVENT_FETCH_ERROR');

/* action creators */
export const eventFetchStarted = payload => ({ payload, type: EVENT_FETCH_START });
export const eventFetchSuccess = payload => ({ payload, type: EVENT_FETCH_SUCCESS });
export const eventFetchError = payload => ({ payload, type: EVENT_FETCH_ERROR });

/* thunk creators */
export const fetchFromAPIEvent = () => {

  return (dispatch, getState) => {
    dispatch(eventFetchStarted());

    Axios
      .get(`${api.url}/api/${api.event}`)
      .then(res => {
        dispatch(eventFetchSuccess(res.data));
      })
      .catch(err => {
        dispatch(eventFetchError(err.message || true));
      });
  };
};

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case EVENT_FETCH_START: {
      return {
        ...statePart,
        loading: {
          active: true,
          error: false,
        },
      };
    }
    case EVENT_FETCH_SUCCESS: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
        data: action.payload,
      };
    }
    case EVENT_FETCH_ERROR: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: action.payload,
        },
      };
    }
    default:
      return statePart;
  }
}

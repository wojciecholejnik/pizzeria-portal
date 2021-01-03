import Axios from 'axios';
import { api } from '../settings';

/* selectors */
export const getAllBooking = ({booking}) => booking.data;
export const getLoadingStateBooking = ({booking}) => booking.loading;
export const getToday = ({today}) => today;

/* action name creator */
const reducerName = 'booking';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const BOOKING_FETCH_START = createActionName('BOOKING_FETCH_START');
const BOOKING_FETCH_SUCCESS = createActionName('BOOKING_FETCH_SUCCESS');
const BOOKING_FETCH_ERROR = createActionName('BOOKING_FETCH_ERROR');

/* action creators */
export const bookingFetchStarted = payload => ({ payload, type: BOOKING_FETCH_START });
export const bookingFetchSuccess = payload => ({ payload, type: BOOKING_FETCH_SUCCESS });
export const bookingFetchError = payload => ({ payload, type: BOOKING_FETCH_ERROR });

/* thunk creators */
export const fetchFromAPI = () => {

  return (dispatch, getState) => {
    dispatch(bookingFetchStarted());

    Axios
      .get(`${api.url}/api/${api.booking}`)
      .then(res => {
        dispatch(bookingFetchSuccess(res.data));
      })
      .catch(err => {
        dispatch(bookingFetchError(err.message || true));
      });
  };
};

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case BOOKING_FETCH_START: {
      return {
        ...statePart,
        loading: {
          active: true,
          error: false,
        },
      };
    }
    case BOOKING_FETCH_SUCCESS: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
        data: action.payload,
      };
    }
    case BOOKING_FETCH_ERROR: {
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

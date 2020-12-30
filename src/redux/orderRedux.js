import Axios from 'axios';
import { api } from '../settings';

/* selectors */
export const getAllOrder = ({order}) => order.data;
export const getLoadingStateOrder = ({order}) => order.loading;


/* action name creator */
const reducerName = 'order';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const ORDER_FETCH_START = createActionName('ORDER_FETCH_START');
const ORDER_FETCH_SUCCESS = createActionName('ORDER_FETCH_SUCCESS');
const ORDER_FETCH_ERROR = createActionName('ORDER_FETCH_ERROR');

/* action creators */
export const orderFetchStarted = payload => ({ payload, type: ORDER_FETCH_START });
export const orderFetchSuccess = payload => ({ payload, type: ORDER_FETCH_SUCCESS });
export const orderFetchError = payload => ({ payload, type: ORDER_FETCH_ERROR });

/* thunk creators */
export const fetchFromAPIOrder = () => {

  return (dispatch, getState) => {
    dispatch(orderFetchStarted());

    Axios
      .get(`${api.url}/api/${api.order}`)
      .then(res => {
        dispatch(orderFetchSuccess(res.data));
      })
      .catch(err => {
        dispatch(orderFetchError(err.message || true));
      });
  };
};

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case ORDER_FETCH_START: {
      return {
        ...statePart,
        loading: {
          active: true,
          error: false,
        },
      };
    }
    case ORDER_FETCH_SUCCESS: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
        data: action.payload,
      };
    }
    case ORDER_FETCH_ERROR: {
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

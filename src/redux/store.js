import {combineReducers, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import tablesReducer from './tablesRedux';
import bookingReducer from './bookingRedux';
import eventReducer from './eventRedux';
import orderReducer from './orderRedux';

const now = new Date();
const month = (now.getMonth()+1) <= 9 ? ('0' + ((now.getMonth()+1))) : (now.getMonth()+1);
const day = (now.getDate()) <= 9 ? ('0' + (now.getDate())) : now.getDate();
const today = now.getFullYear() + '-' + month + '-' + day;

// define initial state and shallow-merge initial data
const initialState = {
  today: today,
  tables: {
    data: [],
    loading: {
      active: false,
      error: false,
    },
  },
  booking: {
    data: [],
    loading: {
      active: false,
      error: false,
    },
  },
  event: {
    data: [],
    loading: {
      active: false,
      error: false,
    },
  },
  order: {
    data: [],
    loading: {
      active: false,
      error: false,
    },
  },
};

// define reducers
const reducers = {
  tables: tablesReducer,
  booking: bookingReducer,
  event: eventReducer,
  order: orderReducer,
};

// add blank reducers for initial state properties without reducers
Object.keys(initialState).forEach(item => {
  if (typeof reducers[item] == 'undefined') {
    reducers[item] = (statePart = null) => statePart;
  }
});

const combinedReducers = combineReducers(reducers);

// create store
const store = createStore(
  combinedReducers,
  initialState,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);

export default store;

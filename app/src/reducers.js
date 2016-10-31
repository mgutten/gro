import { combineReducers } from 'redux';

// Reducers
// import userReducer from './user/reducers';
import checkoutReducer from './checkout/reducers';

// Combine Reducers
var reducers = combineReducers({
  // user: userReducer,
  checkout: checkoutReducer
});

export default reducers;

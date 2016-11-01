import * as fn from './functions'

const initialState = {};

const checkoutReducer = function(state = initialState, action) {

  switch(action.type) {

    case 'NEXT_STEP':
      return fn.nextStep(state, action);

    default:
      return state;

  }

}

export default checkoutReducer;

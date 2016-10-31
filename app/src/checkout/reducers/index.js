import * as fn from './functions'

const initialState = {
  craftIndex: 0,
  moisture: [],
  boosts: ['Growth'],
  fragrance: []
};

const checkoutReducer = function(state = initialState, action) {

  switch(action.type) {

    case 'NEXT_STEP':
      return fn.nextStep(state, action);

    case 'TOGGLE_ANSWER':
      return fn.toggleAnswer(state, action);

    default:
      return state;

  }

}

export default checkoutReducer;

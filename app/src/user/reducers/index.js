import * as fn from './functions'

let initialState = {
  moisture: [],
  boosts: ['Growth'],
  fragrance: []
};

const userReducer = function(state = initialState, action) {

  switch(action.type) {

    case 'TOGGLE_ANSWER':
      return fn.toggleAnswer(state, action);

    default:
      return state;

  }

}

export default userReducer;

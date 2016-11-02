import * as fn from './functions'

const initialState = {
  step: 'craft',
  stepTitle: 'Craft your perfect bottle'
};

const checkoutReducer = function(state = initialState, action) {

  switch(action.type) {

    case 'NEXT_STEP':
      return fn.nextStep(state, action);

    case 'UPDATE_PROGRESS':
      return fn.updateProgress(state, action);

    default:
      return state;

  }

}

export default checkoutReducer;

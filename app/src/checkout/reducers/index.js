import _ from 'underscore'

const initialState = {
  craftIndex: 0,
  moisture: [],
  boosts: [],
  fragrance: []
};

const checkoutReducer = function(state = initialState, action) {

  switch(action.type) {

    case 'NEXT_STEP':
      return {
        ...state,
        craftIndex: state.craftIndex + 1
      };

    case 'TOGGLE_ANSWER':

      let newState = {
        ...state
      };

      let answers = newState[action.question];

      if (action.selected) {
        // Currently selected, remove value
        newState[action.question] = _.without(answers, action.value);
      } else {
        newState[action.question] = answers.concat([action.value]);
      }

      return newState;

    default:
      return state;

  }

}

export default checkoutReducer;

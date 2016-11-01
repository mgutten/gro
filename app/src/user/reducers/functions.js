import _ from 'underscore'

export const toggleAnswer = function(state, action) {
  let newState = {
    ...state
  };

  let answers = newState[action.question];

  if (!action.allowMultiple && answers.length > 0) {
    // Question does not allow multiple answers, remove current answers
    answers = [];
  }

  if (action.selected)
    // Currently selected, remove value
    newState[action.question] = _.without(answers, action.value);
  else
    newState[action.question] = answers.concat([action.value]);

  return newState;
};

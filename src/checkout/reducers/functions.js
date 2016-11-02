import store from '../../store'
import user from '../../user'
import _ from 'underscore'

export const nextStep = function(state, action) {
  let newState = {
    ...state
  };

  const userState = store.getState().user;
  user.save(userState);

  window.location.hash = action.url;

  return newState;
};

export const updateProgress = function(state, action) {
  return {
    ...state,
    step: action.step,
    stepTitle: action.stepTitle
  };
};

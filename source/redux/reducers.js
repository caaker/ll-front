import {combineReducers} from 'redux';

const User = (state, action) => {
  const newState = { ...state };
  switch(action.type) {
    case "setUser":
      newState.current = action.current;
  }
  return newState;
};

const URL = (state, action) => {
  let newState = { ...state };
  switch(action.type) {
    case "updateURL":
      newState.URL = action.URL;
  }
  return newState;
};

const reducers = combineReducers({
  User,
  URL
});

export default reducers;

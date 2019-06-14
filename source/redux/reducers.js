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
  // console.log(state)
  let newState = { ...state };
  switch(action.type) {
    case "updateURL":
      newState.current = action.current;
  }
  return newState;
};

const reducers = combineReducers({
  User,
  URL
});

export default reducers;

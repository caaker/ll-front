import {combineReducers} from 'redux';

const Apex = (state, action) => {
  const newState = { ...state };
  switch(action.type) {
    case "toggleApex":
      newState.current = !state.current;
      break;
    case "closeApex":
      newState.current = false;
  }
  return newState;
};

const Menu = (state, action) => {
  const newState = { ...state };
  switch(action.type) {
    case "closeMenu":
      newState.status = false;
      break;
    case "toggleMenu":
      newState.status = !state.status;
      break;
    case "updateMenu":
      newState.current = action.current;
  }
  return newState;
};

const User = (state, action) => {
  const newState = { ...state };
  switch(action.type) {
    case "setUser":
      newState.current = action.current;
  }
  return newState;
};


/*
*/

const URL = (state, action) => {
  let newState = { ...state };
  switch(action.type) {
    case "updateURL":
      newState.current = action.current;
  }
  return newState;
};

const App = (state, action) => {
  const newState = { ...state };
  switch(action.type) {
    case "updateApp":
      newState.current = !state.current;
      break;  
  }
  console.log(newState);
  return newState;
};

const reducers = combineReducers({
  Apex,
  Menu,
  User,
  URL,
  App
});

export default reducers;

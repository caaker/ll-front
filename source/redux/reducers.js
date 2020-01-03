import {combineReducers} from 'redux';
import Tree from '../classes/class.Tree.js';

const Search = (state, action) => {
  const newState = { ...state };
  switch(action.type) {
    case "updateSearch":
      newState.current = action.current;
  }
  return newState;
};
const MenuFave = (state, action) => {
  const newState = { ...state };
  switch(action.type) {
    case "updateMenuFave":
      newState.current = action.current;
  }
  return newState;
};
const Bookmarks = (state, action) => {
  let newState = { ...state };
  switch(action.type) {
    case "updateBookmarks":
      newState.bookmarks = Tree.createHierarchy(action.bookmarks);
      // console.log('Bookmarks -> updateBookmarks');
      // console.log(newState)
  }
  return newState;
};




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
const User = (state, action) => {
  const newState = { ...state };
  switch(action.type) {
    case "setUser":
      newState.current = action.current;
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
const URL = (state, action) => {
  let newState = { ...state };
  switch(action.type) {
    case "updateURL":
      newState.current = action.current;
  }
  return newState;
};

const reducers = combineReducers({
  Search,
  MenuFave,
  Bookmarks,


  Apex, // ok
  User, // ok
  Menu, // ok

  URL
});

export default reducers;

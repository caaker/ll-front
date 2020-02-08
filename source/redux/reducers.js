import {combineReducers} from 'redux';
import Tree from '../classes/class.Tree.js';

/* 

Reducers are pure functions that take the previous state, apply an action
and return the new state.

*/

// plans to implement
const Search = (state, action) => {
  const newState = { ...state };
  switch(action.type) {
    case "updateSearch":
      newState.current = action.current;
  }
  return newState;
};

// For bookmark/favorites
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
  }
  return newState;
};

// For the apex or top bar
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

// Holds the current user data
const User = (state, action) => {
  const newState = { ...state };
  switch(action.type) {
    case "setUser":
      newState.current = action.current;
  }
  return newState;
};

// Menu bar in the Apex
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

// Holds the URL for Favicon Finder
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
  Apex,
  User,
  Menu,
  URL
});

export default reducers;

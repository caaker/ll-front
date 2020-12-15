/* NOTES

  Refactor as each recuder is checked for every action:
  Refactor to move code into each individual case:

  The spread operation is causing a shallow copy

  In React (and redux), state should never be mutated, because React uses Object.is to determine whether 
  a stateful value has changed (and if it doesn't detect a change, re-rendering will be skipped).
  
*/



import {combineReducers} from 'redux';
import Tree from '../classes/class.Tree.js';

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

const Modal = (state, action) => {
  const newState = { ...state };
  newState.data = action.data;
  switch(action.type) {
    case "toggleOn":
      newState.on = true;
      break;
    case "toggleOff":
      newState.on = false;
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

const Articles = (state, action) => {
  let newState = { ...state };
  switch(action.type) {
    case "updateArticles":
      newState.articles = action.articles;
      break;
    case "deleteArticle":
      // console.log('REDUX: deleteArticle() called', action.index);
      newState.articles.splice(action.index, 1)
      break;
    case "addArticle":
      // console.log('REDUX: addArticle() called', action.component_state);
      newState.articles.unshift(action.component_state)
      break;
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

// Holds the URL for Favicon Finder
const URL = (state, action) => {
  let newState = { ...state };
  switch(action.type) {
    case "updateURL":
      newState.current = action.current;
  }
  return newState;
};

// plans to implement
const Search = (state, action) => {
  const newState = { ...state };
  switch(action.type) {
    case "updateSearch":
      newState.current = action.current;
  }
  return newState;
};

const reducers = combineReducers({
  Apex,
  User,
  Menu,
  Modal, 
  Bookmarks,
  Articles,
  MenuFave,
  URL,
  Search
});

export default reducers;



/* 
NOTES

Reducers are pure functions that take the previous state, apply an action
and return the new state.

This line acts as a shallow clone:

  let newState = { ...state };

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch
https://redux.js.org/recipes/structuring-reducers/basic-reducer-structure

*/

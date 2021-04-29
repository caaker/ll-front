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
      newState.bookmarks = Tree.createTree1(action.bookmarks);
  }
  return newState;
};

const Domains = (state, action) => {
  let newState = { ...state };
  switch(action.type) {
    case "updateDomains":
      newState.domains = Tree.createTree2(action.domains, action.tag1);
      // console.log(newState);
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
  Domains,
  Articles,
  MenuFave,
  URL,
  Search
});

export default reducers;

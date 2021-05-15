import {combineReducers} from 'redux';
import Tree from './class.Tree.js';

// Holds the current user data
const User = (state = {current: false}, action) => {
  switch(action.type) {
    case "initializeUser":
      const newState = { ...state };
      newState.current = action.current;
      return newState;
  }
  return state;
};

const Articles = (state = {articles: false}, action) => {
  let newState = { ...state };
  switch(action.type) {
    case "initializeArticles":
      newState.articles = action.articles;
      return newState;
    case "deleteArticle":
      newState.articles.splice(action.index, 1)
      return newState;
    case "addArticle":
      newState.articles.unshift(action.component_state)
      return newState;
  }
  return state;
};

const Domains = (state = {domains: false}, action) => {
  switch(action.type) {
    case "initializeDomains":
      const newState = { ...state };
      newState.domains = Tree.createTree3(action.domains, action.tag1);
      return newState;
  }
  return state;
};

const Bookmarks = (state = {bookmarks: false}, action) => {
  switch(action.type) {
    case "updateBookmarks":
      const newState = { ...state };
      newState.bookmarks = Tree.createTree1(action.bookmarks);
      return newState;
  }
  return state;
};

const App = (state = {current: true}, action) => {
  if(action.type === "toggleAppStyle"){
    const newState = { ...state };
    newState.current = !state.current;
    return newState;
  }
  return state;
};

// For the apex or top bar
const Apex1 = (state = {current: false}, action) => {
  const newState = { ...state };
  switch(action.type) {
    case "toggleApex1":
      newState.current = !state.current;
      return newState;
    case "closeApex1":
      newState.current = false;
      return newState;
  }
  return state;
};

// Menu bar in the Apex
const Menu = (state = {current: 'Articles', status: false}, action) => {
  const newState = { ...state };
  switch(action.type) {
    case "closeMenu":
      if(newState.status === false){
        return state;
      }
      newState.status = false;
      return newState;
    case "toggleMenu":
      newState.status = !state.status;
      return newState;
    case "updateMenu":
      newState.current = action.current;
      return newState;
  }
  return state;
};

const Modal = (state = { on: false, data: false }, action) => {
  const newState = { ...state };
  newState.data = action.data;
  switch(action.type) {
    case "toggleOn":
      newState.on = true;
      return newState;
    case "toggleOff":
      newState.on = false;
      return newState;
  }
  return state;
};

const Modal2 = (state = { on: false, data: false }, action) => {
  const newState = { ...state };
  newState.data = action.data;
  switch(action.type) {
    case "toggleModal2On":
      newState.on = true;
      return newState;
    case "toggleModal2Off":
      newState.on = false;
      return newState;
  }
  return state;
};

// For bookmark/favorites
const MenuFave = (state={current: 'health'}, action) => {
  const newState = { ...state };
  switch(action.type) {
    case "updateMenuFave":
      newState.current = action.current;
      return newState
  }
  return state;
};

// Holds the URL for Favicon Finder
const URL = (state={current:{domain:'test.com'}}, action) => {
  let newState = { ...state };
  switch(action.type) {
    case "updateURL":
      newState.current = action.current;
      return newState
  }
  return state;
};

// plans to implement
const Search = (state={current: ""}, action) => {
  const newState = { ...state };
  switch(action.type) {
    case "updateSearch":
      newState.current = action.current;
      return newState;
  }
  return state;
};

const reducers = combineReducers({
  App,
  Apex1,
  User,
  Menu,
  Modal,
  Modal2,
  Bookmarks,
  Domains,
  Articles,
  MenuFave,
  URL,
  Search
});

export default reducers;








// causes a re-render even in Apex
// const App = (state, action) => {
//   const newState = { ...state };
//   return newState;
// };

// causes error
// const App = (state, action) => {
//   switch(action.type) {
//     case "toggleAppStyle":
//       state.current =  !state.current;
//       break;
//   }
//   return state;
// };

import { createStore } from 'redux';

// 1st required parameter for createStore() holds reducers which will change the state based on an action / event
// each action is a plain object and must have a type property at minimal
// a reducer takes the previous state, applies an action, and returns the next state using a pure function
import reducers from './reducers';

// 2nd optional parameter for createStore holds the default values starting for state
import defaultstore from './defaultstore'

// 3rd optional parameter for createStore which holds middleware similar to Express
import middleware from './middleware';

// creates a store which has methods getState(), dispatch(), and subscribe()
const store = createStore(reducers, defaultstore, middleware);

// callback will log any change to the state
store.subscribe( () => {
  // console.log('STORE.SUBSCRIBE', store.getState());
});

export default store;
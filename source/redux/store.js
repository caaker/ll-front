import reducers from './reducers';
import { createStore } from 'redux';

const defaultStore = {
  User:{
    current: null
  },
  URL: {
    domain: 'google.com'
  }
};

export default createStore(reducers, defaultStore);
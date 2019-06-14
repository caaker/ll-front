import { createStore } from 'redux';

// 1st required parameter
import reducers from './reducers';

// 2nd optional parameter for createStore
import defaultstore from './defaultstore'

// 3rd optional parameter for createStore
import middleware from './middleware';


export default createStore(reducers, defaultstore, middleware);
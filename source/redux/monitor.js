import store from './store';

store.subscribe( () => {
  console.log('STORE.SUBSCRIBE', store.getState());
});
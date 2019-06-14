import store from './store';

console.log('Store');
console.log(store)

store.subscribe( () => {
  console.log('STORE.SUBSCRIBE', store.getState());
});
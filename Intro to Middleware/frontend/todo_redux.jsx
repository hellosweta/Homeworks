import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import {applyMiddleware} from 'redux';

import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  const preloadedState = localStorage.state ?
    JSON.parse(localStorage.state) : {};
  let store = configureStore(preloadedState);
  

  const root = document.getElementById('content');
  ReactDOM.render(<Root store={store} />, root);
  // applyMiddlewares function that will run either a single middleware or a group of middlewares. applyMiddlewares will give the middlewares access to the sto
});




// const applyMiddlewares = (store, middlewares) => {
//   let dispatch = store.dispatch;
//   middlewares.forEach((middleware) => {
//     dispatch = middleware(store)(dispatch);
//   });
//   return Object.assign({}, store, { dispatch });
// };
// Now let's write an applyMiddlewares function that receives the store and the list of middlewares as arguments:
//
// Create a variable dispatch, setting it equal to store.dispatch
// forEach middleware in the list of middlewares,
// Reassign dispatch to the result of middleware(store)(dispatch)
// Return Object.assign({}, store, { dispatch }) { ...store, dispatch: dispatch }

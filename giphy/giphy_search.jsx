import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import Root from './components/root';
import {receiveSearchGiphys} from './actions/giphy_actions.js';
import {fetchSearchGiphys} from './actions/giphy_actions.js';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
  // ReactDOM.render(<Root store={store} />, document.getElementById('root'));
  // window.store = store;
  // window.fetchSearchGiphys = fetchSearchGiphys;
  // window.receiveSearchGiphys = receiveSearchGiphys;
  // window.fetchSearchGiphys = fetchSearchGiphys;

});

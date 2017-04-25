import { applyMiddleware } from 'redux';
import { createStore } from 'redux';
import RootReducer from '../reducers/root_reducer';

const configureStore = (preloadedState = {}) => {
  const store = createStore(RootReducer, preloadedState, applyMiddleware(addLoggingToDispatch));
  // applyMiddleware(addLoggingToDispatch);
  console.log(store);
  // debugger;
  store.subscribe( () => {
    localStorage.state = JSON.stringify(store.getState());
  });
  return store;

};

const addLoggingToDispatch = (store) => (next) => (action) => {
  const dispatch = store.dispatch;
  console.log(store.getState());
  console.log(action);
  let result = next(action);
  // dispatch(action);
  console.log(store.getState());
  return result;
};

export default configureStore;

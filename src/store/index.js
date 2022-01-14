import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import { taskReducer } from '../reducers/taskReducer';

import thunk from 'redux-thunk';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
  task: taskReducer
})


const saveToLocalStorage = (state) => {
  try {
    const todoState = JSON.stringify(state);
    localStorage.setItem("todoState", todoState);
  } catch (e) {
    console.log(e);
  }
}


const loadFromLocalStorage = () => {
  try {
    const todoState = localStorage.getItem("todoState");
    if (todoState === null) return undefined;
    return JSON.parse(todoState);
  } catch (e) {
    console.log(e);
    return undefined;
  }
}


 const store = createStore(
  reducers,
  loadFromLocalStorage(),
  composeEnhancers(
    applyMiddleware(thunk)
)
);


store.subscribe(() => saveToLocalStorage(store.getState()));

export default store

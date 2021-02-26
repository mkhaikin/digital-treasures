import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux' // Combine reducers & add Middleware later - combineReducers,
import thunk from 'redux-thunk';

import './index.css';
import App from './App';

import rootReducer from "./rootReducer";

const store = createStore(
  rootReducer, 
  applyMiddleware(thunk)
);

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
        <App/>
      </Provider>,
  </React.StrictMode>,
  document.getElementById('root')
);
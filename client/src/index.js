import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';

import './index.css';
import App from './App';

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
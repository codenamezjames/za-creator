import React                            from 'react';
import { render }                       from 'react-dom';
import { Provider }                     from 'react-redux';
import App                              from './components/App';
import { createStore, applyMiddleware } from 'redux'
import { createLogger }                 from 'redux-logger'
import allReducers                      from './reducers'

import '../node_modules/bootswatch/paper/bootstrap.min.css';

// Creat Redux Store
const store = createStore( 
  allReducers, 
  applyMiddleware(createLogger()) 
);

// Create Root App
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);





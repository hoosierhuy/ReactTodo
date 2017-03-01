import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import TodoApp from 'TodoApp';
import * as actions from './actions/actions';
const configureStore = require('configureStore').configureStore();


configureStore.subscribe(() => {
  console.log('New state', configureStore.getState());
});


// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Provider store={configureStore}>
    <TodoApp/>
  </Provider>,
  document.getElementById('todo-app')
);

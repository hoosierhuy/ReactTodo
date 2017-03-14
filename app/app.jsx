import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import TodoApp from './components/TodoApp';
import * as actions from './actions/actions';
const store = require('configureStore').configure();
import Login from './components/Login';

store.dispatch(actions.startAddTodos());

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/">
        <IndexRoute component={Login} />
        <Route path="todos" component={TodoApp}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('todo-app')
);

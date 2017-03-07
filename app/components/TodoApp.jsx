import React from 'react';
import uuid from 'node-uuid';
import moment from 'moment';

import TodoList from './TodoList';
import AddTodo from './AddTodo';
import TodoSearch from './TodoSearch';
import TodoAPI from '../api/TodoAPI';

const TodoApp = React.createClass({
  render: function () {
    return (
      <section>
        <h1 className="page-title">Todo App</h1>

        <div className="row">
          <div className="column small-centered small-11 medium-6 large-5">
            <article className="container">
              <TodoSearch />
              <TodoList />
              <AddTodo />
            </article>
          </div>
        </div>
      </section>
    )
  }
});

export default TodoApp;

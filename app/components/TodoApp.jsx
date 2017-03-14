import React from 'react';
import * as Redux from 'react-redux';

import TodoList from './TodoList';
import AddTodo from './AddTodo';
import TodoSearch from './TodoSearch';
import * as actions from './../actions/actions';

export const TodoApp = React.createClass({
  onLogout(e) {
    e.preventDefault();
    const {dispatch} = this.props;

    dispatch(actions.startLogout());
  },

  render() {
    return (
      <section>
        <article className="page-actions">
          <a href="#" onClick={this.onLogout}>Log Out</a>
        </article>
        <h1 className="page-title">Todo App</h1>
        <article className="row">
          <div className="column small-centered small-11 medium-6 large-5">
            <article className="container">
              <TodoSearch />
              <TodoList />
              <AddTodo />
            </article>
          </div>
        </article>
      </section>
    )
  }
});

export default Redux.connect()(TodoApp);

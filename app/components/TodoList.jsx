import React from 'react';
import {connect} from 'react-redux';
import Todo from './Todo';
import TodoAPI from '../api/TodoAPI';

export const TodoList = React.createClass({
  render: function () {
    let {todos, showCompleted, searchText} = this.props;
    let renderTodos = () => {
      const filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);

      if (filteredTodos.length === 0) {
        return (
          <p className="container__message">Nothing To Do</p>
        );
      }

      return filteredTodos.map((todo) => {
        return (
          <Todo key={todo.id} {...todo} />
        );
      });
    };

    return (
      <section>
        {renderTodos()}
      </section>
    );
  }
});

export default connect(
  (state) => {
    return state;
  }
)(TodoList);
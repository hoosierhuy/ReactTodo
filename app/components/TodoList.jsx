import React from 'react';
import Todo from './Todo';

const TodoList = React.createClass({
  render: function () {
    let {todos} = this.props;
    let renderTodos = () => {
      return todos.map((todo) => {
        return (
          <Todo key={todo.id} {...todo} onToggle={this.props.onToggle} />
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

export default TodoList;
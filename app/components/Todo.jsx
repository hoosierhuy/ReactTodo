import React from 'react';
import moment from 'moment';

const Todo = React.createClass({
  render: function () {
    let {id, text, completed, createdAt, completedAt} = this.props;
    let todoClassName = completed ? 'todo todo-completed' : 'todo';
    let renderDate = () => {
      let message = 'Created: ';
      let timestamp = createdAt;

      if (completed) {
        message = 'Completed';
        timestamp = completedAt;
      }

      return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm A');
    };

    return (
      <section className={todoClassName} onClick={() => {
        this.props.onToggle(id);
      }}>
        <article>
          <input type="checkbox" checked={completed}/>
        </article>
        <article>
          <p>{text}</p>
          <p className="todo__subtext">{renderDate()}</p>
        </article>
      </section>
    );
  }
});

export default Todo;
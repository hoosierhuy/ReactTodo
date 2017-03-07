import React from 'react';
import {connect} from 'react-redux';
import moment from 'moment';
import * as actions from '../actions/actions';

export const Todo = React.createClass({
  render: function () {
    let {id, text, completed, createdAt, completedAt, dispatch} = this.props;
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
        dispatch(actions.toggleTodo(id));
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

export default connect()(Todo);
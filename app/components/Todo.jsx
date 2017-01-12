import React from 'react';

const Todo = React.createClass({
  render: function () {
    let {id, text, completed} = this.props;

    return (
      <section onClick={() => { this.props.onToggle(id); }}>
        <input type="checkbox" checked={completed}/>
        {text}
      </section>
    );
  }
});

export default Todo;
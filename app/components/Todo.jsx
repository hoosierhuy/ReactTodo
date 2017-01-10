import React from 'react';

const Todo = React.createClass({
  render: function () {
    let {id, text} = this.props;

    return (
      <section>
        {id}. {text}
      </section>
    );
  }
});

export default Todo;
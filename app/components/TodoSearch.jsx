import React from 'react';

const TodoSearch = React.createClass({
  handleSearch: function () {
    let showCompleted = this.refs.showCompleted.checked;
    let searchText = this.refs.searchText.value;

    this.props.onSearch(showCompleted, searchText);
  },
  render: function () {
    return (
      <section>
        <article>
          <input type="search" ref="searchText" placeholder="Search todos" onChange={this.handleSearch} />
        </article>
        <article>
          <label>
            <input type="checkbox" ref="showCompleted" onChange={this.handleSearch} />
            Show Completed Todos
          </label>
        </article>
      </section>
    )
  }
});

export default TodoSearch;

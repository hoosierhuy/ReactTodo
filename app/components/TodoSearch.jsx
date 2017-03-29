import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/actions';

export class TodoSearch extends Component {

  constructor (props) {
    super (props);
  }

  render () {
    const {dispatch, showCompleted, searchText} = this.props;
    return (
      <section className="container__header">
        <article>
          <input type="search" ref="searchText" placeholder="Search todos" value={searchText} onChange={() => {
            let searchText = this.refs.searchText.value;
            dispatch(actions.setSearchText(searchText));
          }} />
        </article>
        <article>
          <label>
            <input
              type="checkbox"
              ref="showCompleted"
              checked={showCompleted} onChange={() => {
              dispatch(actions.toggleShowCompleted());
            }}
            />
            Show Completed Todos
          </label>
        </article>
      </section>
    )
  }

}

export default connect(
  (state) => {
    return {
      showCompleted: state.showCompleted,
      searchText: state.searchText,
    };
  }
)(TodoSearch);

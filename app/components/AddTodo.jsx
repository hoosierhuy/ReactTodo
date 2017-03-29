import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/actions';

export class AddTodo extends Component {

  constructor (props) {
    super (props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit (evt) {
    evt.preventDefault();

    const {dispatch} = this.props;
    let todoText = this.refs.todoText.value;

    if (todoText.length > 0) {
      this.refs.todoText.value = '';
      dispatch(actions.startAddTodo(todoText));
    } else {
      this.refs.todoText.focus();
    }

  }

  render () {
    return (
      <section className="container__footer">
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref="todoText" placeholder="What do you need to do?"/>
          <button className="button expanded">Add Todo</button>
        </form>
      </section>
    );
  }
}

export default connect()(AddTodo);
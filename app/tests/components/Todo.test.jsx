import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import TestUtils from 'react-addons-test-utils';
import $ from 'jQuery';

import * as actions from '../../actions/actions';
import {Todo} from '../../components/Todo';

describe('Todo: ', () => {
  it('should exists', () => {
    expect(Todo).toExist();
  });

  it('should dispatch TOGGLE_TODO action on click', () => {
    const todoData = {
      id: 199,
      text: 'Write todo.test.jsx test',
      completed: true,
    };
    const action = actions.startToggleTodo(todoData.id, !todoData.completed);

    let spy = expect.createSpy();
    let todo = TestUtils.renderIntoDocument(<Todo dispatch={spy} />);

    todo.refs.completed.checked = true;
    TestUtils.Simulate.change(todo.refs.completed);

    expect(spy).toHaveBeenCalledWith(action);
  });
});
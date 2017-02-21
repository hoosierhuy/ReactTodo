import expect from 'expect';
import * as actions from '../../actions/actions';

describe('Actions', () => {
  it('should generate search text action', () => {
    let action = {
      type: 'SET_SEARCH_TEXT',
      searchText: 'Some search text',
    };
    let res = actions.setSearchText(action.searchText);

    expect(res).toEqual(action);
  });
});

it('should generate toggle show completed action', () => {
  let action = {
    type: 'TOGGLE_SHOW_COMPLETED',
  };
  let res = actions.toggleShowCompleted();

  expect(res).toEqual(action);
});

it('should generate add todo action', () => {
  let action = {
    type: 'ADD_TODO',
    text: 'Go running',
  };
  let res = actions.addTodo(action.text);

  expect(res).toEqual(action);
});

it('should generate toggle todo action', () => {
  let action = {
    type: 'TOGGLE_TODO',
    id: 7,
  };
  let res = actions.toggleTodo(7);

  expect(res).toEqual(action);
});
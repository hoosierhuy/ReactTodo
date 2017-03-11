import expect from 'expect';
import deepFreeze from 'deep-freeze-strict';
import * as reducers from '../../reducers/reducers';

describe('Reducers', () => {
  describe('searchTextReducer', () => {
    it('should set searchText', () => {
      const action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'bacon',
      };
      let res = reducers.searchTextReducer(deepFreeze(''), deepFreeze(action));

      expect(res).toEqual(action.searchText);
    });
  });

  describe('showCompletedReducer', () => {
    it('should toggle showCompleted', () => {
      const action = {
        type: 'TOGGLE_SHOW_COMPLETED',
      };
      let res = reducers.showCompletedReducer(deepFreeze(false), deepFreeze(action));

      expect(res).toBe(true);
    });
  });

  describe('todosReucer', () => {
    it('should add a new todo', () => {
      const action = {
        type: 'ADD_TODO',
        todo: {
          id: 'abc',
          text: 'Something to do',
          completed: false,
          createdAt: 92384275
        }
      };
      let res = reducers.todosReducer(deepFreeze([]), deepFreeze(action));

      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(action.todo);
    });

    it('should update a todo', () => {
      const todos =[{
        id: '123',
        text: 'Something',
        completed: true,
        createdAt: 123,
        completedAt: 125,
      }];
      const updates = {
        completed: false,
        completedAt: null
      };
      const action = {
        type: 'UPDATE_TODO',
        id: todos[0].id,
        updates
      };
      let res = reducers.todosReducer(deepFreeze(todos), deepFreeze(action));

      expect(res[0].completed).toEqual(updates.completed);
      expect(res[0].completedAt).toEqual(updates.completedAt);
      expect(res[0].text).toEqual(todos[0].text);
    });

    it('should add existing todos', () => {
      let todos = [{
        id: '111',
        text: 'anything',
        completed: false,
        compleatedAt: undefined,
        createdAt: 33000,
      }];
      let action = {
        type: 'ADD_TODOS',
        todos,
      };
      let res = reducers.todosReducer(deepFreeze([]), deepFreeze(action));

      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(todos[0]);
    });
  });

});
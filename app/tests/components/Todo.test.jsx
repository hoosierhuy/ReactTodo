import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import TestUtils from 'react-addons-test-utils';
import $ from 'jQuery';

import Todo from '../../components/Todo';

describe('Todo: ', () => {
  it('should exists', () => {
    expect(Todo).toExist();
  })
});
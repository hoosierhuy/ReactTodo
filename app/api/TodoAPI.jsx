import $ from 'jquery';

const TodoAPI = {
  setTodos: function (todos) {
    if ($.isArray(todos)) {
      localStorage.setItem('todos', JSON.stringify(todos));
      return todos;
    }
  },
  getTodos: function () {
    var stringTodos = localStorage.getItem('todos');
    var todos = [];

    try {
      todos = JSON.parse(stringTodos);
    } catch (e) {
      console.log('oh noes api', e.message);
    }

    return $.isArray(todos) ? todos : [];
  }
};

export default TodoAPI;
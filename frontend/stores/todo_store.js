var _todos = {};
var _callbacks = [];

var TodoStore = {
  all: function () {
    //is this dangerous?
    return _todos;
  },
  fetch: function () {
    $.ajax(
      {
        method: "GET",
        url: "/api/todos",
        dataType: "json",
        success: function (todos) {
          var newTodos = {};
          todos.forEach(function (todo) {
            newTodos[todo.id] = todo;
          });

          _todos = newTodos;
          TodoStore.changed();
        },
        failure: function () {
          console.log("NOOO!!!");
        }
      }
    );
  },
  create: function (todo) {
    $.ajax(
      {
        method: "POST",
        url: "/api/todos",
        dataType: "json",
        data: todo,
        success: function (createdTodo) {
          _todos[createdTodo.id] = createdTodo;
          TodoStore.changed();
        },
        error: function () {
          console.log("We failed again!");
        }
      }
    );
  },

  destroy: function (id) {
    if (_todos.hasOwnProperty(id)) {
      $.ajax(
        {
          method: "DELETE",
          url: "/api/todos/" + id,
          dataType: "json",
          success: function (todo) {
            delete _todos[todo.id];
            TodoStore.changed();
          },
          error: function () {
            console.log("it broke.");
          }
        }
      );
    }
  },

  toggleDone: function (id) {
    var done = !_todos[id].done;
    $.ajax(
      {
        method: "PATCH",
        url: "/api/todos/" + id,
        dataType: "json",
        data: {todo: {done: done} },
        success: function (todo) {
          _todos[todo.id].done = done;
          TodoStore.changed();
        }
      }
    );
  },

  changed: function() {
    _callbacks.forEach(function(callback) {
      callback();
    });
  },

  addChangedHandler: function (handler) {
    _callbacks.push(handler);
  },

  removeChangedHandler: function (handler) {
    var index = _callbacks.indexOf(handler);
    if (index !== -1) {
      _callbacks.splice(index, 1);
    }
  }

};


module.exports = TodoStore;

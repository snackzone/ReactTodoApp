var React = require('react');
var TodoStore = require('../stores/todo_store.js');

var TodoList = React.createClass({
  getInitialState: function () {
    return(
      {todoStore: TodoStore.all()}
    );
  },

  componentDidMount: function () {
    TodoStore.addChangedHandler(this.todosChanged);
    TodoStore.fetch();
  },

  componentWillUnmount: function () {
    TodoStore.removeChangedHandler(this.todosChanged);
  },

  todosChanged: function () {
    this.setState( {todoStore: TodoStore.all()} );
  },

  render: function () {
    var todos = [];
    Object.keys(this.state.todoStore).forEach(function(id) {
      var todo = <li key={id}>{this.state.todoStore[id].title}</li>;
      todos.push(todo);
    }.bind(this));

    return (
      <div>
        <ul>
          {todos}
        </ul>
      </div>
    );
  }
});


module.exports = TodoList;

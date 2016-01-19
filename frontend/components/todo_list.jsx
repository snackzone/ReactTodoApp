var React = require('react');
var TodoStore = require('../stores/todo_store.js');
var TodoListItem = require('./todo_list_item.jsx');

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
      var todo = <TodoListItem key={id} todo={this.state.todoStore[id]}/>;
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

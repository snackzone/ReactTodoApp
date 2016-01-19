var React = require('react');
var TodoStore = require('../stores/todo_store');

var TodoListItem = React.createClass({
  handleDestroy: function (e) {
    e.preventDefault();
    TodoStore.destroy(this.props.todo.id);
  },

  render: function () {
    return (
      <li>
        <div className="title">
          {this.props.todo.title}
        </div>
        <div className="body">
          {this.props.todo.body}
        </div>
        <button onClick={this.handleDestroy}>Delete Todo</button>
      </li>
    );
  }
});

module.exports = TodoListItem;

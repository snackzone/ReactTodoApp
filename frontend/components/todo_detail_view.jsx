var React = require('react');
var TodoStore = require('../stores/todo_store');


var TodoDetailView = React.createClass({
  handleDestroy: function (e) {
    e.preventDefault();
    TodoStore.destroy(this.props.todo.id);
  },

  render: function () {
    return (
      <div className="todo-details">
        <div className="body">
          {this.props.todo.body}
        </div>
        <button className="button delete-button"
                onClick={this.handleDestroy}>
                  Delete Todo
        </button>
      </div>
    );
  }
});

module.exports = TodoDetailView;

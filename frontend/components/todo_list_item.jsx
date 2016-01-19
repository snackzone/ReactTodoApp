var React = require('react');
var TodoStore = require('../stores/todo_store');
var DoneButton = require('./done_button.jsx');
var TodoDetailView = require('./todo_detail_view.jsx');

var TodoListItem = React.createClass({
  getInitialState: function () {
    return (
      { viewDetails: false }
    );
  },

  toggleVisibility: function (e) {
    e.preventDefault();
    this.setState({viewDetails: !this.state.viewDetails});
  },

  render: function () {
    var details;

    if (this.state.viewDetails) {
      details = <TodoDetailView todo={this.props.todo}/>;
    }

    return (
      <li onClick={this.toggleVisibility}>
        <div className="title">
          {this.props.todo.title}
        </div>
        <DoneButton todo={this.props.todo}/>
        {details}
      </li>
    );
  }
});

module.exports = TodoListItem;

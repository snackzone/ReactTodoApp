var React = require('react');


var TodoListItem = React.createClass({
  render: function () {
    return (
      <li>
        <div className="title">
          {this.props.todo.title}
        </div>
        <div className="body">
          {this.props.todo.body}
        </div>
      </li>
    );
  }
});

module.exports = TodoListItem;

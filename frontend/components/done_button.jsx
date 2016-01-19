var React = require('react');
var TodoStore = require('../stores/todo_store');


var DoneButton = React.createClass({
  handleDoneToggle: function () {
    TodoStore.toggleDone(this.props.todo.id);
  },
  render: function () {
    var buttonText = "Mark " + (this.props.todo.done ? "Unfinished" : "Finished");
    return(
      <button onClick={this.handleDoneToggle}>{buttonText}</button>
    );
  }
});





module.exports = DoneButton;

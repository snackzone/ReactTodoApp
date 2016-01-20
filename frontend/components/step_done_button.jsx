var React = require('react');
var StepStore = require('../stores/step_store');

var StepDoneButton = React.createClass({
  handleDone: function(event){
    event.stopPropagation();
    StepStore.toggleDone(this.props.todo_id, this.props.step.id);
  },

  render: function () {
    var text = this.props.step.done ? "Undo" : "Done";

    return (
      <button onClick={this.handleDone}>{text}</button>
    );
  }
});

module.exports = StepDoneButton;
